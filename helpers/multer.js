const multer = require('multer');

const bookStorage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, './kliens/public/kepek');
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: bookStorage });

module.exports = upload;