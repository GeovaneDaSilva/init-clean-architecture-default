import { AccountModel } from '../../../../domain/models/account'
import UploadRepository from '../../../../domain/repositories/uploadRepository'
import { IUploadRepository } from '../../../../data/useCases/protocols/upload-repository'
import { UploadModel } from '../../../../domain/models/upload'

export class UploadMongoRepository implements IUploadRepository {
  async add (uploadData: UploadModel): Promise<UploadModel> {
    try {
      const collection: any = await UploadRepository.create(uploadData)
      return collection
    } catch (error) {
      console.log(error)
    }
  }
}
