import React, { Component } from 'react';

class Main extends Component {

  render() {
    return ( 
        <div className="page-content-wrapper">
          <div className="page-content">
            <div className="dashboard">
              <div className="menu-option">
                <div className="bs-row bs-row-sm15 bs-row-xs10">
                  <div className="bs-col sm-33-15 xs-33-10">
                    <div className="item">
                      <div className="top">
                        <img className="default" src="images/icon1.gif" alt="" />
                        <img
                          className="hover"
                          src="images/icon1-hover.gif"
                          alt=""
                        />
                      </div>
                      <div className="bottom"><p>ỨNG DỤNG ĐANG HOẠT ĐỘNG</p></div>
                    </div>
                  </div>
                  <div className="bs-col sm-33-15 xs-33-10">
                    <div className="item">
                      <div className="top">
                        <img className="default" src="images/icon2.gif" alt="" />
                        <img
                          className="hover"
                          src="images/icon2-hover.gif"
                          alt=""
                        />
                      </div>
                      <div className="bottom"><p>NGƯỜI DÙNG ĐANG HOẠT ĐỘNG</p></div>
                    </div>
                  </div>
                  <div className="bs-col sm-33-15 xs-33-10">
                    <div className="item">
                      <div className="top">
                        <img className="default" src="images/icon3.gif" alt="" />
                        <img
                          className="hover"
                          src="images/icon3-hover.gif"
                          alt=""
                        />
                      </div>
                      <div className="bottom"><p>QUẢN TRỊ VIÊN</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portlet box green1">
                  <div className="portlet-title">
                      <div className="caption">
                          <img src="images/ic3.gif" alt="" /> <span>BÁO CÁO HÀNG NGÀY </span> </div>
                      <div className="tools">
                          <a href="#click" className="collapse" data-original-title="" title=""> </a>
                          <a href="#portlet-config" data-toggle="modal" className="config" data-original-title="" title=""> </a>
                          <a href="#click" className="reload" data-original-title="" title=""> </a>
                          <a href="#click" className="remove" data-original-title="" title=""> </a>
                      </div>
                  </div>
                  <div className="portlet-body">
                      <div className="table-scrollable">
                          <table className="table table-bordered table-hover">
                              <thead>
                                  <tr>
                                      <th>STT</th>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                      <th></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                  </tr>
                                 
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        
      
   );
  }
}

export default Main;
