import bgImg from "../assets/shopping.jpg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="flex">
        <div className="h-[calc(100vh-96px)] w-1/2 bg-neutral-100 px-40 flex flex-col justify-center">
          <h1 className="text-6xl text-slate-700 pb-5">Random Items</h1>
          <p className="text-slate-500 pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            volutpat dolor vitae sollicitudin dapibus. Sed eleifend congue
            volutpat. Nam varius scelerisque magna id porttitor. Nulla maximus
            mauris et pretium imperdiet. Pellentesque vitae felis sed diam
            elementum facilisis non eget lectus. Nam dignissim turpis a risus
            ultricies varius.
          </p>
          <p className="text-slate-500">
            Quisque at nunc purus. Proin vulputate, risus a aliquet elementum,
            mi enim dapibus metus, et ullamcorper diam turpis nec tortor.
            Aliquam vel elit sit amet dolor pharetra tempor. Maecenas blandit
            bibendum pellentesque. Nulla vehicula convallis tincidunt. Aenean
            nec tempus metus. Maecenas sagittis pellentesque augue, non sagittis
            metus maximus ac.
          </p>
          <Link to="shop" className="text-center p-2">
            <button className="text-slate-700 text-2xl rounded-md border-2 p-2 hover:border-slate-700">
              SHOP NOW
            </button>
          </Link>
        </div>
        <div
          className="bg-cover bg-no-repeat bg-center h-[calc(100vh-96px)] w-1/2"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        ></div>
      </div>
    </>
  );
}
