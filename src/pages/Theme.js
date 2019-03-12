import React, { Component } from 'react';
import axios from 'axios';


// const nano = require('nano')('http://admin:bnet2019@79@45.118.145.34:5984');

const test ="DANH SÁCH USER";
function senddata(e){
     e.preventDefault();
    console.log('The link was clicked.');
   
}

class Theme extends Component {
   
    constructor(props) {
    super(props);
    this.state = {appid: '',logo:'',banner:'',linkfb:'',linkyoutube:'',linktwitter:'',style:'',item:[]};
    this.handleAppChange = this.handleAppChange.bind(this);
    this.handleLogoChange = this.handleLogoChange.bind(this);
    this.handleLinkfbChange = this.handleLinkfbChange.bind(this);
    this.handlelinkyoutubeChange = this.handlelinkyoutubeChange.bind(this);
    this.handlelinktwitterChange = this.handlelinktwitterChange.bind(this);
    this.handleBannerChange = this.handleBannerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
    
  }
  getdata(){
     axios.get('http://localhost:5000/api/theme')
        .then(res => {
            this.setState({item:res.data.message.docs});
           
        });
  }
  componentWillMount() {
    this.getdata();
  }
  handleAppChange(event) {
    this.setState({appid: event.target.value});    
  }
  handleLogoChange(event) {
    this.setState({logo: event.target.value});
  }
  handleLinkfbChange(event) {
    this.setState({linkfb: event.target.value});    
  }
  handlelinkyoutubeChange(event) {
    this.setState({linkyoutube: event.target.value});
  }
    handlelinktwitterChange(event) {
    this.setState({linktwitter: event.target.value});
  }
  handleBannerChange(event) {
    this.setState({banner: event.target.value});    
  }
  
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state);
   
    event.preventDefault();
    const serverport = {
            appid: this.state.appid,
            logo: this.state.logo,
            linkfb: this.state.linkfb,
            linkyoutube: this.state.linkyoutube,
            linktwitter: this.state.linktwitter,
            banner: this.state.banner,
            style:"banner"
        }
        axios.post('http://localhost:5000/api/theme', serverport)
        .then(res => console.log(res.data));
        
        this.setState({
            appid: '',
            logo: '',
            linkfb:'',
            linkyoutube:'',
            linktwitter:'',
            banner:''
        });
        
  }
  
  render() {
    const show = this.state.item;
   var stt = 1;
   
    return (
       <div>
        <div className="page-content-wrapper">
            <div className="page-content">
                <div className="dashboard">

                    <div className="portlet box green1 margin-page">
                        <div className="portlet-title">
                            <div className="caption">
                                <img src="images/ic3.gif" alt="" /> <span>{test}</span> </div>
                            <div className="tools">
                                <a href="#click" className="collapse" data-original-title="" title=""> </a>
                                <a href="#portlet-config" data-toggle="modal" className="config" data-original-title=""
                                    title=""> </a>
                                <a href="#click" className="reload" data-original-title="" title=""> </a>
                                <a href="#click" className="remove" data-original-title="" title=""> </a>
                            </div>
                        </div>
                        <div className="portlet-body">
                            <div className="add-title clearfix">
                                <div className="button-left">
                                    <button data-toggle="modal" href="#large"><i className="fas fa-plus-circle"></i>Thêm mới</button>
                                </div>
                                <div className="search">
                                    <input type="text" placeholder="Tìm kiếm..." />
                                    <button className="icon"><i className="fas fa-search"></i></button>
                                </div>
                            </div>
                            <div className="table-scrollable">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>TÊN USER</th>
                                            <th>HỌ TÊN</th>
                                            <th>ĐƠN VỊ</th>
                                            <th>PHÂN QUYỀN</th>
                                            <th>ACTIVE</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {show.map(item=>(
                                        <tr key={item.appid}>
                                            <td >{stt++}</td>
                                            <td>{item.appid}</td>
                                            <td>{item.logo}</td>
                                            <td>{item.banner}</td>
                                            <td>Admin</td>
                                            <td><a href="#click"><i className="fas fa-user-check"></i></a></td>
                                            <td><a className="btn btn-outline sbold" data-toggle="modal" href="#large"
                                                    ><i className="far fa-edit"></i><span> Edit</span></a><a className="btn btn-outline sbold" data-toggle="modal" href="#large"
                                                    ><i className="fas fa-recycle"></i><span> Delete</span></a></td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade bs-modal-lg modal-user" id="large" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true"></button>
                        <h4 className="modal-title abct" dataname="abc" >Chỉnh sửa / thêm user</h4>
                    </div>


                    <form onSubmit={this.handleSubmit}>
                    <div className="modal-body">

                        
                        <div className="bs-row bs-row-sm15">
                            <div className="bs-col sm-50-15">
                                <div className="item">
                                    <label>App id:</label>
                                    <input type="text" className="input-modal nameuser" name="appid" value={this.state.appid} onChange={this.handleAppChange} />
                                </div>
                            </div>
                            <div className="bs-col sm-50-15">
                                <div className="item">
                                    <label>logo:</label>
                                    <input type="file" className="input-modal" name="logo" value={this.state.logo} onChange={this.handleLogoChange} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="bs-row bs-row-sm15">
                            <div className="bs-col sm-50-15">
                                <div className="item">
                                    <label>banner:</label>
                                    <input type="file" className="input-modal" name="banner" value={this.state.banner} onChange={this.handleBannerChange}/>
                                </div>
                            </div>
                            <div className="bs-col sm-50-15">
                                <div className="item">
                                    <label>link facebook:</label>
                                    <input type="text" className="input-modal" name="linkfb" value={this.state.linkfb} onChange={this.handleLinkfbChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="bs-row bs-row-sm15">
                            <div className="bs-col sm-50-15">
                                <div className="item">
                                    <label>link youtube:</label>
                                    <input type="text" className="input-modal" name="linkyoutube" value={this.state.linkyoutube} onChange={this.handlelinkyoutubeChange}/>
                                </div>
                            </div>
                            <div className="bs-col sm-50-15">
                                <div className="item">
                                    <label>link twitter:</label>
                                    <input type="text" className="input-modal" name="linktwitter" value={this.state.linktwitter} onChange={this.handlelinktwitterChange}/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <input type="submit" value="Submit" />
                        <button type="button" className="btn green" onClick={senddata}><i className="far fa-save" ></i>Lưu</button>
                        <button type="button" className="btn dark btn-outline" data-dismiss="modal"><i className="fas fa-times"></i>Đóng</button>
                    </div>
                    </form>


                </div>
               
            </div>
           
        </div>
        
       
      </div>
    );
  }
}

export default Theme;