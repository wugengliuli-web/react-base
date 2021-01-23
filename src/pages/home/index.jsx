import React from "react";
import "./index.less";
import { observer } from "mobx-react-lite";
import Image from "@components/image/index.jsx";
import test from "@assets/test.png";
const Home = function (props) {
  return <div>hello world</div>;
};

Home.rootClassName = "Home";

export default observer(Home);
