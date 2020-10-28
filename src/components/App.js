import { BrowserRouter, Switch ,Route } from "react-router-dom";

import Layout from './Layout';
import NotFound from '../pages/NotFound';
import LandingPage from '../pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
