const mongoose=require('mongoose')
const colors=require('colors')
const connectDb=async()=>{
// await mongoose.connect(
//     "mongodb://127.0.0.1:27017/",{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
     
//     }
// )
// .then(() => console.log('DB Connection Successfull'))
// .catch((err) => {
//     console.error(err);
// });

mongoose.connect(
    'mongodb+srv://sweety:sweety12345@cluster0.bplqaei.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
     
    }
)
.then(() => console.log('DB Connection Successfull'))
.catch((err) => {
    console.error(err);
});
}
module.exports=connectDb;