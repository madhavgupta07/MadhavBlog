require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer')
const path = require('path');
// const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const commentRoute = require('./routes/comments')



// Database
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log('DB Connected Sucessfully');
    } catch (error) {
        console.log('errer', error);
    }
}


// Middleware
app.use(express.json())
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/comments', commentRoute)
app.use("/images", express.static(path.join(__dirname, "/images")))
// Image upload

const storage = multer.diskStorage({
    destination: function (req, file, fn) {
        fn(null, './images')
    },
    filename: function (req, file, fn) {
        //   fn(null, file.originalname)
        fn(null, req.body.img)
    }
})
const upload = multer({ storage: storage })
app.post('/api/upload', upload.single("file"), (req, res) => {
    res.status(200).json("Image has been uploaded")
})




app.listen(process.env.PORT || 5000, () => {
    connectDB()
    console.log("App is running on port ", process.env.PORT);
})