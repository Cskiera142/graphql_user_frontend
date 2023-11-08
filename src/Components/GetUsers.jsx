import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log(data);
    // if (data) {
    //   setUsers(data.getAllUsers);
    //   console.log(users);
    // }
  }, [data]);

  return (
    <div>
      {/* {" "}
      {users.map((val) => {
        return <h1 key={val.id}> {val.id}</h1>;
      })} */}
    </div>
  );
}

export default GetUsers;
