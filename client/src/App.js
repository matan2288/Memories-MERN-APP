import { React, useContext } from "react";
import "./App.css";
import MemoryForm from "./components/CreateMemory/MemoryForm";
import MainHeader from "./components/MainHeader/MainHeader.js";

import { GlobalDataWrapper } from "./components/Context/MemoryContext.js";

export default function App() {
  return (
    <div className="app-main-container">
      <div id="header-container">
        <MainHeader />
      </div>

      <GlobalDataWrapper>
        <MemoryForm />
      </GlobalDataWrapper>

      <span id="Footer">Made by Matan Elmaliach ✌.</span>
    </div>
  );
}
