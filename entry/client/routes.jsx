import { Route } from 'react-router';

import routes from 'App/client/routes'
//import routes from 'TodoApp/client/routes'

ReactRouterSSR.Run(
  <Route>
    {routes}
  </Route>
);
