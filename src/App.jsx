import Index from '../src/pages';
import RhodesianInfoPage from './pages/rhodesian';
import styles from '../src/styles/App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/rhodesian">
            <RhodesianInfoPage/>
          </Route>
          <Route path="/">
            <Index/>
          </Route>
        </Switch>
      </Router>
  </div>
  );
}


export default App;
