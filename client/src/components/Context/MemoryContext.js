import React from "react";
import { createContext, useState, useEffect } from "react";
import { addNewMemoryToDB, deleteListing } from "../Api/api.js";

export const GlobalDataHolder = createContext();

export const GlobalDataWrapper = ({ children }) => {
  const intialMemoryList = [];

  const [memoryList, setMemoryList] = useState(intialMemoryList);

  const getData = async () => {
    const response = await fetch(`http://localhost:5001/showlist-fromdb`);
    const newData = await response.json();

    setMemoryList(newData);
  };

  const addNewMemory = async (acceptedData) => {
    setMemoryList([
      ...memoryList,
      {
        ...acceptedData,
      },
    ]);

    await addNewMemoryToDB(acceptedData);
  };

  const deleteMemory = async (acceptedCardID) => {
    await deleteListing(acceptedCardID);

    await getData();
  };

  useEffect(async () => {
    getData();
  }, []);

  return (
    <GlobalDataHolder.Provider
      value={{ memoryList, setMemoryList, addNewMemory, deleteMemory }}
    >
      {children}
    </GlobalDataHolder.Provider>
  );
};
