import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/useCases/add-account'
import UserRepository from '../../../../domain/repositories/userRepository'
import { IAccountRepository } from '../../../../data/useCases/protocols/account-repository'

export class AccountMongoRepository implements IAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    try {
      const collection: any = await UserRepository.create(accountData)
      return collection
    } catch (error) {
      console.log(error)
    }
  }

  async getAll (): Promise<AccountModel> {
    try {
      const collection: any = await UserRepository.find({}, 'name email role password_hash created_date')
      return collection
    } catch (error) {
      console.log(error)
    }
  }

  async getOne (email: string): Promise<AccountModel> {
    try {
      const collection: any = await UserRepository.findOne({ email: email })
      return collection
    } catch (error) {
      console.log(error)
    }
  }

  async getById (id: AccountModel): Promise<AccountModel> {
    try {
      const collection: any = await UserRepository.findById(id, 'name email role password_hash created_date')
      return collection
    } catch (error) {
      console.log(error)
    }
  }

  async delete (id: string): Promise<AccountModel> {
    try {
      const collection: any = await UserRepository.findByIdAndDelete(id)
      return collection
    } catch (error) {
      console.log(error)
    }
  }
}
