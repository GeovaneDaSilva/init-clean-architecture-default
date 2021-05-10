import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import { AccountModel } from '../../../../domain/models/account'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  password_hash: String,
  role: String,
  created_date: String

})

UserSchema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' })
export default UserSchema.loadClass(AccountModel)
