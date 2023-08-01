export const dynamic = "force-dynamic";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import List from "./component/list";
import { SetStateAction, useState } from "react";
import Pagination from "rc-pagination";
import { css } from "@emotion/css";

const query = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media {
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
  }
`;

const Home = () => {
  const perPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { data }: any = useSuspenseQuery(query, {
    variables: { page: currentPage, perPage },
  });

  const onPageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <>
      <List data={data} />
      <div
        className={css`
          text-align: center;
        `}
      >
        <Pagination
          style={{ marginTop: "5vh", width: "100%" }}
          current={data.Page.pageInfo.currentPage}
          pageSize={perPage}
          showSizeChanger={true}
          total={Math.ceil(data.Page.pageInfo.total / perPage)}
          onChange={onPageChange}
        />
      </div>
    </>
  );
};

export default Home;
