import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.js";
import { signOut } from "firebase/auth";
import Loading from "./Loading.jsx";
import avater from "../../assets/images/avater.png";
import useAdmin from "../../hooks/useAdmin.js";
const Header = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass("fixed top-0 bg-white w-full right left-0 z-50")
        : setStickyClass("relative");
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className={`${stickyClass}`}>
      <div className={`header-container`}>
        <div>
          <h1 className="text-2xl font-medium text-primary">
            <Link to="/">
              Shunno{" "}
              <span className="text-bodyWhite cursor-pointer">Sholi</span>
            </Link>
          </h1>
        </div>
        <div className="menu">
          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <ul className="desktop-ul">
              {menus.map((item) => (
                <li key={item.id}>
                  <Link className="nav-item" to={item.route}>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Tab Menu */}
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-6">
              {user?.email ? (
                <>
                  <li onClick={() => setActive(!active)} className="relative">
                    <img
                      className="userImage"
                      src={user?.photoURL ? user?.photoURL : avater}
                      alt=""
                    />
                    <div
                      className={`absolute ${
                        active ? "top-16 right-0" : "-top-[600px] right-0"
                      } dropdown-menu`}
                    >
                      {admin ? adminItem : usersItem}
                    </div>
                  </li>
                </>
              ) : (
                <li>
                  <Link className="common-btn" to={"/login"}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="flex items-center gap-4 lg:hidden">
            <div className="relative">
              <button onClick={() => setActive(!active)}>
                <img
                  className="userImage"
                  src={user?.photoURL ? user?.photoURL : avater}
                  alt=""
                />
              </button>
              <div
                className={`absolute ${
                  active ? "top-16 right-0" : "-top-[600px] right-0"
                } dropdown-menu`}
              >
                {admin ? adminItem : usersItem}
              </div>
            </div>
            <button onClick={() => setShow(!show)}>
              <FontAwesomeIcon className="xicon" icon={faBars} />
            </button>
          </div>
          {/* Mobile Menu */}
          <div
            className={`mobile-menu ${
              show
                ? "top-0 left-0 bg-menu"
                : "top-0 -left-[1000px] bg-transparent"
            }`}
          >
            <div className="menu-head">
              <div className="mobile-logo-area">
                <h1 className="text-2xl font-bold text-primary">
                  <Link to="/">
                    Shunno{" "}
                    <span className="text-bodyWhite cursor-pointer">
                      Shunno
                    </span>
                  </Link>
                </h1>
                <button onClick={() => setShow(!show)}>
                  <FontAwesomeIcon className="xicon" icon={faXmark} />
                </button>
              </div>
              <ul className="mobile-menu-ul">
                {menus.map((item) => (
                  <li key={item.id}>
                    <Link className="mobile-nav-item" to={item.route}>
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const menus = [
  {
    id: 1,
    display: "Home",
    route: "/",
  },
  {
    id: 2,
    display: "Shop",
    route: "/shop",
  },
  {
    id: 3,
    display: "About",
    route: "/about",
  },
  // {
  //   id: 4,
  //   display: "Gallery",
  //   route: "/gallery",
  // },
  // {
  //   id: 5,
  //   display: "Blog",
  //   route: "/blog",
  // },
  {
    id: 6,
    display: "Contact",
    route: "/contact",
  },
];
const usersItem = (
  <>
    <ul className="flex flex-col gap-3">
      <li>
        <Link className="dashboard-item" to="/dashboard/order">
          My Order
        </Link>
      </li>
      <li>
        <Link className="dashboard-item" to="/dashboard/review">
          My Review
        </Link>
      </li>
      <li>
        <Link className="dashboard-item" to="/dashboard/add-review">
          Add Review
        </Link>
      </li>
      <li>
        <button
          className="common-btn2 w-full mt-3"
          onClick={() => signOut(auth)}
        >
          Sign Out
        </button>
      </li>
    </ul>
  </>
);
const adminItem = (
  <>
    <ul className="flex flex-col gap-3">
      <li>
        <Link className="dashboard-item" to={"/dashboard/admin/orders"}>
          Orders
        </Link>
      </li>
      <li>
        <Link className="dashboard-item" to={"/dashboard/admin/users"}>
          Users
        </Link>
      </li>
      <li>
        <Link className="dashboard-item" to={"/dashboard/admin/add-product"}>
          Add Product
        </Link>
      </li>
      <li>
        <Link className="dashboard-item" to={"/dashboard/admin/products"}>
          Manage Product
        </Link>
      </li>
      <li className="common-btn2 mt-3">
        <button onClick={() => signOut(auth)}>Sign Out</button>
      </li>
    </ul>
  </>
);
export default Header;
