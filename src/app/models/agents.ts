import { Groups } from './groups';
import { Users } from './users';
import {Projects} from './projects';
import {Question,QuestionOption,OptionsList} from './questions.interface'
export interface Agents {
  user: Users;
  client: Projects;
  question: Question;
  questionOption: QuestionOption;
  optionList:OptionsList;
  createUserCommand:{
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
}
