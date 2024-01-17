import { useEffect, useState } from "react";
import axios from "axios";
const useSingleData = (url) => {
  const [singleData, setSingleData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const { data, status } = await axios.get(url);
      if (status === 200) {
        setSingleData(data.data);
        setLoading(false);
      } else {
        setLoading(true);
      }
    };
    loadProduct();
  }, [url]);
  return { loading, singleData };
};

export default useSingleData;
