<template>
  <v-app>
    <v-row>
      <app-menu ref="appMenu" @click="onClickMenu"></app-menu>
      <v-col>
        <v-app-bar flat>
          <v-app-bar-nav-icon @click.stop="onClickDrawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-main class="pa-5">
          <router-view class="pr-2" ref="view" />
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppMenu from "@/components/nav/AppMenu.vue";
import Keyword from "@/views/Keywords.vue";

@Component({
  components: {
    AppMenu
  }
})
export default class App extends Vue {
  private drawer = true;
  $refs!: {
    appMenu: InstanceType<typeof AppMenu>;
    view: InstanceType<typeof Keyword>;
  };

  // private created() {}

  private onClickDrawer() {
    this.$refs.appMenu.onClickDrawer();
  }

  private onClickMenu() {
    //
  }
}
</script>

<style></style>
