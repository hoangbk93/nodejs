'use strict'

const util = require('util')
const bodyParser = require('body-parser')
// const mysql = require('mysql')
// const db = require('./../db')
const nano = require('nano')('http://45.118.145.34:5984');
// const nano = require('nano')('http://admin:bnet2019@79@45.118.145.34:5984');
const bvote = nano.use('composerchannel_bnetvote')

const monitor = nano.use('monitor')


module.exports = {
    get: (req, res) => {
        //get info database table
        // nano.db.get('monitor').then((body) => {
        //   console.log(body);
        //    res.json({message: body})
        // })
// them du lieu vao bang
        // monitor.insert({ name: "mgo hoang",user:"hoang02141",email:"ngohoangbk931@gmail.com",password:"hoang0214" }, 'user#hoang02141').then((body) => {
        //   res.json({message: body})
        // });
                // lay du lieu theo id
// const keys = ['user#hoang0214'];
// monitor.fetch({keys: keys}).then((data) => {
//   console.log(data);
//   res.json({message: data})
// });
        const q = {
          selector: {
           "_id": {
                 "$gt": "user"
              },
              "style":{
                "$eq":"user"
              }
          },
          fields: [ "name", "user", "email", "password" ],
          limit:50
        };
        monitor.find(q).then((doc) => {
        //   res.json({message: data})
          console.log(doc);
          res.json({message: doc})

        });
                // res.json({message: 'Update success!'})
        // nano.db.create('monitor');
        // const query = {
        //     selector: {
        //         _id: { "$gt": "\u0000Asset:bnetvote.Bacninhdudoan\u0000"}
        //     },
        //     fields: [ "Missid", "Fullname", "Phonenumber", "Emailaddress" ],
        //     limit:30000
        // };
        // bvote.find(query).then((doc) => {
        //     console.log(doc);
        //     res.json(doc);
        // });
    },
    detail: (req, res) => {
         var id = req.params['userId']; 
        res.send('The id is ' + id); 
       // res.json({message: 'Update success!'})
    },
    update: (req, res) => {
        res.json({message: 'Update success!'})
    },
    store: (req, res) => {
        let data = req.body;
        // them du lieu vao bang
        monitor.insert(data, 'user#'+data.user).then((body) => {
          res.json({message: body})
        });
        // res.send(data)
    },
    delete: (req, res) => {
       res.json({message: 'Update success!'})
    },
   /* createdatatable: (req, res) =>{
         let data = req.body;
         // nano.db.create('monitor');
         console.log(data);
        res.json({message: data})
    },*/
    getTheme: (req, res) => {

        const q = {
          selector: {
           "_id": {
                 "$gt": "theme#"
              },
              "style":{
                "$eq":"banner"
              }
          },
          fields: [ "appid","logo", "banner", "linkfb", "linkyoutube", "linktwitter"],
          limit:500
        };
        monitor.find(q).then((doc) => {
        
          console.log(doc);
          res.json({message: doc})

        });
            
    },
    detailTheme: (req, res) => {
         var id = req.params['userId']; 
        res.send('The id is ' + id); 
       
    },
    updateTheme: (req, res) => {
        res.json({message: 'Update success!'})
    },
    storeTheme: (req, res) => {
        let data = req.body;
       
        monitor.insert(data, 'theme#'+data.appid).then((body) => {
          res.json({message: body})
        });
       
    },
    deleteTheme: (req, res) => {
       res.json({message: 'Update success!'})
    },
    // controller app vote
    getAppvote: (req, res) => {

        const q = {
          selector: {
           "_id": {
                 "$gt": "Appvote#"
              },
              "style":{
                "$eq":"appvote"
              }
          },
          fields: [ "appid","user", "name", "email"],
          limit:500
        };
        monitor.find(q).then((doc) => {
        
          console.log(doc);
          res.json({message: doc})

        });
            
    },
    detailAppvote: (req, res) => {
         var id = req.params['userId']; 
        res.send('The id is ' + id); 
       
    },
    updateAppvote: (req, res) => {
        res.json({message: 'Update success!'})
    },
    storeAppvote: (req, res) => {
        let data = req.body;
       
        monitor.insert(data, 'Appvote#'+data.appid).then((body) => {
          res.json({message: body})
        });
       
    },
    deleteAppvote: (req, res) => {
       res.json({message: 'Update success!'})
    }

}