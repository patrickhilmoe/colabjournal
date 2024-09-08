const mongoose = require('mongoose');


const chapterSchema = new mongoose.Schema({
    chaptername: {
      type: String,
      required: true  
    },
    body: {
        type: String,
        required: true
    }
})

const Chapter = mongoose.model('Chapter', chapterSchema)

module.exports = Chapter;