"use client";

// ** React Imports
import { useEffect, useState } from "react";

// ** Types
import type { HashSection } from "@/types/hash";

export function useHash(): [HashSection, (value: HashSection) => void] {
  const [hash, setHashState] = useState<HashSection>("#about");

  function setHash(value: HashSection) {
    if (window.location.hash !== value) {
      window.location.hash = value;
    }
    setHashState(value);
  }

  useEffect(() => {
    function updateHash() {
      setHash(window.location.hash as HashSection);
    }

    updateHash();

    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return [hash, setHash];
}
