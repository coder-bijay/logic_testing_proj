"use client";
import React, { useState } from "react";
import { Modal } from "../components/Modal";

export const ModalsComponent: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [position, setPosition] = useState<"center" | "left" | "right">(
    "center"
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Modal/Drawer Demo</h1>

      {/* Buttons to trigger modals */}
      <div className="space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => {
            setPosition("left");
            setModalOpen(true);
          }}
        >
          Open Left Drawer
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => {
            setPosition("center");
            setModalOpen(true);
          }}
        >
          Open Center Modal
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => {
            setPosition("right");
            setModalOpen(true);
          }}
        >
          Open Right Drawer
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        position={position}
      >
        <div className={`${position === "center" ? "h-fit" : "h-screen"}`}>
          <h2 className="text-xl mb-4">This is a {position} modal/drawer</h2>
          <p>Modal content goes here!</p>
        </div>
      </Modal>
    </div>
  );
};
