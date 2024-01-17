import React from "react";
import { useSelector } from "react-redux";
import AdminModal from "./AdminModal.jsx";
import Modal from "./Modal.jsx";

const AllModal = () => {
  const { item } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.message);
  return (
    <div>
      {item && <Modal item={item} />}
      {data && <AdminModal data={data} />}
    </div>
  );
};

export default AllModal;
