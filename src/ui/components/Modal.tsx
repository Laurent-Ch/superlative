"use client";

import React, { useEffect, useRef, useState, MouseEventHandler } from "react";
import ReactPortal from "./ReactPortal";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, handleClose }) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) setMounted(true);
  }, [isOpen]);

  const handleOverlayClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div ref={nodeRef} onClick={handleOverlayClick}>
        <button
          className="absolute right-5 top-4 flex size-10 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </ReactPortal>
  );
};

export default Modal;
