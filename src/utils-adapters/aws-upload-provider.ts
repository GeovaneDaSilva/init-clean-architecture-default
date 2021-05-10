/* eslint-disable handle-callback-err */
import AWS from 'aws-sdk'

import { IParams, IUploadAws } from '../presentation/interfaces/aws-s3-upload'

export class UploadAwsAdapter implements IUploadAws {
  async upload (params: IParams): Promise<IParams> {
    try {
      const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ID,
        secretAccessKey: process.env.AWS_SECRET
      })

      const S3params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: params.key,
        Body: params.body
      }
      const upload: any = s3.upload(S3params, (data) => data)
      return upload
    } catch (error) {
      console.log(error)
    }
  }
}
