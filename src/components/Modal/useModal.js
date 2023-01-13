import { useState } from "react";

export const useModal = () => {
  const [isOpen, setOpen] = useState(false);
  const openModal = async () => {
    setOpen(true);
  };

  const closeModal = async () => {
    setOpen(false);
  };

  return { openModal, closeModal, isOpen };
};
