
function Header() {
    return (
        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
          <div className="container">
          <a className="navbar-brand" href="#">Let's Recycle</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarCollapse">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Manage Your Collection</a>
              </li>
            </ul>
          </div>
          </div>
    
        </nav>
      </header>
    );
}

export default Header;