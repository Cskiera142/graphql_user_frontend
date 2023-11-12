import { useMutation } from "@apollo/client";
import { DELETE_USER_MUTATION } from "../GraphQL/Mutations";

const DeleteUserButton = ({ userId }) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION);

  const handleDeleteClick = async () => {
    try {
      await deleteUser({ variables: { userId } });
      console.log("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  return <button onClick={handleDeleteClick}>Delete User</button>;
};

export default DeleteUserButton;
