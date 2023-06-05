import React, { useState } from "react";

const data = [
  {
    name: "Aman",
    age: 14,
    email: "aman@mail.com",
    phoneno: 123,
    class: "card text-white bg-primary mb-3",
  },
  {
    name: "Raj",
    age: 24,
    email: "raj@mail.com",
    phoneno: 12313,
    class: "card text-white bg-secondary mb-3",
  },
  {
    name: "Jhon",
    age: 34,
    email: "jhon@mail.com",
    phoneno: 2422,
    class: "card text-white bg-success mb-3",
  },
  {
    name: "Don",
    age: 34,
    email: "don@mail.com",
    phoneno: 2434,
    class: "card text-white bg-danger mb-3",
  },
  {
    name: "Angel",
    age: 33,
    email: "angel@mail.com",
    phoneno: 454,
    class: "card text-white bg-warning mb-3",
  },
  {
    name: "Somi",
    age: 66,
    email: "somi@mail.com",
    phoneno: 654,
    class: "card text-white bg-info mb-3",
  },
];

const UseStateHook = () => {
    const [student, setStudent] = useState(data);
    const [name, setName] = useState("Aman")
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      <br />
      <br />

      <div className="card-deck">
        {student.map((item) => {
          return (
            <>
              <div className={item.class}>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    <p className="card-text">Email:{item.email}</p>
                    <p className="card-text">Age:{item.age}</p>
                    <p className="card-text">PhoneNo:{item.phoneno}</p>
                  </p>
                </div>
              </div>
              </>
              
          );
        })}
          </div>

          <h1>My name is {name}</h1>
          <button onClick={()=>{setName("Rahul")}}>Change</button>
    </>
  );
};

export default UseStateHook;


