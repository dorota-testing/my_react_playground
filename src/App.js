//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import PageContentLanding from './components/PageContentLanding/PageContentLanding.js';

function App() {
  return (
    <div className="App">
    <Header />

  <main role="main" className="flex-shrink-0">
    <div className="container">
      <div className="row">
        <PageContentLanding />
        <Sidebar />
      </div>

    </div>
  </main>

    <Footer />
    </div>
  );
}

export default App;
