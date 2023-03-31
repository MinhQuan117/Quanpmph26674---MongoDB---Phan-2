const express = require('express');
const { accessSync } = require('fs');
const SanPhamModel = require('../SanPhamModel')
const app = express()

app.get('/', (req, res) =>{
    // await mongoose.connect(uri);
    console.log('Kết nối thành công');
    SanPhamModel.find({}).then(sanphams =>{
        res.render('sanphams.hbs', {
            sanphams: sanphams.map(sanpham => sanpham.toJSON())
        })
    })
});

// app.post('/add', async (req, res) =>{
//     const u = new SanPhamModel(req.body);
//     try {
//         await u.save();
//         res.render('views/sanphams.hbs')
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })


module.exports = app;

