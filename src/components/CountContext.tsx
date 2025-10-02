import React, { createContext, useContext, useState } from "react";

interface CountContextType {
  count: number;
  increment: (value: number) => void;
  isMale : boolean;
  setMale : (value: boolean) => void;
}

const CountContext = createContext<CountContextType | undefined>(undefined);

export const CountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isMale , setIsMale] = useState(true);

  const increment = (value: number) => {
    setCount((prev) => prev + value);
  };
  const setMale = (a : boolean) =>{
    setIsMale(a);
  }

  return (
    <CountContext.Provider value={{ count, increment , setMale , isMale }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within CountProvider");
  }
  return context;
};
export default CountContext;