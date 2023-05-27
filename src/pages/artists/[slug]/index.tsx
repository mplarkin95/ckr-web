import { getArtistBySlug, getArtists } from "@/data/queries/artists";
import { transformArtist } from "@/data/transformers/artist";
import { Artist } from "@/types/Artist";

const IndividualArtist = ({ artist }: { artist: Artist }) => {
  return (
    <div className="w-2/4">
      <marquee behavior="alternate">
        <h1 style={{ fontSize: "80px" }}>{artist.name}</h1>
      </marquee>
    </div>
  );
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await getArtistBySlug(slug);
  const artist = transformArtist(res);
  return {
    props: {
      artist,
    },
  };
}

export async function getStaticPaths() {
  const res = await getArtists();
  const slugs = res.map((artist) => artist.fields.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}

export default IndividualArtist;
