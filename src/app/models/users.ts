import { Groups } from './groups';

export interface Users {
  dateOfBirth: string;
  driverLicenseNumber: string;
  email: string;
  firstName: string;
  gender: string;
  groupId: Groups;
  initials: string;
  lastName: string;
  nationalIdentificationNumber: string;
  nationality:string;
  passportNumber: string;
  phoneNumber: string;
  title: string;
  username: string;
  id:string | number;
}
