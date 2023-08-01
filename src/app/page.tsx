"use client";

import { Suspense } from "react";
import Home from "@/features/home/container";
import Loader from "@/components/loader";
import MatchMediaWrapper from "@/helper/matchMediaWrapper";

const HomePage = () => {
  return (
    <Suspense
      fallback={
        <MatchMediaWrapper
          desktopContent={
            <Loader viewBox="0 0 400 400">
              <rect x="0" y="0" rx="3" ry="3" width="75" height="100" />
              <rect x="80" y="0" rx="3" ry="3" width="75" height="100" />
              <rect x="160" y="0" rx="3" ry="3" width="75" height="100" />
              <rect x="240" y="0" rx="3" ry="3" width="75" height="100" />
              <rect x="320" y="0" rx="3" ry="3" width="75" height="100" />
              <rect x="0" y="110" rx="3" ry="3" width="75" height="100" />
              <rect x="80" y="110" rx="3" ry="3" width="75" height="100" />
              <rect x="160" y="110" rx="3" ry="3" width="75" height="100" />
              <rect x="240" y="110" rx="3" ry="3" width="75" height="100" />
              <rect x="320" y="110" rx="3" ry="3" width="75" height="100" />
            </Loader>
          }
          mobileContent={
            <Loader viewBox="0 0 400 1000">
              <rect x="0" y="0" rx="3" ry="3" width="400" height="400" />
              <rect x="0" y="410" rx="3" ry="3" width="400" height="400" />
              <rect x="0" y="820" rx="3" ry="3" width="400" height="400" />
            </Loader>
          }
        />
      }
    >
      <Home />
    </Suspense>
  );
};

export default HomePage;
