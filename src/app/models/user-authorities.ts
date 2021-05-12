import { Authority } from './authority';

export interface UserAuthorities {
  authority: Authority,
  createdBy: String,
  createdDate: String,
  deleted: boolean,
  id: number,
  lastModifiedBy: String,
  lastModifiedDate: String,
  user: {
    accountNonExpired: boolean,
    accountNonLocked: boolean,
    authorities: [
      {
        authority: String
      }
    ],
    createdBy: String,
    createdDate: String,
    credentialsNonExpired: boolean,
    dateOfBirth: String,
    deleted: boolean,
    driverLicenseNumber: String,
    email: String,
    enabled: boolean,
    firstName: String,
    gender: String,
    group: {
      createdBy: String,
      createdDate: String,
      deleted: boolean,
      id: number,
      lastModifiedBy: String,
      lastModifiedDate: String,
      name: String,
      version: number
    },
    id: number,
    initials: String  ,
    lastModifiedBy: String,
    lastModifiedDate: String,
    lastName: String,
    nationalIdentificationNumber: String,
    nationality: String,
    passportNumber: String,
    phoneNumber: String,
    title: String,
    username: String,
    version: number
  },
  version: number
}
