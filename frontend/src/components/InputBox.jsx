import { useState } from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { getTestAPI } from "../api/service";

export default function InputBox() {
  const [inputValue, setInputValue] = useState("");

  const callApi = async () => {
    const data = await getTestAPI(inputValue);
    console.log(data);
    // await getShortStory();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyUp = async (event) => {
    if (event.key === "Enter") {
      await callApi();
    }
  };

  const handleClick = async () => {
    await callApi();
  };

  return (
    <div className="py-2">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span
          className="absolute inset-y-0 left-0 flex items-center pl-2"
          onClick={handleClick}
        >
          <MagnifyingGlassCircleIcon className="h-6 w-6 text-black" />
        </span>
        <input
          className="text-black placeholder:italic placeholder:text-slate-600 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
          placeholder="원하는 주제로 단편소설을 작성해주세요."
          autoComplete="off"
          type="text"
          name="search"
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
        />
      </label>
    </div>
  );
}
