import { AccountModel } from '../../../domain/models/account'
import { AddAccountModel } from '../../../domain/useCases/add-account'

export interface IAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
  getAll: () => Promise<AccountModel>
  getOne: (email: string) => Promise<AccountModel>
  getById: (id: AccountModel) => Promise<AccountModel>
  delete: (id: string) => Promise<AccountModel>

}
