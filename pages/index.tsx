import Head from "next/head";
import App from "./layouts/App";

export default function Index() {
  return (
    <App>
      <Head>
        <title>Miro Rauhala</title>
      </Head>

      <main className="grow py-6 overflow-auto">
        <div className="px-4 max-w-2xl mx-auto">
          <h1 className="font-bold text-4xl">Hello</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            eaque tempora dolorum a accusamus consectetur vitae doloremque,
            optio illum provident natus voluptatibus, nisi rerum ullam, tempore
            impedit sapiente sint harum.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            eaque tempora dolorum a accusamus consectetur vitae doloremque,
            optio illum provident natus voluptatibus, nisi rerum ullam, tempore
            impedit sapiente sint harum.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
            eaque tempora dolorum a accusamus consectetur vitae doloremque,
            optio illum provident natus voluptatibus, nisi rerum ullam, tempore
            impedit sapiente sint harum.
          </p>
        </div>

        <div className="px-4 max-w-4xl mx-auto group">
          <div className="w-full h-full aspect-video bg-gray-200 rounded-xl"></div>
          <p className="px-4 pt-2 text-sm text-black transition text-opacity-60 group-hover:text-opacity-90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            harum, itaque optio eveniet culpa sunt temporibus totam atque facere
            porro suscipit et, dolorum hic! Nulla harum a nam eaque quibusdam!
          </p>
        </div>
      </main>
    </App>
  );
}
