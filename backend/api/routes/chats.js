const express = require ('express');
const router = express.Router();


// GET method for requesting chats 
router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'Chats were fetched'
    });
});

// Post method 
router.post('/', (req,res,next)=>{
    res.status(201).json({
        message: 'Chats were created'
    });
});


// GET method based on iD
router.get('/:chatId', (req,res,next)=>{
    res.status(200).json({
        message: 'Chats details',
        chatId: req.params.chatId
    });
});

// DELETE method based on iD
router.delete('/:chatId', (req,res,next)=>{
    res.status(200).json({
        message: 'Chat deleted',
        chatId: req.params.chatId
    });
});

module.exports = router;