import "./Style.css";
const Login =() =>{
  return (
    <>
      <section>
        <div className="container">
          <h1>Login Form</h1>
          <form action="#">
            <div className="control">
              <label htmlFor="input">Email </label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="control">
              <label htmlFor="input">Paswword </label>
              <input type="password" name="lastname" id="pwd" />
            </div>
            <input type="checkbox" name="checkbox" id="check" />
            <span>Remember Me</span>
            <div className="control">
              <input type="submit" value="Log In" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
