import React, { useState } from "react";
import logo from "./logo.svg";
import { Modal } from "react-dialog-polyfill";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => setIsOpen(true)}>
          Click me to open a modal
        </button>
        <Modal
          open={isOpen}
          onCancel={() => setIsOpen(false)}
          onClick={() => setIsOpen(false)}
        >
          <div>Hello world</div>
        </Modal>
      </header>
    </div>
  );
}

export default App;
