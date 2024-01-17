import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openMessage } from "../../../feature/slice/messageSlice.js";
import React from "react";
import { useDispatch } from "react-redux";
const UserRow = ({ user, setItem }) => {
  const dispatch = useDispatch();
  const handleAdmin = async (user) => {
    const userData = { role: "admin" };
    dispatch(
      openMessage({
        ...user,
        userData,
        message: (
          <h4 className="text-xl font-medium text-tertiary">
            Do you want to make admin{" "}
            <span className="text-primary text-2xl font-semibold">
              {user?.name}
            </span>
          </h4>
        ),
      })
    );
  };

  return (
    <tr>
      <td className="order-td">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-12">
            <img
              className="w-full h-full ring ring-primary rounded-full"
              src={
                user?.image
                  ? user?.image
                  : "https://placeimg.com/192/192/people"
              }
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-primary font-medium text-lg">{user?.name}</p>
          </div>
        </div>
      </td>
      <td className="order-td">
        <p className="text-base font-medium text-tertiary">{user?.email}</p>
      </td>
      <td className="order-td">
        <p className="text-base font-medium text-tertiary">{user?.role}</p>
      </td>
      <td className="order-td">
        <div className="flex items-center gap-2">
          {user?.role === "admin" ? (
            <button className="xicon">admin</button>
          ) : (
            <>
              <button
                onClick={() => handleAdmin(user)}
                className="common-btn4 mx-0 lg:mx-3"
              >
                Make Admin
              </button>
              <button onClick={() => setItem(user)} className="xicon">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
