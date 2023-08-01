import Loader from "@/components/loader";
import AnimeDetails from "@/features/details/container";
import { Suspense } from "react";

const AnimeDetailsPage = ({ params }: any) => {
  return (
    <Suspense
      fallback={
        <Loader viewBox="0 0 400 1000">
          <rect x="0" y="0" rx="3" ry="3" width="400" height="100" />
        </Loader>
      }
    >
      <AnimeDetails id={params.id} />
    </Suspense>
  );
};

export default AnimeDetailsPage;
