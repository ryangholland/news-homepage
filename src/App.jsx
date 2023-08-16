import "./App.css";

function App() {
  return (
    <main className="bg-offWhite p-6">
      <section className="flex items-center justify-between">
        <h1 className="text-5xl font-bold font-serif">W.</h1>
        <img src="/icon-menu.svg" alt="Menu" />
      </section>

      <section className="my-6 grid gap-4">
        <img src="/image-web-3-mobile.jpg" alt="" />

        <h1 className="text-4xl font-extrabold">
          The Bright Future of Web 3.0?
        </h1>
        <p className="text-darkGrayishBlue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="bg-softRed text-offWhite font-bold justify-self-start py-4 px-8 uppercase tracking-[.35em] text-xs">
          Read more
        </button>

        <div className="bg-veryDarkBlue text-offWhite p-5 my-6 grid gap-5">
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

      <section>
        <div className="flex">
          <img src="/image-retro-pcs.jpg" alt="Retro PCs" />
          <div>
            <h2>01</h2>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
