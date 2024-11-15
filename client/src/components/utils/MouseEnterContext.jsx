import { createContext, useContext } from "react";

// Context definition
export const MouseEnterContext = createContext(undefined);

// Custom hook for consuming context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
