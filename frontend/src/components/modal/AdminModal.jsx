import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMessage } from "../../feature/slice/messageSlice.js";
import axios from "axios";
import { toast } from "react-toastify";
const AdminModal = ({ data }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.message) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [data.message]);

  const handleDelete = async (email) => {
    const { status } = await axios.put(
      `http://localhost:5000/users/${email}`,
      data.userData,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (status === 200) {
      toast("Successfully");
    } else {
      toast("Failed");
    }
    dispatch(closeMessage());
  };

  return (
    <div className="modal-container">
      <div className="mt-64 md:mt-0">
        <div className="modal-in">
          <div className="modal-col">{data.message}</div>
          <div className="modal-btn px-4">
            <button onClick={() => dispatch(closeMessage())}>
              <FontAwesomeIcon className="xicon" icon={faXmark} />
            </button>
            <button
              className="common-btn"
              onClick={() => handleDelete(data?.email)}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
