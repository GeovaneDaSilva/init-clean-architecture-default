/* eslint-disable no-new */
import { Sequelize } from 'sequelize'
import { config as dotenv } from 'dotenv'
dotenv()
export const db = new Sequelize(process.env.DB, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql'

})
