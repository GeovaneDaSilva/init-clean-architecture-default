import { DataTypes } from 'sequelize'
import { db } from '../sequelize-helper/sequelize-helper'

const Account = db.define('User', {
  nombre: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  status: { type: DataTypes.BOOLEAN }
})

export default Account
