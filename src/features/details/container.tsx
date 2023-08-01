"use client";
import { safeGet } from "@/helper";
import { gql, useSuspenseQuery } from "@apollo/client";
import { css } from "@emotion/css";
import Image from "next/image";
import { useState } from "react";
import Collection from "../home/component/collection";
import { found } from "../home/utils";

const query = gql`
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      description
      coverImage {
        large
        medium
        color
      }
      bannerImage
      title {
        english
      }
    }
  }
`;

const AnimeDetails = ({ id }: any) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { data }: any = useSuspenseQuery(query, {
    variables: { id },
  });

  const banner = safeGet(data, "Media.bannerImage");
  const cover = safeGet(data, "Media.coverImage.large");
  const title = safeGet(data, "Media.title.english");
  const description = safeGet(data, "Media.description");

  const showModalCollection = () => {
    setIsOpen(true);
  };

  function closeModalCollection() {
    setIsOpen(false);
  }

  return (
    <>
      <Collection
        data={data.Media}
        closeModal={closeModalCollection}
        modalIsOpen={modalIsOpen}
      />
      <div
        className={css`
          display: flex;
          padding: 0px;
          @media (min-width: 800px) {
            padding: 10vw;
          }

          .banner {
            img {
              height: unset !important;
            }
          }
          .container {
            display: flex;
            position: relative;
            background: #000000;
            padding: 1rem;
            border-radius: 10px;
            top: 20%;
            flex-direction: column;

            @media (min-width: 800px) {
              flex-direction: row;
            }

            .cover {
              margin-right: 5vw;
              img {
                border-radius: 10px;
                margin-bottom: 1vh;
              }
              .collected {
                margin-top: 1vh;
                cursor: pointer;
                background-color: #5c5b5b;
                border: none;
                border-radius: 10px;
                color: white;
                padding: 10px 25px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
              }
              .add-collection {
                margin-top: 1vh;
                cursor: pointer;
                background-color: #4caf50;
                border: none;
                border-radius: 10px;
                color: white;
                padding: 10px 25px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
              }
            }
            .content {
              .title {
                font-size: 1.5em;
                margin-top: 1rem;
                margin-bottom: 1rem;
              }
            }
          }
        `}
      >
        <div className="banner">
          <Image src={banner} alt={title} fill={true} />
        </div>
        <div className="container">
          <div className="cover">
            <Image src={cover} alt={title} width={200} height={200} />

            {found(id) ? (
              <button className="collected">
                Collected
              </button>
            ) : (
              <button onClick={showModalCollection} className="add-collection">
                Add to Collection
              </button>
            )}
          </div>
          <div className="content">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeDetails;
