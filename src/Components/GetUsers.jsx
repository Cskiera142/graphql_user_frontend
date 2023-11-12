import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import DeleteUserButton from "./Delete";
import "../App.css";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log(data);
    if (data) {
      setUsers(data.getAllUsers);
      console.log(users);
    }
  }, [data]);

  return (
    <div className="user-container">
      {" "}
      {users.map((val) => {
        return (
          <div key={val.id} className="details">
            <h1>id: {val.id}</h1>
            <h2>{val.firstName}</h2>
            <h2>{val.lastName}</h2>
            <h2>{val.email}</h2>
            <DeleteUserButton />
          </div>
        );
      })}
    </div>
  );
}

export default GetUsers;
