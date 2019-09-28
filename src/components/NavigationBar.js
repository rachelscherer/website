import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 179;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <React.Fragment>
        <div className={this.state.scrolled ? "nav scrolled" : "nav"}>
          <div className="title">
            <h3>Hi, I'm Rachel.</h3>
          </div>
          <div className="nav_text">
            <hr className="top" />
            <Router>
              <Link to="/">About</Link>
              <Link to="/">CV</Link>
              <Link to="/">Projects</Link>
              <Link to="/">Contact</Link>
            </Router>
            <hr className="bottom" />
          </div>
        </div>
        <div className={this.state.scrolled ? "spacer" : "nospacer"}>
          &nbsp;
        </div>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
