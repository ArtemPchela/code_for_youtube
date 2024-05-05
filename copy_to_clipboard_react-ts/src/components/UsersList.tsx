import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CopyToClipboard from "./CopyToClipboard.tsx";

type User = {
  email: string;
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
  };
  phone: string;
};

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get("https://api.randomuser.me/", {
    params: { results: 3 },
  });

  return data.results;
};

const UsersList = () => {
  const { data, error, isLoading } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error)
    return <div>An error occurred: {error.message}</div>;

  return (
    <ul className="list_wrapper">
      {data?.map((user, index) => (
        <li key={index}>
          <h2>
            {user.name.first} {user.name.last}
          </h2>
          <div>
            Email: {user.email} <CopyToClipboard text={user.email} />
          </div>
          <div>
            Phone: {user.phone} <CopyToClipboard text={user.phone} />
          </div>
          <div>Location: {user.location.city}</div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
