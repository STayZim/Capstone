

function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand btn btn-light" span title="Welcome to Keystone Bank!" style={{color: "Black"}} href="#">Keystone Bank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
          <a className="nav-link btn btn-light"   title="New To Keystone? Sign up here!" href="#/createaccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light" title="Get your money!"  href="#/login/">Login</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link btn btn-light" title ="Deposit funds!" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light" title="Get your money!"  href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light" title="Check your balance"  href="#/balance/">Balance</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link btn btn-light" title="Account 411"  href="#/alldata/"> AllData</a>
          </li>               
        </ul>
      </div>      
    </nav>
    </>
  );
}



