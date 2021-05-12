import {Projects} from './projects';
import {Groups} from './groups';
import {Users} from './users';

export interface Documents {

  clientId: Projects;
  user: Users;
  group: Groups;
  fileName: any;
  name: string;
  id: number;
}
