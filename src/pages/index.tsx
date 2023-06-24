import Link from "next/link";

const Index = () => {
  const foo = [...Array(1000)].map((_, i) => <div key={i}>{i}</div>);
  return <div className="flex flex-col">{foo.map((entry) => entry)}</div>;
};

export default Index;
