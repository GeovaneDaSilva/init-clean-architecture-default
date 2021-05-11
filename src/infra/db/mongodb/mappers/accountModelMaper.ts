
import { Document } from 'mongoose';

import { AccountModel } from '../../../../domain/models/account';
import IMongooseModelMapper from './interface/IMongooseModelMapper';
import AccountSchema from '../mongo-schemas/account-schema'

export class AccountModelMapper implements IMongooseModelMapper<AccountModel> {
    
  fromDomainEntity(account: AccountModel): Document<any, {}> {
    const accountSchema = new AccountSchema({
      name: account.name,
      email: account.email,
      password: account.password,
      role: account.role,
      created_date: account.created_date

    });

    return accountSchema;
  }

  toDomainEntity(accountModel: any): AccountModel {
    const account: any = new AccountModel();
    account.name = accountModel.name
    account.email = accountModel.email
    account.password = accountModel.password
    account.role = accountModel.role
    account.created_date = accountModel.created_date

    return accountModel;
  }
}
