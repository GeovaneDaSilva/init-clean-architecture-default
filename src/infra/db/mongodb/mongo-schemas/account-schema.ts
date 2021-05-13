import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const AccountSchema = new Schema({
  name: String,
  email: String,
  password: String,
  password_hash: String,
  role: String,
  created_date: Date

})

AccountSchema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' })

export default mongoose.model('User', AccountSchema)
