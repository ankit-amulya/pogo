import Navbar from "./component/Navbar";
import Home from "./component/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Animedetails from "./component/Animedetails";
import Wishlist from "./component/Wishlist";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            
            <Route exact path="/animedetails:mal_id">
              <Animedetails/>
            </Route>

            <Route path="/Wishlist">
              <Wishlist/>
            </Route>

          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
