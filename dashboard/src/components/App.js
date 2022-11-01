import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navClosed: false,
    };
    this.changeNavbar = () => {
      this.setState({ navClosed: !this.state.navClosed });
    };
  }
  render() {
    return (
      <div className={`container ${this.state.navClosed && "nav-closed"}`}>
        <Header changeNavbar={this.changeNavbar} />
        <div className="main">
          <Sidebar className="sidebar" />
          <Main />
        </div>
      </div>
    );
  }
}
export default App;
