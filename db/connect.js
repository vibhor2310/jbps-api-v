const mongoose = require('mongoose')

const connectdb = (url)=>{
  return mongoose
  .connect(url,
      { user: 'vibhor', pass: 'vibhor@23',
       useNewUrlParser: true, 
      useCreateIndex:true,
      useFindAndModify:false,
      useUnifiedTopology:true }
      )
 }
 
 module.exports = connectdb;
