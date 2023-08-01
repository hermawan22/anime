import { css } from "@emotion/css";
import { motion } from "framer-motion";
import Link from "next/link";

const Item = ({ image, title, hover, id }: any) => {
  return (
    <Link
      href={`/details/${id}`}
      className={css`
        text-decoration: none;
      `}
    >
      <motion.div layout>
        {hover !== id ? (
          <img alt="Image" src={image} width={"100%"} height={350} />
        ) : (
          <div
            className={css`
              position: relative;
              color: white;
              @media (min-width: 800px) {
                img {
                  width: 100%;
                  height: 100%;
                  box-shadow: 10px;
                  border-radius: 10px;
                }
              }
            `}
          >
            <img alt="Image" src={image} />
            <motion.div>{title}</motion.div>
          </div>
        )}
      </motion.div>
    </Link>
  );
};

export default Item;
