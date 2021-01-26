import React, { useContext } from "react";

import MemoryCard from "../MemoryCardDesign/MemoryCard";
import "./MemoryFormStyle.css";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import uniqid from "uniqid";

import { GlobalDataHolder } from "../Context/MemoryContext.js";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const MemoryForm = () => {


  const { memoryList, addNewMemory } = useContext(GlobalDataHolder);

  const classes = useStyles();

  //** USE FORM *//
  const { register, handleSubmit } = useForm();

  const onSubmit = (thisListGoesToDB) => {
    addNewMemory(thisListGoesToDB);
  };

  return (
    <div className="form-main-div">
      <div id="wrapper">
        <div className="form-container">
          <p id="form-title">Add your memory here</p>
          <form className="inputs-container" onSubmit={handleSubmit(onSubmit)}>
            <label for="Password" class="labels">
              IMG:
            </label>
            <input
              placeholder="Paste your image adress here!"
              className="input-design"
              id="img"
              name="img"
              ref={register}
              required
            />

            <label for="Password" class="labels">
              Title:
            </label>
            <input
              placeholder="Header"
              className="input-design"
              id="title"
              name="title"
              ref={register}
              required
            />

            <label for="Password" class="labels">
              Date:
            </label>
            <input
              placeholder="Date"
              className="input-design"
              id="date"
              type="text"
              name="date"
              ref={register}
              required
            />
            {/*         BUTTON!!!         */}
            <button id="Submit" type="submit">
              Add
            </button>
          </form>
        </div>

        <div className="card-list-container">
          {memoryList.map((passing) => {
            return (
              <ul>
                <li>
                  <MemoryCard
                    key={uniqid()}
                    thisNoteID={passing._id}
                    img={passing.img}
                    title={passing.title}
                    date={passing.date}
                  />
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemoryForm;
