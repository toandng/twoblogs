const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/lap_trinh');
        console.log("Connect Sucssecfully");
    } catch (error) {
        console.log("error");
    }
}
module.exports = {connect};