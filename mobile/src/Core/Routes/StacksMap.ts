import Home from '../../Pages/Home';
import Ideas from '../../Pages/Ideas';
import Profile from '../../Pages/Profile';
import SignIn from '../../Pages/SignIn';
import SignUp from '../../Pages/SignUp';
import IdeaStack from './stacks/IdeaStack';
import TabStack from './stacks/TabStack';

export const StacksMap = {
  auth: [
    {name: 'SignIn', component: SignIn},
    {name: 'SignUp', component: SignUp},
  ],
  pages: [
    {name: 'TabStack', component: TabStack},
    {name: 'IdeaStack', component: IdeaStack},
  ],
  tabs: [
    {name: 'Principal', component: Home},
    {name: 'Minhas Ideias', component: Ideas},
    {name: 'Profile', component: Profile},
  ],
};
