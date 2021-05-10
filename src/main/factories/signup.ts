import { DbAddAccount } from '../../data/useCases/db-add-account'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { BcryptAdapter } from '../../utils-adapters/bcrypt-adapter'
import { EmailValidatorAdapter } from '../../utils-adapters/email-validator-adapter'

export const makeSignUpController = (): SignUpController => {
  const salt = 10
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  const signUpController = new SignUpController(emailValidatorAdapter, accountMongoRepository, dbAddAccount)
  return signUpController
}
