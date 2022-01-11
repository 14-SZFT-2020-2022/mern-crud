const BookModel = require('../models/Book');

const BookPostOne = async (req, res) => {
    try {
        const body = req.body;
        const fileNev = req.file.originalname;

        const feltolt = {
            author : body.author,
            title: body.title,
            picture: fileNev,
        };
        const newBook = new BookModel(feltolt);

        await newBook.save();
        res.send();
    } catch (error) {
        res.send(error.message);
    }
};

module.exports = BookPostOne;