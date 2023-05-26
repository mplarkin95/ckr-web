import { getAlbumBySlug, getAlbums } from "@/data/queries/albums";
import { transformAlbum } from "@/data/transformers/album";
import { Album } from "@/types/Album";

const Release = ({ album }: { album: Album }) => {
  return (
    <div>
      <h1>{album.name}</h1>
    </div>
  );
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const res = await getAlbumBySlug(slug);
  const album = transformAlbum(res);
  return {
    props: {
      album,
    },
  };
}

export async function getStaticPaths() {
  const res = await getAlbums();
  const slugs = res.map((album) => album.fields.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
export default Release;
