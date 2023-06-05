import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Loading from './Details/Loading';

const UseEffectEx = () => {
  const [user, setUser] = useState([])
  const [load,setLoad] = useState(true)
    const baseUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.133799&lng=85.36452&offset=31&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING";
    const getUser = async () => {
        const res = await fetch(`${baseUrl}/users`)
        const userData = await res?.json()
      setUser(userData)
      setLoad(false);
      
    }
    useEffect(() => {
      getUser()
    }, [])
    console.log(user);
  
  if (load) {
    return (<Loading/>)
  }
  return (
    <>
      <div className="container">
        <h1>Api call Using usestate useEffect hooks</h1>
        <div className="row">
          {user.map((item, index) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Phone: {item.phone}
                      </h6>
                      <p className="card-text">Email :{item.email}</p>
                      <p className="card-text">
                        {item.address.street} {item.address.suite}
                        {item.address.city} {item.address.zipcode}
                      </p>
                      <NavLink className="btn btn-primary"  to={`/details/${item.id}`} >Details</NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UseEffectEx