import { Authentication } from '../../domain/useCases/authentication'
import { AccountModel } from '../../domain/models/account'
import { IJwt } from '../../presentation/interfaces/jwt-token'
import { IAccountRepository } from './protocols/account-repository'

export class Dbauth implements Authentication {
  constructor (private readonly iJwt: IJwt,
    private readonly iAccountRepository: IAccountRepository) {
    this.iJwt = iJwt
    this.iAccountRepository = iAccountRepository
  }

  async auth (email: string): Promise<AccountModel> {
    try {
      const userDB: any = await this.iAccountRepository.getOne(email)
      const User: any = {
        id: userDB._id,
        name: userDB.name,
        email: userDB.email,
        role: userDB.role,
        date: new Date()
      }

      const token = await this.iJwt.token(User)

      if (!token) {
        throw Error('NO exist TOken in the data')
      }

      const newUser: any = {
        User,
        token
      }
      return newUser
    } catch (error) {
      console.log(error)
      return error.message
    }
  }
}
