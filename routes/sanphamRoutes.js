const express = require('express')
const SanPhamModel = require('./SanPhamModel')
const app = express()

app.get('/', async(req, res) =>{
    const sanphams = await SanPhamModel.find({});

    try {
        res.send(sanphams)
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = app;
