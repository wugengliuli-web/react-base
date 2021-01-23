import React from "react";
import { GlobalStore } from "@globals/globalStore";
import { useInstance } from "@hooks/use-instance";
import backGroundColor, {
  classNamePrefix,
} from "@globals/root-class-name-prefix";
import cn from "classnames";
import "./index.less";
import { useMount, useUnmount } from "react-use";
import { track } from "@track";
const PageContainer = function (props) {
  const bgColorName = props.bgColorName || backGroundColor.default;
  const displayName = props.displayName || "";

  const rootClassName = `${classNamePrefix.rootClassName}-${displayName}`;
  return (
    <div
      className={cn({
        [rootClassName]: rootClassName,
        [displayName]: displayName,
        [classNamePrefix.pageClassName]: true,
      })}
      style={{ background: backGroundColor[bgColorName] }}
    >
      {props.children}
    </div>
  );
};

const buildPage = function (Component) {
  const { rootClassName = "", displayName = "", bgColorName = "" } = Component;

  // TODO: 首页loading，等接口
  const BuildPage = () => {
    const globalStore = useInstance(() => new GlobalStore());

    // ? 统计用户停留页面时长
    useMount(() => {
      track.pageEnter();
    });

    useUnmount(() => {
      track.pageLeave();
    });

    return (
      <PageContainer
        rootClassName={rootClassName}
        displayName={displayName}
        bgColorName={bgColorName}
      >
        <Component globalStore={globalStore} />
      </PageContainer>
    );
  };

  return BuildPage;
};

export default buildPage;
