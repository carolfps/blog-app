const { Router } = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Category')
const Category = mongoose.model('categories');

router.get('/', (req, res) => {
    res.render('admin/index')
})

router.get('/posts', (req, res) => {
    res.send('Blog')
})

router.get('/categories', (req,res) => {
    res.render('admin/categories')
})

router.get('/categories/add', (req,res) => {
    res.render('admin/addcategories')
})

router.post('/categories/new', (req,res) => {
    let errors = [];

    if( !req.body.name || req.body.name == undefined || req.body.name == null){
        errors.push({text: 'Invalid category name'})
    }

    if( !req.body.slug || req.body.slug == undefined || req.body.name == null){
        errors.push({text: 'Invalid slug'})
    }

    if( req.body.name.length < 3 ){
        errors.push({text: 'Category name too small'})
    }

    if( errors.length > 0){
        res.render('admin/addcategories', {errors: errors})
    } else{
        const newCategory = {
            name: req.body.name,
            slug: req.body.slug
        }

        new Category(newCategory).save().then(() => {
            req.flash('success_msg', 'New category created!')
            res.redirect('/admin/categories')
        }).catch((err) => {
            req.flash('error_msg', 'Unable to create new category')
            console.log(`Unable to create new category: ${err}`)
        })
    }
    
})

module.exports = router;