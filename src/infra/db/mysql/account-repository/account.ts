import { IAccountRepositorySql } from '../../../../data/useCases/protocols/account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/useCases/add-account'
import Account from '../sequelize-schemas/account-schema'

export class AccountSequelizeRepository implements IAccountRepositorySql {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    try {
      return accountData
    } catch (error) {
      console.log(error)
    }
  }

  async getAll (): Promise<AccountModel> {
    try {
      const collection: AddAccountModel | any = await Account.findAll()
      return collection
    } catch (error) {
      console.log(error)
    }
  }

  async getOne (email: string): Promise<AccountModel> {
    try {
      const collection: AddAccountModel | any = await Account.findOne()

      return collection
    } catch (error) {
      console.log(error)
    }
  }

  async getByPk (id: number): Promise<AccountModel> {
    try {
      const collection: AddAccountModel | any = await Account.findByPk(id)
      return collection
    } catch (error) {
      console.log(error)
    }
  }

  async update (id: string): Promise<AccountModel> {
    try {
      const collection: AddAccountModel | any = await Account.findOne()
      return collection
    } catch (error) {
      console.log(error)
    }
  }

  async delete (id: string): Promise<AccountModel> {
    try {
      const collection: AddAccountModel | any = await Account.findOne()
      return collection
    } catch (error) {
      console.log(error)
    }
  }
}
