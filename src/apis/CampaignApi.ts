import Vue from "vue";
import { Campaign } from "@/utils/types";

export default class CampaignApi {
  private root = "campaign";

  public getCampaign() {
    return Vue.axios.get<Campaign[]>(this.root);
  }
}
