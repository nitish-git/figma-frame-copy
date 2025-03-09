import Link from "next/link";

function Page() {
  return (
    <div className="flex">
      <div className="flex flex-1 flex-col gap-4 items-center justify-center w-full h-full">
        <h1 className="text-3xl font-bold text-center">Figma Frame Copier</h1>
        <div>
          <Link
            href="/v1"
            className="px-4 mx-1 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Go to v1
          </Link>
          <Link
            href="/v2"
            className="px-4 mx-1 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Go to v2
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Page;
