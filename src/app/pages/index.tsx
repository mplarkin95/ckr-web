import { Artist } from "@/types/Artist";

const index: React.FC = () => {
  const artists: Artist[] = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  return (
    <div>
      <h1>Index</h1>
      {artists.map((artist) => (
        <div key={artist.id}>
          <h2>{artist.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default index;
