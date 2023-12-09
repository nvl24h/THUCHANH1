const UserModule = require('../models/User.models')
const bcrypt = require('bcrypt')


async function createUser(user) {
    const {email, password} = user // Lay email va pasword obj tu auth.routes

    const checkEmail = await UserModule.findOne({email}) // Check email da ton tai hay chua

    // neu email ton tai tra loi ve routes
    if (checkEmail) {
        throw {
            status: 400,
            message: 'Email đã tồn tại'
        }
    }

    const hashedPassword = await bcrypt.hash(password, 10) // bam mat khau luu vao database

    // Tao moi database neu email chua ton tai va ban mk
    const newUser = await UserModule.create({
        email,
        password: hashedPassword
    })

    // Tra ve ket qua thanh cong khi tao tahnh cong user
    return {
        status: 200,
        message: 'create result'
    }

}


module.exports = createUser