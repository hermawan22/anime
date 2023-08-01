"use client";
import { useState } from "react";
import Modal from "react-modal";
import {
  addCollection,
  createCollectionName,
  found,
  getCollection,
} from "../../utils";
import { css } from "@emotion/css";

Modal.setAppElement("#modals");

const customStyles = {
  content: {
    color: "#000000",
    width: "50vw",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Collection = ({ modalIsOpen, closeModal, data }: any) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const onChange = (e: any) => {
    e.preventDefault();
    setInput(e.target.value);
    setError("");
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();
    createCollectionName(input, setError);
    setInput("");
  };

  const handleAddCollection = (name: string) => {
    addCollection(Object.keys(name)[0], data)
    closeModal()
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <h2
        className={css`
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 5vh;
        `}
      >
        Collections
      </h2>

      {getCollection() &&
        getCollection().map((name: string) => {
          const key = Object.keys(name)[0];
          return (
            <div
              className={css`
                margin: 10px 0px;
                cursor: pointer;
                padding: 4px;
                background: #f0efef;
                border-radius: 4px;

                :hover {
                  background: #cccccc;
                }
              `}
              onClick={() => handleAddCollection(name)}
              key={key}
            >
              {key}
            </div>
          );
        })}

      <div
        className={css`
          color: red;
          font-size: 12px;
        `}
      >
        {error}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className={css`
            width: 90%;
            margin-top: 5%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            resize: vertical;
            @media (min-width: 800px) {
              width: 70%;
              margin-right: 1%;
            }
          `}
          type="text"
          name="search"
          placeholder="Add collection"
          value={input}
          onChange={onChange}
        />
        <button
          className={css`
            width: 100%;
            margin-top: 5%;
            padding: 10px;
            cursor: pointer;
            border: 1px solid #ccc;
            border-radius: 4px;
            resize: vertical;
            @media (min-width: 800px) {
              width: 20%;
            }
          `}
          type="submit"
        >
          Add
        </button>
      </form>
    </Modal>
  );
};

export default Collection;
