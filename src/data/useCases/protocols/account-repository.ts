import { AccountModel } from '../../../domain/models/account'
import { AddAccountModel } from '../../../domain/useCases/add-account'

export interface IAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
  getAll: () => Promise<AccountModel>
  getOne: (email: string) => Promise<AccountModel>
  getById: (id: string) => Promise<AccountModel>
  delete: (id: string) => Promise<AccountModel>
  update: (id: string) => Promise<AccountModel>

}

export interface IAccountRepositorySql {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
  getAll: () => Promise<AccountModel>
  getOne: (email: string) => Promise<AccountModel>
  getByPk: (id: number) => Promise<AccountModel>
  delete: (id: string) => Promise<AccountModel>
  update: (id: string) => Promise<AccountModel>

}
