import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import axios from "axios";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

const useData = (url) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const { data, status } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (status === 200) {
        setData(data.data);
        setLoading(false);
      } else {
        setLoading(true);
        await signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
    };
    loadProduct();
  }, [navigate, url]);
  return { loading, data , setData};
};

export default useData;
