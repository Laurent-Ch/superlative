"use client";

import { createPortal } from "react-dom";
import React, { useState, useLayoutEffect } from "react";
import { createWrapperAndAppendToBody } from "@/src/lib/helpers/modal";

interface ReactPortalProps {
  children: React.ReactNode;
  wrapperId: string;
}

const ReactPortal: React.FC<ReactPortalProps> = ({
  children,
  wrapperId = "react-portal-wrapper",
}: ReactPortalProps) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLDivElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId) as HTMLDivElement;
    let systemCreated = false;

    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId) as HTMLDivElement;
      systemCreated = true;
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (!wrapperElement) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;
