import AnimeDetails from "@/features/details/container";

const AnimeDetailsPage = ({ params }: any) => {
  return <AnimeDetails id={params.id} />
}

export default AnimeDetailsPage;