const express = require('express');
const expressHbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

app.engine('hbs', expressHbs.engine({extname: "hbs", defaultLayout: null}));    
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(bodyParser.json())

var urlencodedParser = bodyParser.urlencoded({ extended: false});

const sanphamController = require('./controllers/sanphamControllers')

const SanPhamModel = require('./SanPhamModel')

const mongoose = require('mongoose');

const uri = 'mongodb+srv://MinhKuann:OUlaAza7DqSTq43v@cluster0.mdgs9of.mongodb.net/CP17305?retryWrites=true&w=majority';

// const SanPhamModel = require('./SanPhamModel')

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, }); 


// app.get('/', async (req, res) =>{
//     // await mongoose.connect(uri);
//     console.log('Kết nối thành công');

//     res.render('sanpham');

//     // let arrSP = await SanPhamModel.find();

//     // console.log(arrSP);

//     // res.send(arrSP);
// })

app.get('/addsp', async (req, res) =>{
    await mongoose.connect(uri);
    console.log('Kết nối thành công');

    let spMoi ={
        ten: 'Ao Thun',
        giatien: 200000,
        soluong: 20,
    }

    let kq = await SanPhamModel.insertMany(spMoi)

    console.log(kq);

    let arrSP = await SanPhamModel.find();
    res.send(arrSP);

})

app.get('/updatesp', async (req, res) => {
    await mongoose.connect(uri).then(console.log('Kết nối thành công'));

    await SanPhamModel.updateOne({ten: 'ao T-shirt'}, {ten: 'ao Hoodie'})


    let listSanPhams = await SanPhamModel.find({});
    console.log(listSanPhams);
    res.send(listSanPhams);


    // await btModel.updateMany({namsangtac: 1958}, {namsangtac: 1959})
    // await btModel.updateOne({namsangtac: 1958}, {namsangtac: 1959})

    // btModel.deleteMany({namsangtac: 1973})
    // btModel.deleteOne({namsangtac: 1973})

})

app.get('/xoasp', async (req, res) => {
    await mongoose.connect(uri).then(console.log('Kết nối thành công'));

    await SanPhamModel.deleteMany({ ten: 'Ao Thun'});

    let listSanPhams = await SanPhamModel.find({});
    
    res.send(listSanPhams);

    // // btModel.updateMany({namsangtac: 1958}, {namsangtac: 1959})
    // btModel.updateOne({namsangtac: 1958}, {namsangtac: 1959})

    // await btModel.deleteMany({namsangtac: 1973})
    // await btModel.deleteOne({namsangtac: 1973})

})

app.use('/sanpham', sanphamController);

app.listen(3000, () =>{
    console.log(`Khởi chạy app`);
} )