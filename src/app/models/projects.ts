import { Users } from './users';
export interface Projects {
  description: string;
  email: string;
  name: string;
  phoneNumber: string;
  username: string;
  id:string|number ;
  user:Users;
}
