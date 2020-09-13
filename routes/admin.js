const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin/index')
})

router.get('/posts', (req, res) => {
    res.send('Blog')
})

router.get('/categories', (req,res)=>{
    res.send('Categories')
})

 module.exports = router;