import Vue from "vue";
import { Keyword } from "@/utils/types";

export default class KeywordApi {
  private root = "keyword";

  public getKeywords(nccAdgroupIds: string[]) {
    return Vue.axios.get<[Keyword[]]>(this.root, { params: { nccAdgroupIds } });
  }
}
