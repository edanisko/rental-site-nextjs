import Link from "next/link";

const PropertyAddPage = () => {
  return (
    <div>
      <h1 className="text-3xl">Add Property</h1>
      <Link href="/properties">Show Properties</Link>
    </div>
  );
};

export default PropertyAddPage;
