const mongoose = require('mongoose');
const { Dichvu } = require('./model');
require('dotenv').config();

const db = process.env.DATABASE;
const dichvuArray = [
    // KPK (Khám phụ khoa)
    { name: 'Khám phụ khoa', price: 180000, class: 'KPK' },
    { name: 'Siêu âm', price: 180000, class: 'KPK' },
    { name: 'Khám thai', price: 180000, class: 'KPK' },
    { name: 'Đặt thuốc âm đạo', price: 50000, class: 'KPK' },
    { name: 'Soi CTC', price: 500000, class: 'KPK' },
    { name: 'Áp lạnh CTC', price: 1500000, class: 'KPK' },
    { name: 'Đốt điện CTC', price: 1000000, class: 'KPK' },
    { name: 'Đo tim thai', price: 250000, class: 'KPK' },

    // KHHGD (Kế hoạch hóa gia đình)
    { name: 'Đặt vòng (loại 1)', price: 500000, class: 'KHHGD' },
    { name: 'Đặt vòng (loại 2)', price: 600000, class: 'KHHGD' },
    { name: 'Tháo vòng', price: 300000, class: 'KHHGD' },
    { name: 'Phá thai bằng thuốc < 6w', price: 2000000, class: 'KHHGD' },
    { name: 'Hút ĐHKN', price: 2000000, class: 'KHHGD' },
    { name: 'May TSM', price: 5000000, class: 'KHHGD' },
    { name: 'Cấy que tránh thai', price: 3500000, class: 'KHHGD' },
    { name: 'Tiêm thuốc tránh thai', price: 500000, class: 'KHHGD' },

    // XN (Xét nghiệm)
    { name: 'Nước tiểu', price: 50000, class: 'XN' },
    { name: 'Soi tươi huyết trắng', price: 70000, class: 'XN' },
    { name: 'Xét nghiệm Nipt', price: 4000000, class: 'XN' },
    { name: 'AMH (dự trữ buồng trứng)', price: 800000, class: 'XN' }
];

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        for(const item of dichvuArray){
            const name = item.name;
            const price = item.price;
            const classname = item.class;
            const dichvu = new Dichvu({
                name,
                price,
                class: classname
            });
            await dichvu.save();
            console.log(`${name} has been created successfully ~`)
        }
        mongoose.connection.close();
    })
    .catch(error =>{
        console.log(`Error while saving into mongo: ${error}`)
    });