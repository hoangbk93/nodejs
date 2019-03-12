import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import Thongke from './pages/Thongke';
import Theme from './pages/Theme';
import Ungdungvote from './pages/Ungdungvote';
import User from './pages/User';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-wrapper" id="main-right">
          <Header />

          <div className="clearfix"></div>
          <div className="page-container">
          <Sidebar />

          <Route exact path='/' component={Main} />
          <Route exact path='/ung-dung-vote' component={Ungdungvote} />
          <Route exact path='/theme-client' component={Theme} />
          <Route exact path='/thongke' component={Thongke} />
          <Route exact path='/user' component={User} />

          <a href="#click" className="page-quick-sidebar-toggler">
          <i className="icon-login"></i>
          </a>
           </div>
          <Footer />
        </div>
          
      </Router>
    );
  }
}

export default App;
