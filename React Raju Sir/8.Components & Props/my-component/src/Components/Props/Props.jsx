
import React from 'react'

function Props(value) {
  

  return (
    <>
      {/* {sdata.map((item) => {
        console.log(item);
          return <div>
              Name: {item.name} <br />
              Email :{item.email} <br />
              City:{item.city}  <br /> <br />
          </div>;
      })} */}
      <div>
        Name : {value.name}
        console.log(value.name);
      </div>
    </>
  );
}

export default Props