import {Route, IndexRoute} from 'react-router';

import App from './App';
import Main from 'App/client/Main';


export default(
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
  </Route>
)