import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  //console.log(isAuthenticated, user)

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
        <Link to={isAuthenticated ? "/profile" : "/"}>Task Manager</Link>
      </h1>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
           {user && user.name ? (
              <li>{user.name} {user.lastname}</li>
            ) : (
              <li>Loading...</li>
            )}
            <li>
              <Link className="bg-indigo-500 px-3 py-2 rounded-md" to="/profile">Perfil</Link>
            </li>
            <li>
              <Link className="bg-indigo-500 px-3 py-2 rounded-md" to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link className="bg-indigo-500 px-3 py-2 rounded-md" to="/login">Login</Link>
            </li>
            <li>
              <Link className="bg-indigo-500 px-3 py-2 rounded-md" to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}