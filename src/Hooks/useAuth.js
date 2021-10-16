import { useContext } from "react";
import { AuthContext } from "../components/Context/AuthProvider";

const useAuth = () => useContext(AuthContext); //must return useContext

export default useAuth;
