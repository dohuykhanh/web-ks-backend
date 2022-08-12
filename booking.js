const express = require('express');
const bookingRounter = express.Router();
const { db } = require('./db')


bookingRounter.post('/', async(req, res) => {
    const bills = {
        firtname: req.body.firtname,
        lastname: req.body.lastname,
        soluongnguoi: req.body.soluongnguoi,
        gmail: req.body.gmail,
        sdt: req.body.sdt,
        ngaydat: new Date(req.body.ngaydat), // chuyển thành kiểu dữ liệu date
        ngaytra: new Date(req.body.ngaytra),
        loaiphong: req.body.loaiphong,
    };
    const result = await db.bookingbills.insertOne(bills);
    //insertOne({}) với {} là trượng trưng cho 1 object

    // console.log(result);
    // res.json({
    //     insertedId: result.insertedId,
    //     bills: bills,
    // });
    res.json(result);
});



module.exports = bookingRounter;