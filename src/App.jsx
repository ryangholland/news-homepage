import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <main className="bg-offWhite p-6 xl:max-w-[1280px] md:py-16 md:px-10">
      <section className="flex items-center justify-between ">
        <h1 className="text-5xl font-bold font-serif">W.</h1>
        <Navbar />
      </section>

      <section className="flex flex-col my-6 md:grid gap-4 md:grid-cols-3 md:grid-rows-[1fr_200px]">
        <img src="/image-web-3-mobile.jpg" alt="" className="md:hidden" />
        <img
          src="/image-web-3-desktop.jpg"
          alt=""
          className="hidden md:block md:col-span-2 self-stretch"
        />

        <h1 className="text-4xl font-extrabold md:col-start-1 md:self-center w-4/5">
          The Bright Future of Web 3.0?
        </h1>
        <div className="grid gap-4 lg:p-4">
          <p className="text-darkGrayishBlue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-softRed text-offWhite font-bold justify-self-start py-4 px-8 uppercase tracking-[.35em] text-xs md:py-2 md:px-4">
            Read more
          </button>
        </div>

        <div className="bg-veryDarkBlue text-offWhite p-5 my-6 grid gap-5 col-start-3 row-start-1 row-span-2 md:m-0">
          <h2 className="font-bold text-softOrange text-3xl">New</h2>
          <div>
            <h3 className="font-bold text-lg mb-1">
              Hydrogen VS Electric Cars
            </h3>
            <p className="text-grayishBlue text-sm">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <hr className="border-grayishBlue" />
          <div>
            <h3 className="font-bold text-lg mb-1">
              The Downsides of AI Artistry
            </h3>
            <p className="text-grayishBlue text-sm">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr className="border-grayishBlue" />
          <div>
            <h3 className="font-bold text-lg mb-1">Is VC Funding Drying Up?</h3>
            <p className="text-grayishBlue text-sm">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:my-12">
        <div className="flex gap-6">
          <img
            src="/image-retro-pcs.jpg"
            alt="Retro PCs"
            className="w-24 object-cover"
          />
          <div className="grid">
            <h2 className="text-grayishBlue text-3xl font-bold">01</h2>
            <h3 className="font-bold text-lg">Reviving Retro PCs</h3>
            <p className="text-darkGrayishBlue text-sm">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <img
            src="/image-top-laptops.jpg"
            alt="Retro PCs"
            className="w-24 object-cover"
          />
          <div className="grid">
            <h2 className="text-grayishBlue text-3xl font-bold">02</h2>
            <h3 className="font-bold text-lg">Top 10 Laptops of 2022</h3>
            <p className="text-darkGrayishBlue text-sm">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <img
            src="/image-gaming-growth.jpg"
            alt="Retro PCs"
            className="w-24 object-cover"
          />
          <div className="grid">
            <h2 className="text-grayishBlue text-3xl font-bold">03</h2>
            <h3 className="font-bold text-lg">The Growth of Gaming</h3>
            <p className="text-darkGrayishBlue text-sm">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
