import React, { Component } from 'react';


class Thongke extends Component {
  render() {
    return (
    	 <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="dashboard">

                        <div className="portlet box green1 margin-page">
                            <div className="portlet-title">
                                <div className="caption">
                                    <img src="images/ic3.gif" alt="" /> <span>Biểu đồ</span> </div>

                            </div>
                            <div className="portlet-body">
                                <div className="chart-content">
                                    <div id="diagram-column"></div>
                                </div>


                            </div>
                        </div>
                        <div className="portlet box green1 margin-page">
                            <div className="portlet-title">
                                <div className="caption">
                                    <img src="images/ic3.gif" alt="" /> <span>Biểu đồ</span> </div>

                            </div>
                            <div className="portlet-body">
                                <div className="chart-content">
                                    <div id="diagram-line"></div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
    );
  }
}

export default Thongke;