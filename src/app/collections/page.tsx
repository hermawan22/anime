import Loader from "@/components/loader";
import Collection from "@/features/collections";
import { Suspense } from "react";

const CollectionDetailPage = () => {
  return <Suspense
    fallback={
      <Loader viewBox="0 0 400 1000">
        <rect x="0" y="0" rx="3" ry="3" width="400" height="400" />
      </Loader>
    }
  >
    <Collection />
  </Suspense>;
};

export default CollectionDetailPage;
