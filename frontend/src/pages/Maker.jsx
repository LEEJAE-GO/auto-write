/* eslint-disable react/no-unescaped-entities */
import InputBox from "../components/InputBox";
import StoryBox from "../components/StoryBox";

export default function Maker() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-16 lg:px-8 lg:max-w-7xl mx-auto">
      <div className="w-full">
        <StoryBox />
        <InputBox />
      </div>
    </section>
  );
}
