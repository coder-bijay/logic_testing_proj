import React from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  position?: "center" | "left" | "right"; // Position of the modal/drawer
  children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  position = "center",
  children,
}) => {
  if (!isOpen) return null;

  // Compute the position-specific styles
  const positionStyles = {
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    left: "top-0 left-0 transform-none",
    right: "top-0 right-0 transform-none",
  };

  const closeStyles = {
    center: "top-2 right-2",
    left: "top-2 right-2",
    right: "top-2 right-2",
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-70"
        onClick={onClose}
      ></div>

      {/* Modal/Drawer */}
      <div
        className={`fixed bg-white shadow-lg p-6 w-full flex flex-col gap-4 sm:max-w-md rounded-md h-full sm:h-auto ${positionStyles[position]}`}
      >
        {/* Close button */}
        <MdClose
          onClick={onClose}
          className={`absolute w-6 h-6 ${closeStyles[position]} text-red-500 mb-4 cursor-pointer`}
        />
        {children}
      </div>
    </div>,
    document.body
  );
};
