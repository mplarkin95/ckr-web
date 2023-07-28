import ReleaseCard from "@/components/Release/ReleaseCard";
import { getReleases } from "@/data/queries/releases";
import { transformReleasesFull } from "@/data/transformers/release";
import { Release } from "@/types/Release";
import Markdown from "marked-react";

const Index = ({ releases }: { releases: Release[] }) => {
  return (
    <div>
      <h1>Releases</h1>
      {releases.map((release) => (
        <ReleaseCard key={release.id} release={release} />
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
