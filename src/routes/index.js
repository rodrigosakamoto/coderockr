import { Switch, Route } from 'react-router-dom';

import PostDetails from '../pages/PostDetails';
import PostList from '../pages/PostList';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={PostList} />
      <Route path="/post/:id" component={PostDetails} />
      <Route />
    </Switch>
  );
}

export default Routes;
