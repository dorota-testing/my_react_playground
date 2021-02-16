import React from 'react';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import AdminHeader from './components/AdminHeader/AdminHeader.js';
import AdminSidebar from './components/AdminSidebar/AdminSidebar.js';
import PageContentLanding from './components/PageContentLanding/PageContentLanding.js';
import PageAbout from './components/PageAbout/PageAbout.js';
import PageManageCollection from './components/PageManageCollection/PageManageCollection.js';
import AdminDriversList from './components/AdminDriversList/AdminDriversList.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <div className="container">
              <PageContentLanding />
              <Sidebar />
            </div>
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <div className="container">
                <PageAbout />
              <Sidebar />
            </div>
            <Footer />
          </Route>
          <Route path="/manage-collection">
            <Header />
            <div className="container">
              <PageManageCollection />
              <Sidebar />
            </div>
            <Footer />
          </Route>
          {/* admin  */}
          <Route exact path="/admin">
            <AdminHeader />
            <div className="admin-container">
              <AdminSidebar />
              <div className="main-column">
              < AdminDriversList />
              </div>
            </div>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
