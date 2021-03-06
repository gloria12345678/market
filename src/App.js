import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { About } from "./components/about";
import Header from "./components/Header";
import VisiableHeader from "./containers/VisiableHeader";
import Home from "./pages/Home";
import Market from "./pages/Market";
import config from './config'
import './App.css';
const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="/">
            <div className="container">
              {/* <Header /> */}
              <VisiableHeader />
              <div className="router-view" >
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/market" component={Market} />
              </div>


            </div>
        </Router>
        <Footer style={{ textAlign: 'center' }}>
          {config.sitename} ©2018
        </Footer>
      </div>
    );
  }
}

export default App;
