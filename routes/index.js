var express = require('express');
const multer = require('multer');
var router = express.Router();
var user_controller = require('../controller/usercontroller');
//server.js

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })


router.post('/insert', upload.single('image'),user_controller.insert);





module.exports = router;
