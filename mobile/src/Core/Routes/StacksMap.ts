import Home from '../../Pages/Home';
import SignIn from '../../Pages/SignIn';
import SignUp from '../../Pages/SignUp';
import TabStack from './stacks/TabStack';

export const StacksMap = {
  auth: [
    {name: 'SignIn', component: SignIn},
    {name: 'SignUp', component: SignUp},
  ],
  pages: [
    {name: 'TabStack', component: TabStack},
    {name: 'Cadastrar', component: Home},
  ],
  tabs: [{name: 'Principal', component: Home}],
};
