"use client";
import React, { useState, useEffect } from "react";

import ModalContext from "./ModalContext";

const ModalContextProvider = ({
  children,
}: React.PropsWithChildren<object>) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
