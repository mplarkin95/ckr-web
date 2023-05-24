export default function Page({ params }: { params: { artistId: string } }) {
  const { artistId } = params;
  return <h2>Artistssddssd {artistId}</h2>;
}
