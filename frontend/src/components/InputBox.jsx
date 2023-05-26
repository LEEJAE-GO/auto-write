import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

export default function InputBox() {
  return (
    <label className="relative block">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <MagnifyingGlassCircleIcon className="h-6 w-6 text-black" />
      </span>
      <input
        className="text-black placeholder:italic placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
        placeholder="원하는 주제로 단편소설을 작성해주세요."
        autoComplete="off"
        type="text"
        name="search"
      />
    </label>
  );
}
