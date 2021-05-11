
import { EmailValidatorAdapter } from '../../utils-adapters/email-validator-adapter'
import { LoginController } from '../../presentation/controllers/login/login'
import { Dbauth } from '../../data/useCases/db-authentication'
import { DcryptAdapter } from '../../utils-adapters/bcrypt-adapter'
import { JwtAdapter } from '../../utils-adapters/jwt-adapter'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'

export const makeLoginController = (): LoginController => {
  const seed = process.env.SEED
  const expiresIn = process.env.EXPIRES_IN
  const jwtAdapter = new JwtAdapter(seed, expiresIn)
  const accountMongoRepository = new AccountMongoRepository()
  const dbauth = new Dbauth(jwtAdapter, accountMongoRepository)
  const emailValidatorAdapter = new EmailValidatorAdapter()
  const dcryptAdapter = new DcryptAdapter()
  const loginController = new LoginController(emailValidatorAdapter, dbauth, dcryptAdapter, accountMongoRepository)
  return loginController
}
