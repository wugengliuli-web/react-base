//TODO: SSR下会出错
export const isOpenWebpImage =
  document
    .createElement("canvas")
    .toDataURL("image/webp")
    .indexOf("data:image/webp") === 0;
