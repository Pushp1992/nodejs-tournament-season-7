// Course model which expose the schema of member profile with it's respective fields

const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    courseId: Number,
    courseName: String,
    courseDuration: Number,
    teachingMode: String,
    instructorName: String,
    isIntroVideoAvailable: Boolean,
    isCertificationAvailable: Boolean

}, {
    timeStamps: true
});

module.exports = mongoose.model('Course', CourseSchema);