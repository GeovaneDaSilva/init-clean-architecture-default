import { Router } from 'express'
import { makeSignUpController } from '../factories/signup'
import { AdaptRoute } from '../adapters/express-route-adapter'
import { makeLoginController } from '../factories/auth'
import AuthenticationToken from '../../presentation/middlewares/auth-middlewares'
export default (router: Router): void => {
  router.post('/login', AdaptRoute(makeLoginController()))
  router.post('/signup', AdaptRoute(makeSignUpController()))
}

// AuthenticationToken.veryfyToken, AuthenticationToken.veryfyRole_Admin,
