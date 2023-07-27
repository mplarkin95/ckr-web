import { getReleases } from "@/data/queries/releases";
import { transformReleasesFull } from "@/data/transformers/release";
import { Release } from "@/types/Release";
import Markdown from "marked-react";

const Index = ({ releases }: { releases: Release[] }) => {
  return (
    <div>
      <h1>Releases</h1>
      {releases.map((release) => (
        <>
          <h2 key={release.id}>{release.title}</h2>
          <Markdown>{release.copywrite}</Markdown>
        </>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await getReleases();
  const releases = transformReleasesFull(res);
  return {
    props: {
      releases,
    },
  };
}

export default Index;
