import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
    <div className="page-container">
    		<div className="page-sidebar-wrapper">
          <div className="page-sidebar navbar-collapse collapse" id="main-left">
           
            <div className="page-logo">
	            <Link to="/">
	            	<img src="images/logo.gif" alt="logo" className="logo-default" />
	            </Link>
            </div>
            <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true"
            data-slide-speed="200">
           
           
            <li className="sidebar-toggler-wrapper hide">
              <div className="sidebar-toggler"><span></span></div>
            </li>
           

            <li className="nav-item ">
            <Link className="nav-link nav-toggle" to="/user"><i className="icon-diamond"></i>
                <span className="title">Quản lí user</span>
               </Link>
            </li>
            <li className="nav-item  ">
              <a href="#click" className="nav-link nav-toggle">
                <i className="icon-puzzle"></i>
                <span className="title">Quản lí ứng dụng</span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item  ">
                  <Link to="ung-dung-vote" className="nav-link ">
                    <span className="title">Danh sách ứng dụng</span>
                  </Link>
                </li>
                <li className="nav-item  ">
                  <Link to="theme-client" className="nav-link ">
                    <span className="title">Giao diện client</span>
                    <span className="badge badge-danger">2</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item  ">
              <a href="#click" className="nav-link nav-toggle">
                <i className="icon-puzzle1"></i>
                <span className="title">Báo cáo</span> <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item  ">
                  <a href="baocao.html" className="nav-link ">
                    <span className="title">Người dùng online</span>
                    <span className="badge badge-danger">2</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="congtachotich.html" className="nav-link ">
                    <span className="title">Thống kê traffic</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="chitiet-dientu.html" className="nav-link ">
                    <span className="title">Danh sách bình chọn</span>
                   
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a href="/thongke" className="nav-link nav-toggle">
                <i className="icon-puzzle1"></i>
                <span className="title">Thống kê</span> 
              </a>
            </li>

            <li className="nav-item  ">
              <a href="#click" className="nav-link nav-toggle">
                <i className="icon-puzzle1"></i>
                <span className="title">Cài đặt</span> <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item  ">
                  <a href="baocao.html" className="nav-link ">
                    <span className="title">Config data</span>
                    <span className="badge badge-danger">2</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="congtachotich.html" className="nav-link ">
                    <span className="title">Theme option</span>
                  </a>
                </li>
                <li className="nav-item  ">
                  <a href="chitiet-dientu.html" className="nav-link ">
                    <span className="title">Global</span>
                   
                  </a>
                </li>
              </ul>
            </li>
          </ul>
           
          </div>
         
        </div>
    </div>
    );
  }
}

export default Sidebar;
