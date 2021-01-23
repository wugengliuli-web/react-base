import React from "react";
import { track } from "@track";
import routes from "@/routers";
import { Router, Route, Switch } from "react-router-dom";
import { AppHistory } from "@/globals/history";
import "@style/reset.less";

class BaseError extends React.Component {
  componentDidMount() {
    if (!window.onerror) {
      window.onerror = function () {
        // TODO: 错误上报
      };
    }
  }

  componentDidCatch() {
    track.reportError();
  }

  render() {
    return this.props.children;
  }
}

const App = function () {
  return (
    <BaseError>
      <Router history={AppHistory}>
        <Switch>
          {routes.map((r) => {
            const Comp = r.component;
            return <Route key={r.path} path={r.path} component={Comp} exact />;
          })}
        </Switch>
      </Router>
    </BaseError>
  );
};

export default App;
