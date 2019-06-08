var router = require('express').Router();

const Contact= require('../models/contacts');


//Retrieving contacts
router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err,contacts){
        res.json(contacts);
    });
});

//Adding contacts
router.post('/contacts',(req,res,next)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        contact_no: req.body.contact_no
    })
    newContact.save((err,contact)=>{
        if(err){
            res.json('Failed to add contact!');
        }
        else{
            res.json('Contact added successfully');
        }
    });
});

//Delete contacts
router.delete('/contacts/:id',(req,res,next)=>{
     Contact.deleteOne({_id:req.params.id}, function(err,result){
        if(err){
            res.json('Error occured: '+err);
        }
        else{
            res.json(result);
        }
     });
});

module.exports=router;