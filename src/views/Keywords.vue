<template>
  <div class="Keywords">
    <v-card class="px-3 mb-3">
      <v-row>
        <v-col>
          <v-text-field v-model="filters.keyword" label="키워드"></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="filters.adgrouopName"
            label="광고 그룹"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-text-field
            v-model="filters.campaignName"
            label="캠패인"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
    <v-card>
      <v-data-table
        :items="validation"
        :headers="headers"
        :loading="isConnecting"
        loading-text="로딩중 ..."
        no-data-text="데이타가 없습니다"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Campaign, Adgroup, Keyword } from "@/utils/types";

import CampaignApi from "@/apis/CampaignApi";
import AdgroupApi from "@/apis/AdgroupApi";
import KeywordApi from "@/apis/KeywordApi";

@Component({})
export default class Keywords extends Vue {
  public keywords: Keyword[] = [];
  public adgrouops!: Adgroup[];
  public campaigns!: Campaign[];

  private adgroupApi = new AdgroupApi();
  private keywordApi = new KeywordApi();
  private campaignApi = new CampaignApi();

  private filters = {
    keyword: "",
    adgroupName: "",
    campaignName: ""
  };

  private isConnecting = false;

  private headers = [
    { text: "키워드", value: "keyword" },
    { text: "광고그룹", value: "adgroupName" },
    { text: "캠패인", value: "campaignName" },
    { text: "at", value: "bidAmt" },
    { text: "on/off", value: "out_at" },
    { text: "on/off", value: "in_result" }
  ];

  private created(): void {
    this.getCamaigns();
  }

  private getCamaigns(): void {
    this.isConnecting = true;

    this.campaignApi.getCampaign().then(({ data }) => {
      this.campaigns = data;

      this.getAdgroups();
    });
  }

  private getAdgroups(): void {
    this.adgroupApi.getAdgroups().then(({ data }) => {
      this.adgrouops = data;

      this.getKeywords();
    });
  }

  private getKeywords(): void {
    const adgroupIds = this.adgrouops.map((adgroup) => adgroup.nccAdgroupId);

    this.keywordApi
      .getKeywords(adgroupIds)
      .then(({ data }) => {
        data.forEach((keywords) => {
          keywords.forEach((keyword) => {
            keyword.adgroupName = this.findAdgroupName(keyword.nccAdgroupId);
            keyword.campaignName = this.findCampaignName(keyword.nccCampaignId);

            this.keywords.push(keyword);
          });
        });
      })
      .finally(() => {
        this.isConnecting = false;
      });
  }

  private findCampaignName(id: string): string {
    const campaign = this.campaigns.find(
      (campaign) => campaign.nccCampaignId === id
    );

    if (campaign === undefined) return "";

    return campaign.name;
  }

  private findAdgroupName(id: string): string {
    const adgroup = this.adgrouops.find(
      (adgroup) => adgroup.nccAdgroupId === id
    );

    if (adgroup === undefined) return "";

    return adgroup.name;
  }

  private validation() {
    return this.keywords.map((keyword) => {
      let validation = true;

      const $keyword = this.filters.keyword;
      const $adgroupName = this.filters.adgroupName;
      const $campaignName = this.filters.campaignName;

      if ($keyword != "")
        validation = validation && keyword.keyword.indexOf($keyword) > -1;

      if ($adgroupName != "")
        validation =
          validation && keyword.adgroupName.indexOf($adgroupName) > -1;

      if ($campaignName != "")
        validation =
          validation && keyword.campaignName.indexOf($campaignName) > -1;

      return validation;
    });
  }
}
</script>
