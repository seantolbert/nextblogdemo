import Image from "next/image";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 items-center justify-between px-10 py-5 font-bold">
      <div>
        <h1 className="text-7xl">Tolbert & Co</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#f7ab0a]">
            Every Developers
          </span>{" "}
          Favorite Blog for Tech News
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New Product Features | The Latest In Technology | The Weekly Debugging
        Nightmares & More?
      </p>
    </div>
  );
}
export default Banner;
