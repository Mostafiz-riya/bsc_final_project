import { useEffect, useState } from "react";
import axios from "axios";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";
const useToken = (user, displayName = null) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = {
      name: user?.user?.displayName ? user?.user?.displayName : displayName,
      email: email,
      image: user?.user?.photoURL,
    };
    if (email) {
      const loaduser = async () => {
        const { data, status } = await axios.put(
          `http://localhost:5000/users/${email}`,
          currentUser
        );
        if (status === 200) {
          console.log("data inside useToken", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        } else {
          console.log("somthing error");
        }
      };
      loaduser();
    } else {
      signOut(auth);
    }
  }, [displayName, user]);
  return [token];
};

export default useToken;
