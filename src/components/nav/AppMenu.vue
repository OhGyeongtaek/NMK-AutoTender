<template>
  <v-card id="wrap-menu" name="wrapMenu">
    <div>
      <nav>
        <h1>네이버 광고</h1>
      </nav>
      <!-- <v-list class="list-wrap">
        <v-list-item-group
          color="primary"
          v-for="(menu, i) in menus"
          :key="'menu-title-' + i"
          :v-if="menus !== {}"
        >
          <v-list-group sub-group>
            <template v-slot:activator>
              <v-list-item-title>
                {{ menu[0].campaignTp | campaignTp }}
              </v-list-item-title>
            </template>

            <v-list-item
              v-for="(campaign, i) in menu"
              :key="i"
              @click="() => click(campaign)"
            >
              {{ campaign.name }}
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
      </v-list> -->
    </div>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import CampaignApi from "@/apis/CampaignApi";

@Component({})
export default class AppMenu extends Vue {
  private drawer: boolean | null = null;
  private menus: any = {};
  private api = new CampaignApi();
  private width = 200;

  private created() {
    // this.api.getCampaign().then((repo: any) => {
    //   const menus: Array<any> = repo.data;
    //   const tempMenu: any = {};
    //   for (let i = 0; i < menus.length; i++) {
    //     const menu = menus[i];
    //     const campaignTp = menu["campaignTp"];
    //     if (tempMenu[campaignTp] == null) {
    //       tempMenu[campaignTp] = [];
    //     }
    //     const campaign = tempMenu[campaignTp];
    //     const cnt = campaign.length;
    //     campaign[cnt] = menu;
    //   }
    //   this.menus = tempMenu;
    // });
  }

  public onClickDrawer() {
    const target = window.document.querySelector("#wrap-menu");
    /* target이 null이 아니면 뒤에 실행 */
    target?.classList.toggle("drawer");
  }

  @Emit()
  private click(menu: any) {
    return menu;
  }
}
</script>
<style>
.v-application--wrap > .row > .col {
  margin: 0;
  padding: 0;
}

#wrap-menu {
  width: 200px;
  height: 100vh;
  overflow: hidden;
  transition-duration: 0.5s;
  /* transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
}

#wrap-menu.drawer {
  width: 10px;
}

nav > h1 {
  width: 200px;
  height: 55px;
  padding: 13px 0;
  border-bottom: 1px solid #ccc;
  text-align: center;
}

.list-wrap {
  width: 200px;
  height: 90vh;
  overflow: auto;
  padding: 0 !important;
}

.list-wrap::-webkit-scrollbar {
  width: 4px;
  background-color: #f9f9f9;
}
.list-wrap::-webkit-scrollbar-thumb {
  background-color: #ddd;
  border-radius: 10px;
}
.v-list-group .v-list-group__header {
  border-bottom: 1px solid #ccc;
}

.v-list-group .v-list-group__items {
  background: #f9f9f9;
}
.v-list-group .v-list-group__items .v-list-item {
  border-bottom: 1px solid #d5d5d5;
}
.v-list-group .v-list-item__title,
.v-list-group .v-list-item {
  font-size: 0.75rem;
}
</style>
