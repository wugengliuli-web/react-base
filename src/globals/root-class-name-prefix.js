import { TSHelper } from "@utils/ts-helper";
export const classNamePrefix = TSHelper.createEnum({
  rootClassName: "Swust-Strawberry",
  pageClassName: "Swust-Strawberry-Page",
  imageClassName: "Swust-Strawberry-Image",
});

export const backGroundColorType = TSHelper.createEnum({
  white: "white",
  gray: "gray",
});

let backGroundColor = TSHelper.createEnum({
  white: "#ffffff",
  gray: "#f5f5f5",
});

// 配置默认背景色
backGroundColor.default = backGroundColorType.gray;

export default backGroundColor;
