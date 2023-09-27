import React from "react";

// Components:
import { SymbolIcon } from "@radix-ui/react-icons";

export default function Loader() {
  return (
    <div className="animate-spin">
      <SymbolIcon />
    </div>
  );
}
