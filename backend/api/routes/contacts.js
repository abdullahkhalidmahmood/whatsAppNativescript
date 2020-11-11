const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var Promise = require('bluebird');

const Contact = require('../models/contact');

// GET method 
router.get('/', (req, res, next) => {
    Contact.findAll().then(con => {
        res.send(con);
    })
    .catch(err => console.log(err));
});

// POST method 
router.get('/create', (req, res, next) => {
    

    // const items =[
    
    //     { id: 1, name: "Abdullah", number: "0101234667", image:'~/assets/images/user.jpg'},
    //     { id: 2, name: "Piqué", number: "0101234667", image:'~/assets/images/user6.jpg' },
    //     { id: 3, name: "I. Rakitic", number: "0101234667", image:'~/assets/images/user2.png' },
    //     { id: 4, name: "Sergio", number: "0101234667", image:'~/assets/images/user3.png' },
    //     { id: 5, name: "Ahmad", number: "0101234667", image:'~/assets/images/user3.png' },
    //     { id: 6, name: "Denis Suárez", number: "0101234667", image:'~/assets/images/user4.png' },
    //     { id: 7, name: "Arda", number: "0101234667", image:'~/assets/images/user5.png' },
    //     { id: 8, name: "A. Iniesta", number: "0101234667", image:'~/assets/images/user6.jpg' },
    //     { id: 9, name: "Suárez", number: "0101234667", image:'~/assets/images/user8.jpg' },
    //     { id: 10, name: "Messi", number: "0101234667", image:'~/assets/images/user9.jpg' },
    //     { id: 11, name: "Neymar", number: "0101234667", image:'~/assets/images/user5.png' },
    //     { id: 12, name: "Rafinha", number: "0101234667", image:'~/assets/images/user2.png' },
    //     { id: 13, name: "Cillessen", number: "0101234667", image:'~/assets/images/user3.png' },
    //     { id: 14, name: "Mascherano", number: "0101234667", image:'~/assets/images/user4.png' },
    //     { id: 15, name: "Paco Alcácer", number: "0101234667", image:'~/assets/images/user5.png' },
    //     { id: 16, name: "Jordi Alba", number: "0101234667", image:'~/assets/images/user7.png' },
    //     { id: 17, name: "Digne", number: "0101234667", image:'~/assets/images/user.jpg' },
    //     { id: 18, name: "Digne", number: "0101234667", image:'~/assets/images/user.jpg' },
    //     { id: 19, name: "Digne", number: "0101234667", image:'~/assets/images/user.jpg' },
    //     { id: 20, name: "Sergi Roberto", number: "0101234667", image:'~/assets/images/user8.jpg' },
    //     { id: 21, name: "André Gomes", number: "0101234667", image:'~/assets/images/user9.jpg' },
    //     { id: 22, name: "Aleix Vidal", number: "0101234667", image:'~/assets/images/user2.png' },
    //     { id: 23, name: "Umtiti", number: "0101234667", image:'~/assets/images/user7.png' },
    //     { id: 24, name: "Mathieu", number: "0101234667", image:'~/assets/images/user3.png' },
    //     { id: 25, name: "Masip", number: "0101234667", image:'~/assets/images/user9.jpg' }
    // ]
    
    Contact.create(item);

});

// GET one contact based on iD 
// router.get('/:contactId', (req, res, next) => {
//     const id = req.params.contactId;

//     Contact.findById(id)
//         .exec()
//         .then(doc => {
//             console.log('From dB' + doc);
//             if(doc){
//                 res.status(200).json({ doc });
//             }
//             else{
//                 res.status(404).json({message:"No valid entry found for this ID"});
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ error: err })
//         });
// });

// PATCH method 
router.patch('/:contactId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated contact'
    });
});

// DELETE method 
router.delete('/:contactId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted contact'
    });
});


module.exports = router;