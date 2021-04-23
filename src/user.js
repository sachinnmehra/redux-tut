import React from "react";

const User = ({ data }) => {
  return (
    <div>
      <h1>User Component</h1>
      <h2>
        {data.name} {data.age} {data.gender}
      </h2>
    </div>
  );
};

export default User;
