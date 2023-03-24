import Link from "next/link";

import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="text-[#D2FF96] flex items-center justify-between p-5">
        <Link href="/" className="flex gap-2">
          <ChevronDoubleLeftIcon className="w-6 h-6 text-[#D2FF96]" />
          Go To Website
        </Link>

        <div className="hidden md:flex gap-2">
          <h1>Do you have any questions or feature requests?</h1>
          <p>contact me</p>
          <span className="font-extrabold">sean@tolbert.me</span>
        </div>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
export default StudioNavbar;
