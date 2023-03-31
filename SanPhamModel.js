const mongoose = require('mongoose');

const SanPhamSchema = new mongoose.Schema({
    ten: {
        type: String,
        require: true,
    },

    giatien: {
        type: Number,
        require: true
    },

    soluong: {
        type: Number,
        require: true
    },

});

const SanPhamModel = new mongoose.model('Sanpham', SanPhamSchema);

module.exports = SanPhamModel;
