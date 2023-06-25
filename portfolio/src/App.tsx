import Hero from "./components/Hero";
import Random from "./components/Random";

function App() {
  return (
    <div className="">
      <div className="relative items-start flex flex-col justify-between overflow-hidden border-r border-white/10 bg-[url(./assets/stars.svg)] bg-cover px-28 py-16">    
            {/* Blur */}
            <div className="absolute right-0 bottom-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1 rounded-full bg-palette-primary opacity-75 blur-full" />

            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-4 bg-stripes" />
            <div className="absolute bottom-0 left-2 top-0 w-4 bg-stripes" />
      <Hero />
      <Random />
      </div>
    </div>

  );
}

export default App;
