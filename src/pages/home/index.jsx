import React from "react";
import "./index.less";
import { observer } from "mobx-react-lite";

const Home = function (props) {
  return <div>hello world</div>;
};

Home.rootClassName = "Home";

export default observer(Home);
