//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  NavLink
} from "react-router-dom";
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import PageContentLanding from './components/PageContentLanding/PageContentLanding.js';


function App() {
  return (
  <Router>  
    <div className="App">
    <Header />

  <main role="main" className="flex-shrink-0">
    <div className="container">
      <div className="row">
        <Switch>
          <Route exact path="/">
            <PageContentLanding />
            <Sidebar />
          </Route>
          <Route path="/about">
            <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9">
              <p>Lorem ispum dolor.</p>
            </div>
            <Sidebar />
          </Route>
          <Route path="/map">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p>Map goes here.</p>
            </div>
          </Route>
        </Switch>  
      </div>

    </div>
  </main>

    <Footer />
    </div>
    </Router>  
  );
}

export default App;