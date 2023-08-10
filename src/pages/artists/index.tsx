import { getArtists } from "@/data/queries/artists";
import { transformArtistsFull } from "@/data/transformers/artist";
import { Artist } from "@/types/Artist";
import Link from "next/link";

const AllArtist = ({ artists }: { artists: Artist[] }) => {
  return (
    <div>
      <h1>Artists</h1>
      <div className="flex flex-row w-full flex-wrap justify-between">
        {artists.map((artist) => (
          <Link
            key={artist.id}
            href={`/artists/${artist.slug}`}
            className="lg:w-1/3 w-1/2 flex justify-center mx-auto "
          >
            <div className="flex flex-col justify-center items-center ">
              <img
                src={`https:${artist.profilePicture}`}
                className="rounded-full w-32 h-32 lg:w-64 lg:h-64 object-cover"
              />
              <div className="flex flex-row justify-center py-3 border-t-2 border-b-2 border-gray-500 my-2 mb-8">
                {artist.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await getArtists();
  const artists = transformArtistsFull(res);
  return {
    props: {
      artists,
    },
  };
}

export default AllArtist;
