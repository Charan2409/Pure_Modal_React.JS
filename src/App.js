import "./styles.css";
import { useState } from "react";

export default function App() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="App">
      <button className="btn-modal" onClick={toggleModal}>
        Open
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </span>
              <button className="modal-close-btn" onClick={toggleModal}>
                {" "}
                x{" "}
              </button>
              <button className="modal-close-btn2" onClick={toggleModal}>
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
