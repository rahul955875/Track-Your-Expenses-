import React, { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [localData, setLocalData] = useState(initialValue);
  useEffect(() => {
    const exitstingData = JSON.parse(localStorage.getItem(key));
    if (exitstingData) {
      setLocalData(exitstingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, []);
  const updateLocalStorage = (newValue) => {
    if (typeof newValue === "function") {
      localStorage.setItem(key, JSON.stringify(newValue(localData)));
    } else {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
    setLocalData(newValue);
  };
  return [localData, updateLocalStorage];
};
