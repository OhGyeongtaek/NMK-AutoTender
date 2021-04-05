import Vue from "vue";
import { Adgroup } from "@/utils/types";

export default class AdgroupApi {
  private root = "adgroup";

  public getAdgroups() {
    return Vue.axios.get<Adgroup[]>(this.root);
  }
}
