/* eslint-disable @typescript-eslint/naming-convention */

export class AccountModel {
  readonly name: string
  readonly email: string
  readonly password: string
  readonly role: string
  readonly password_hash: string
  readonly created_date: string
  constructor (name: string, email: string, password: string, role: string, created_date: string, password_hash: string) {
    this.name = name
    this.email = email
    this.password = password
    this.role = role
    this.password_hash = password_hash
    this.created_date = created_date
  }
}
