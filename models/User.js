const mongoose = require('../config/dbConnect')

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const validatePassword = function (password) {
    const schema = new passwordValidator();

    return schema
        .is().min(8)         // Minimum length 8
        .is().max(100)       // Maximum length 100
        .has().uppercase()   // Must have uppercase letters
        .has().lowercase()   // Must have lowercase letters
        .has().digits(2)     // Must have at least 2 digits
        .has().not().spaces() // Should not have spaces
        .validate(password, { list: true });
};

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: 'Password is required',
        validate: [validatePassword, 'Please fill a valid password'],

    },
    coin: {
        type: Number,
        min: 0,
        default: 0
    }
});

const UserModule = mongoose.model('User', userSchema)

module.exports = UserModule