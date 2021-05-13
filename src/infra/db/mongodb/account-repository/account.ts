import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/useCases/add-account'
import AccountSchema from '../mongo-schemas/account-schema'
import { IAccountRepository } from '../../../../data/useCases/protocols/account-repository'
import IMongooseModelMapper from '../mappers/interface/IMongooseModelMapper'
import { AccountModelMapper } from '../mappers/model-mapper/accountModelMaper'

export class AccountMongoRepository implements IAccountRepository {
  private readonly _userModelMapper: IMongooseModelMapper<AccountModel>
  constructor () {
    this._userModelMapper = new AccountModelMapper()
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    try {
      const collection: AddAccountModel | any = await this._userModelMapper.fromDomainEntity(accountData)

      const { _id, name, email, password, role, created_date } = collection
      const newCollection: any = { id: _id, name: name, email: email, password: password, role: role, created_date: created_date }

      await collection.save()
      return newCollection
    } catch (error) {
      console.log(error)
    }
  }

  async getAll (): Promise<AccountModel> {
    try {
      const collection: AddAccountModel | any = await AccountSchema.find({}, 'name email role password_hash created_date')
      return collection
    } catch (error) {
      console.log(error)
    }
  }

  async getOne (email: string): Promise<AccountModel> {
    try {
      const collection: AddAccountModel | any = await AccountSchema.findOne({ email: email })

      return collection
    } catch (error) {
      console.log(error)
    }
  }

  async getById (id: AccountModel): Promise<AccountModel> {
    try {
      const collection: AddAccountModel | any = await AccountSchema.findById(id, 'name email role password_hash created_date')
      return collection
    } catch (error) {
      console.log(error)
    }
  }

  async update (id: string): Promise<AccountModel> {
    try {
      const collection: AddAccountModel | any = await AccountSchema.findByIdAndUpdate(id)
      return collection
    } catch (error) {
      console.log(error)
    }
  }

  async delete (id: string): Promise<AccountModel> {
    try {
      const collection: AddAccountModel | any = await AccountSchema.findByIdAndDelete(id)
      return collection
    } catch (error) {
      console.log(error)
    }
  }
}
