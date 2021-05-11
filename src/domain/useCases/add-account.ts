import { AccountModel } from '../models/account'

export interface AddAccountModel {
  id?: string
  name: string
  email: string
  password: string
  role: string
  created_date: Date

}

export interface AddAccount {
  add: (account: AccountModel) => Promise<AddAccountModel>
}
