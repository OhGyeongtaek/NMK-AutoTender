export interface Campaign {
  campaignTp: string;
  customerId: number;
  dailyBudget: string;
  deliveryMethod: string;
  editTm: string;
  name: string;
  nccCampaignId: string;
  periodEndDt: string;
  periodStartDt: string;
  regTm: string;
  status: string;
  statusReason: string;
  trackingMode: string;
  trackingUrl: string;
  useDailyBudget: boolean;
  usePeriod: boolean;
  userLock: boolean;
}

export interface Adgroup {
  adRollingType: string;
  adgroupAttrJson: object;
  adgroupType: string;
  bidAmt: number;
  budgetLock: boolean;
  contentsNetworkBidAmt: number;
  customerId: number;
  dailyBudget: number;
  editTm: string;
  keywordPlusWeight: number;
  mobileChannelId: string;
  mobileNetworkBidWeight: number;
  name: string;
  nccAdgroupId: string;
  nccCampaignId: string;
  pcChannelId: string;
  pcNetworkBidWeight: number;
  regTm: string;
  status: string;
  statusReason: string;
  targets: [];
  useCntsNetworkBidAmt: boolean;
  useDailyBudget: boolean;
  useKeywordPlus: boolean;
  userLock: boolean;
}

export interface Keyword {
  bidAmt: number;
  customerId: number;
  editTm: string;
  inspectStatus: string;
  keyword: string;
  links: object;
  nccAdgroupId: string;
  nccCampaignId: string;
  nccKeywordId: string;
  nccQi: any;
  regTm: string;
  resultStatus: any;
  status: string;
  statusReason: string;
  useGroupBidAmt: boolean;
  userLock: boolean;

  //UI상에서 사용
  adgroupName: string;
  campaignName: string;
}
