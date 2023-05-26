import InputBox from "../components/InputBox";

export default function Maker() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-16 lg:px-8 lg:max-w-7xl mx-auto">
      <div className="w-full">
        <InputBox />
        <div className="selection:bg-fuchsia-300 selection:text-fuchsia-900 text-black py-4">
          <p>
            So I started to walk into the water. I won't lie to you boys, I was
            terrified. But I pressed on, and as I made my way past the breakers
            a strange calm came over me. I don't know if it was divine
            intervention or the kinship of all living things but I tell you
            Jerry at that moment, I <em>was</em> a marine biologist.
          </p>
        </div>
      </div>
    </section>
  );
}
