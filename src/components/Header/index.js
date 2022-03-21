import React from "react";

import "./index.css";

export default class Header extends React.Component {
  render() {
    const { children } = this.props;

    return <div className="header">{children}</div>;
  }
}
