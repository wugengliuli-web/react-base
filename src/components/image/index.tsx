import React, { DependencyList, useMemo } from "react";
import { isOpenWebpImage } from "@utils/index";
import { classNamePrefix } from "@globals/root-class-name-prefix";
import { useMount } from "react-use";
import { track } from "@bridge/index";

interface IProps extends DependencyList {
  isOpenWebp?: boolean;
  w: number;
  h: number;
  src: string;
}

const Image = (props: IProps) => {
  const { w, h, isOpenWebp = true } = props;

  const src = useMemo(() => {
    // 如果不支持webp格式，返回默认地址
    // 如果不开启这个功能 返回默认地址
    if (!isOpenWebpImage || !isOpenWebp) return props.src;
    else {
      // 如果支持webp， 去cdn 拿webp格式的图片
      return props.src + "~.webp";
    }
  }, [props.src, isOpenWebp]);

  // ? 监控图片加载成功率
  useMount(() => {
    track.loadImageStart();
  });

  const onload = () => {
    track.loadImageSuccess();
  };

  const onerror = () => {
    track.loadImageFail();
  };

  return (
    <div className={classNamePrefix.imageClassName}>
      <img
        {...props}
        src={src}
        width={w}
        height={h}
        loading="lazy"
        onLoad={onload}
        onError={onerror}
      />
    </div>
  );
};

export default Image;
