import mongoose from 'mongoose'
import userSchema from '../../infra/db/mongodb/mongo-schemas/account-schema'

export default mongoose.model('User', userSchema)
