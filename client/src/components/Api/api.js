import axios from "axios";

export const addNewMemoryToDB = (memoriesListDB) =>
  fetch("http://localhost:5001/create-new-memory", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memoriesListDB),
  });

export const deleteListing = async (idHolder) => {
  /**DELETE METHOD */
  const options = {
    url: `http://localhost:5001/showlist-fromdb/${idHolder}`,
    method: "DELETE",
    data: idHolder,
  };

  axios(options)
    .then((response) => {
      console.log("A listing got deleted!");
    })
    .catch((err) => {
      console.log(err);
    });
};
