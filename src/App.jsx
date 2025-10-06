import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1 ">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img loading="lazy"
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="rounded-md w-10"
            />
            <q>Developer Does not sleep</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hai, Im Kinggu</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            voluptates atque doloribus corrupti voluptas libero eum eius, fuga
            accusamus fugit iure cupiditate ratione ipsam officiis veritatis
            perspiciatis labore assumenda officia amet. Praesentium impedit modi
            totam quaerat inventore est eaque quisquam iure odit, dolorem eos
            officia voluptates beatae molestias a id!
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i class="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i class="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img loading="lazy"
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
        />
      </div>
      <section className="tentang mt-32 py-20">
        <div className=" xl:w-2/3 w-full mx-auto p-7  bg-zinc-800 rounded-2xl">
          <img loading="lazy"
            src={DataImage.HeroImage}
            alt="hero image"
            className="w-12 rounded-md sm:hidden mb-10"
          />
          <p className="text-base/loose mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ea aut
            adipisci ipsam ipsa perspiciatis ab quidem. Veniam fuga, delectus
            suscipit doloribus tenetur vero, non culpa repudiandae nihil
            veritatis sequi provident sapiente, repellendus porro molestias
            reprehenderit. Quae deleniti nihil animi asperiores in quisquam
            excepturi dolorum laborum harum. In aperiam ducimus illo itaque
            ratione commodi adipisci delectus beatae, dolores fuga totam, velit
            rem natus blanditiis! Laudantium voluptatibus optio at asperiores
            quibusdam!
          </p>
          <div className="flex items-center justify-between">
            <img loading="lazy"
              src={DataImage.HeroImage}
              alt="hero image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* tools */}
        <div className="mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools Yang dipakai</h1>
          <p className="w-2/5 text-base/loose opacity-50">
            berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
            website ataupun design
          </p>
          <div className="toolsbox flex flex-col md:flex-row md:flex-wrap md:justify-center mt-14 gap-4">
            {listTools.map((tool) => (
              <div
                className="group flex p-3 border border-zinc-600 gap-2 hover:bg-zinc-800 rounded-md"
                key={tool.id}
              >
                <img loading="lazy"
                  src={tool.gambar}
                  alt="tools image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 "
                />
                <div className="ml-4">
                  <h4 className="font-bold text-lg">{tool.nama}</h4>
                  <p className="text-base/loose opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center opacity-50">
          berikut adalah proyek yang sudah saya buat
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
              <img loading="lazy" src={proyek.gambar} alt="proyek image" />
              <div>
                <h1 className="text-2xl font-bold my-4 ">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 ">
                  {proyek.tools.map((tool, index) => (
                    <p key={index} className="py-1 px-3 bg-zinc-600 border border-zinc-500 rounded-md font-semibold">{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600" >Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
