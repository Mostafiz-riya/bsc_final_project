import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    console.log(user);
    if (email) {
      fetch(`http://localhost:5000/users/admin/${email}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
