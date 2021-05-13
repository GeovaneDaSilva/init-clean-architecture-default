/* eslint-disable no-new */
import { Sequelize } from 'sequelize'

export interface IOptions {
  host: string
  dialect: any
  logging?: boolean
}

export const SequelizeHelper = {
  db: null as string,
  username: null as string,
  password: null as string,
  options: null as any,

  async connect (db, username, password, options): Promise<void> {
    const sequelize = new Sequelize(db, username, password, options)

    await sequelize.authenticate()
  }
}
