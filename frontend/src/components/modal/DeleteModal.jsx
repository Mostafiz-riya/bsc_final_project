import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const DeleteModal = ({ item, setItem, message, setData, updatedData, url }) => {
  useEffect(() => {
    if (item?._id) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [item?._id]);

  const handleDelete = async (id) => {
    const { status } = await axios.delete(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (status === 202) {
      const updated = updatedData.filter((d) => d._id !== id);
      setData(updated);
      toast("Successfully");
      setItem(null);
    } else {
      toast("Failed");
    }
  };

  return (
    <div className="modal-container">
      <div className="mt-64 md:mt-0">
        <div className=" w-full  p-4 lg:p-8 mx-auto bg-btn border border-primary rounded-2xl">
          <div className="modal-col">
            <h4 className="text-xl font-medium">
              <span>Do you want to delete</span>
              <br />
              <span className="text-2xl text-primary font-semibold">
                {message}!
              </span>
            </h4>
          </div>
          <div className="modal-btn px-4">
            <button onClick={() => setItem(null)}>
              <FontAwesomeIcon className="xicon" icon={faXmark} />
            </button>
            <button
              onClick={() => handleDelete(item?._id)}
              className="common-btn"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
