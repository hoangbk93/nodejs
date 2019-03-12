import React, { Component } from 'react';
import axios from 'axios';


// const nano = require('nano')('http://admin:bnet2019@79@45.118.145.34:5984');
// const bvote = nano.use('composerchannel_bnetvote')
// const alice = nano.use('alice')
const test ="DANH SÁCH USER";
function senddata(e){
     e.preventDefault();
    console.log('The link was clicked.');
   // var attribute = e.target.attributes.getNamedItem('dataname').value;
}
// const reactRoot = document.getElementsByClassName('abct');
// const restUrl = reactRoot.getAttribute('dataname');
class Ungdungvote extends Component {
     // let datauser = {};
    // axios.get('http://localhost:5000/api/users')
    //     .then(function(res){
    //         datauser = res.data;
    //         console.log(datauser)
    //     });
    //     console.log("datauser")
    //     console.log(datauser)
    constructor(props) {
    super(props);
    this.state = {user: '',name:'',email:'',appid:'',style:'',item:[]};
    this.handleChange = this.handleChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    
  }
  getdata(){
     axios.get('http://localhost:5000/api/appvote')
        .then(res => {
            this.setState({item:res.data.message.docs});
            // console.log(res.data)
        });
  }
  componentWillMount() {
    this.getdata();
  }
  handleChange(event) {
    this.setState({user: event.target.value});    
  }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});    
  }
  handlePassChange(event) {
    this.setState({appid: event.target.value});
  }
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.user +'input name:'+ this.state.name);
    // nano.db.create('alice1');
    event.preventDefault();
    const serverport = {
            name: this.state.name,
            user: this.state.user,
            email: this.state.email,
            appid: this.state.appid,
            style:"appvote"
        }
        axios.post('http://localhost:5000/api/appvote', serverport)
        .then(res => console.log(res.data));
        
        this.setState({
            name: '',
            user: '',
            email:'',
            password:''
        });
        // var attribute = document.getElementsByClassName('abct').getAttributeNode('dataname');
        // alert(attribute.value == "top")
  }
  
  render() {
    const show = this.state.item;
   var stt = 1;
    // let datauser = {};
    // axios.get('http://localhost:5000/api/users')
    //     .then(function(res){
    //         datauser = res.data;
    //         console.log(datauser)
    //     });
    //     console.log("datauser")
    //     console.log(datauser)
// const getdt = document.getElementsByClassName('abct').getAttribute('dataname');
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
                                            <th>App vote</th>
                                            <th>Email</th>
                                            <th>Người đại diện</th>
                                            <th>PHÂN QUYỀN</th>
                                            <th>ACTIVE</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {show.map(item=>(
                                        <tr key={item.user}>
                                            <td >{stt++}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.user}</td>
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
                                    <label>Tên App vote:</label>
                                    <input type="text" className="input-modal nameuser" name="user" value={this.state.user} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="bs-col sm-50-15">
                                <div className="item">
                                    <label>Người đại diện:</label>
                                    <input type="text" className="input-modal" name="fullname" value={this.state.name} onChange={this.handleNameChange} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="bs-row bs-row-sm15">
                            <div className="bs-col sm-50-15">
                                <div className="item">
                                    <label>email:</label>
                                    <input type="text" className="input-modal" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
                                </div>
                            </div>
                            <div className="bs-col sm-50-15">
                                <div className="item">
                                    <label>App ID:</label>
                                    <input type="text" className="input-modal" name="appid" value={this.state.appid} onChange={this.handlePassChange}/>
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

export default Ungdungvote;