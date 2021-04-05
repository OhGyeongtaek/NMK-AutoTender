export function campaignTp(name: string) {
  if (name === "WEB_SITE") return "파워링크";

  if (name === "SHOPPING") return "쇼핑검색";

  if (name === "POWER_CONTENTS") return "파워컨텐츠";

  if (name === "BRAND_SEARCH") return "브랜드검색";

  return "알수없음";
}
