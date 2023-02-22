const app=require("./app");
require('dotenv').config({path:'./config.env'})
const PORT=process.env.PORT || 5000;
app.listen(PORT,function () {
    console.log(`App is running at ${PORT} `)
})