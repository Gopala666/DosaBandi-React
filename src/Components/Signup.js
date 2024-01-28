export const Signup = () => {
  const handleSignUp = () => {
    // Handle login logic
    console.log('SignUp button clicked');
  };
    return (
        
  <div className="container">
  <br/><br/><br/><br/><br/>
  <div className="row">
    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div className="card border-0 shadow rounded-3 my-5">
        <div className="card-body p-4 p-sm-5">
          <h5 className="card-title text-center mb-5 fw-dark fs-5">SignUp</h5>
          <form>
          <div className="form-floating mb-3">
              <input type="name" className="form-control" id="fullName" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="confirmPassword" placeholder="Password"/>
              <label htmlFor="floatingPassword">Confirm Password</label>
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
              <label className="form-check-label" htmlFor="rememberPasswordCheck">
                Remember password
              </label>
            </div>
            <div className="d-grid">
              <button className="btn btn-warning" type="submit">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
      );
    };