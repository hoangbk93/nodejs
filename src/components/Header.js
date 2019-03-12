import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div className="page-header navbar">
          <div className="logo-mobile">
              <img src="images/logo-mobile.gif" alt="" />
          </div>
        
        <div className="page-header-inner ">
          
          <a
            href="#click"
            className="menu-toggler responsive-toggler"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span><i className="fas fa-bars"></i></span>
          </a>
          
          <div className="top-menu">
            <ul className="nav navbar-nav pull-right">
              <li className="dropdown">
                <a href="#click" className="dropdown-toggle">
                  <i className="fab fa-elementor"></i>Trang chủ
                </a>
              </li>
             
              <li
                className="dropdown dropdown-extended dropdown-notification"
                id="header_notification_bar"
              >
                <a
                  href="#click"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-close-others="true"
                >
                <i className="fas fa-bell"></i> Thông báo
                  <span className="badge badge-default"> 7 </span>
                </a>
                <ul className="dropdown-menu">
                  <li className="external">
                    <h3><span className="bold">12 pending</span> notifications</h3>
                    <a href="page_user_profile_1.html">view all</a>
                  </li>
                  <li>
                    <ul
                      className="dropdown-menu-list scroller"
                      
                      data-handle-color="#637283"
                    >
                      <li>
                        <a href="#click">
                          <span className="time">just now</span>
                          <span className="details">
                            <span
                              className="label label-sm label-icon label-success"
                            >
                            </span>
                            New user registered.
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-user">
                <a
                  href="#click"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-close-others="true"
                >
                  <i className="fas fa-user"></i> Thông tin tài khoản
                </a>
              </li>
              
              <li className="dropdown">
                <a href="#click" className="dropdown-toggle">
                  <i className="fas fa-sign-out-alt"></i> Thoát
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Header;
