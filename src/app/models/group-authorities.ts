import {Groups} from  './groups'


export interface GroupAuthorities {
  authority: {
    createdBy: String,
    createdDate: String,
    deleted: boolean,
    description: String,
    id: number,
    lastModifiedBy: String,
    lastModifiedDate: String,
    name: String,
    version: number
  },
  createdBy: String,
  createdDate: String,
  deleted: boolean,
  group:Groups,
  id: number,
  lastModifiedBy: String,
  lastModifiedDate: String,
  version: number

}
