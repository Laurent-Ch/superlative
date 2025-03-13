"use client";

import React from "react";

export const useHash = () => {
  const [hash, setHash] = React.useState<string>("");

  React.useEffect(() => {
    // Ensure code only runs on client side
    if (typeof window !== "undefined") {
      const onHashChanged = () => setHash(window.location.hash);
      const { pushState, replaceState } = window.history;

      window.history.pushState = function (...args) {
        pushState.apply(window.history, args);
        setTimeout(() => setHash(window.location.hash), 0);
      };

      window.history.replaceState = function (...args) {
        replaceState.apply(window.history, args);
        setTimeout(() => setHash(window.location.hash), 0);
      };

      window.addEventListener("hashchange", onHashChanged);
      window.addEventListener("load", onHashChanged);

      return () => {
        window.removeEventListener("load", onHashChanged);
        window.removeEventListener("hashchange", onHashChanged);
      };
    }
  }, []);

  return hash;
};
