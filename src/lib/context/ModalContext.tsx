"use client";
import React, { createContext } from "react";

interface ModalContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  setIsOpen: () => {},
});

export default ModalContext;
