import "./Style.css";
const Register =()=> {
  return (
    <>
      <section>
        <div className="container">
          <h1>Register Form</h1>
          <form action="#">
            <div className="control">
              <label htmlFor="input">First Name </label>
              <input type="text" name="firstname" id="fname" />
            </div>
            <div className="control">
              <label htmlFor="input">Last Name </label>
              <input type="text" name="lastname" id="lname" />
            </div>
            <div className="control">
              <label htmlFor="input">Email </label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="control">
              <label htmlFor="input">Paswword </label>
              <input type="password" name="lastname" id="pwd" />
            </div>
            <input type="checkbox" name="checkbox" id="check" />
            <span>I Agree All Terms and Conditions</span>
            <div className="control">
              <input type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Register;
