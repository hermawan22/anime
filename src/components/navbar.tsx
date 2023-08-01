"use client";
import { css } from "@emotion/css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div
      className={css`
        margin-bottom: 5vh;
        position: relative;
        z-index: 100;
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #333;
          border-radius: 10px;
        }

        li {
          float: left;
        }

        li:last-child {
          border-right: none;
        }

        li a {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }

        li a:hover:not(.active) {
          background-color: #111;
        }

        .active {
          background-color: #04aa6d;
        }

        .right {
          float: right;
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }
      `}
    >
      <ul>
        <li className={pathname === '/' && "active"}>
          <Link href="/">Home</Link>
        </li>
        <li className={pathname === '/collections' && "active"}>
          <Link href="/collections">Collections</Link>
        </li>
        {/* <li className="right">Add bulk collection</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
