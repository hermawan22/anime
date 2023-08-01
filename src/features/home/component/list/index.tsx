import { css } from "@emotion/css";
import { SetStateAction, useState } from "react";
import { safeGet } from "@/helper";
import Item from "./item";

const List = ({ data }: any) => {
  const [hover, setHover] = useState<number | undefined>(0);
  const media = safeGet(data, "Page.media");

  const handleMouseEnter = (id: any | SetStateAction<undefined>) => {
    setHover(id);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 10px 2%;

        @media (min-width: 800px) {
          flex-direction: row;
        }
      `}
    >
      {media &&
        media.map(
          (value: {
            id: number;
            title: { english: string };
            coverImage: { large: string };
          }) => {
            return (
              <div
                className={css`
                  flex: 18%;
                `}
                key={value.id}
                onMouseEnter={(e) => handleMouseEnter(value.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Item
                  id={value.id}
                  hover={hover}
                  title={value.title.english}
                  image={safeGet(value, "coverImage.large") || ""}
                />
              </div>
            );
          }
        )}
    </div>
  );
};

export default List;
