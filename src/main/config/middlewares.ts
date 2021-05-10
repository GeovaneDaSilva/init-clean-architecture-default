import { Express } from 'express'
import { expressFile } from '../middlewares/file-upload'
import { cors, bodyParser } from '../middlewares/index'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(expressFile)
}
