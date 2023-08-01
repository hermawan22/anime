"use client";

import { css } from "@emotion/css";
import {
  editCollection,
  getCollection,
  removeCollection,
  removeItemCollection,
} from "../home/utils";
import { safeGet } from "@/helper";
import Image from "next/image";
import { useEffect, useState } from "react";

const Collection = () => {
  const [remove, setRemove] = useState(false);
  const [isEdit, setIsEdit] = useState("");
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setRemove(false);
  }, [remove]);

  const handleRemove = (key: string) => {
    removeCollection(key);
    setRemove(true);
  };

  const handleRemoveItemCollection = (key: string, id: number) => {
    removeItemCollection(key, id);
    setRemove(true);
  };

  const onChange = (e: any) => {
    e.preventDefault();
    setInput(e.target.value);
    setError("");
  };

  const handleEdit = (e: any, key: string) => {
    e.preventDefault();
    editCollection(key, input);
    setInput("");
  };

  const renderTitle = (key: string) => {
    if (isEdit === key) {
      return (
        <form className={css`display: flex`} onSubmit={(e) => handleEdit(e, key)}>
          <div
            className={css`
              color: red;
              font-size: 12px;
            `}
          >
            {error}
          </div>
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
            placeholder="Edit collection name"
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
                width: 25%;
              }
            `}
            type="submit"
          >
            Edit
          </button>
        </form>
      );
    }

    return <div>{key}</div>;
  };

  return (
    <div>
      {getCollection() &&
        getCollection().map((name: any) => {
          const key = Object.keys(name)[0];

          return (
            <div
              key={name}
              className={css`
                background: #cccccc;
                padding: 10px;
                margin-bottom: 10px;
                color: black;
                border-radius: 10px;
                .collection-name {
                  display: flex;
                  justify-content: space-between;
                  .title {
                    display: flex;
                    flex: 50%;
                  }
                  .options {
                    display: flex;
                    flex: 50%;
                    justify-content: end;
                    gap: 10px;
                  }
                }
                .collection {
                  display: flex;
                  gap: 10px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                }
              `}
            >
              <div className="collection-name">
                <div className="title">{renderTitle(key)}</div>
                <div className="options">
                  <div onClick={() => handleRemove(key)}>Hapus</div>
                  <div onClick={() => setIsEdit(key)}>Edit</div>
                </div>
              </div>
              <div className="collection">
                {name[key].map((collection: { title: { english: any } }) => {
                  const title = safeGet(collection, "title.english");
                  const cover = safeGet(collection, "coverImage.large");
                  const id = safeGet(collection, "id");
                  return (
                    <>
                      <Image
                        key={title}
                        src={cover}
                        alt={title}
                        width={200}
                        height={200}
                      />
                      <div onClick={() => handleRemoveItemCollection(key, id)}>
                        Hapus
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Collection;
