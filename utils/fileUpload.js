const multer = require('multer');
const fs = require('fs');
const path = require('path');

let dir = __dirname + '/../static';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

dir = __dirname + '/../static/uploads';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

// Setting up Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './static/uploads');
    },
    filename: function (req, file, cb) {
        var filename = (Date.now() + path.extname(file.originalname)).toString();
        cb(null, filename);
    }
});

let uploadImage =
    multer({
        storage: storage,
        fileFilter: function (req, file, callback) {
            var ext = path.extname(file.originalname);
            if (
                ext !== ".svg" &&
                ext !== ".png" &&
                ext !== ".jpg" &&
                ext !== ".gif" &&
                ext !== ".jpeg"
            ) {
                return callback(new Error("Only images are allowed"));
            }
            callback(null, true);
        }
    });

module.exports = uploadImage;