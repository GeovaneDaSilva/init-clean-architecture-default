import { AddAccount, AddAccountModel } from './../../domain/useCases/add-account'

import { AccountModel } from '../../domain/models/account'
import { Cryptography } from '../../infra/cryptgraphy/encryper'
import { IAccountRepository } from './protocols/account-repository'

export class DbAddAccount implements AddAccount {
  constructor (private readonly cryptgraphy: Cryptography,
    private readonly iAccountRepository: IAccountRepository) {
    this.cryptgraphy = cryptgraphy
    this.iAccountRepository = iAccountRepository
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    account.password_hash = await this.cryptgraphy.encrypt(account.password_hash)
    const userDB: any = await this.iAccountRepository.add(account)
    return new Promise(resolve => resolve(
      userDB
    ))
  }
}
