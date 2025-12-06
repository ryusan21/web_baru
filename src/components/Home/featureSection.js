import React from "react"
import Fade from "react-reveal/Fade"

// Assets
import HeroImage from "../../images/holographic-background-1.webp"
import Image1 from "../../images/peresmian2.jpg"
import Image2 from "../../images/PERESMIAN.jpeg"
import Image3 from "../../images/AFISTA-2.jpg"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
  <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col gap-3">

    <div className="mt-24 w-full text-center flex flex-col">
      <h2 className="text-black text-3xl text-center font-semibold">
        Sekilas Tentang Al-Fityan School Tangerang

      </h2>

      <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg md:mt-5 md:text-xl mx-auto w-full">
       Sejarah berdirinya Al-Fityan School Tangerang, tak lepas dari nama Sekolah Terpadu Aghniya Ilman. Awal berdirinya, berasal dari tekad kaum Ibu yang tergabung dalam Komunitas Tarbiyah. Sebagaimana tekad yang pernah tercetus, mereka bertekad harus membuat sekolah Islam berkarakter Qur’ani. Misinya cukup mulia ikut membantu menangani berbagai persoalan moral remaja yang umum terjadi di sekolah-sekolah pada saat itu.
      </p>

      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
        {/* <div className="rounded-md">
          <a
            href="tel:#"
            className="transition-all duration-500ms ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
          >
            Call Us Now
          </a>
        </div> */}

        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            href="/about"
            className="transition-all duration-500ms ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
          >
            Selengkapnya
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
       <h2 className="mt-12 text-black text-3xl mt-8 text-center font-semibold">
        Visi & Misi Sekolah
       </h2>
      <Fade bottom cascade>
        <div className="mt-12 text-center w-full flex justify-center bg-white p-8 rounded-xl text-black">
          <div>
            <h1 className="text-xl font-bold">Visi</h1>
            <p>"Membangun generasi beriman yang menguasai ilmu pengetahuan dan menghadapi tantangan zaman."</p>
            <br />
            <h1 className="text-xl font-bold">Misi</h1>
            <p>"Menyiapkan lingkungan pendidikan yang baik dan terintegrasi bagi peserta didik, melalui pengelolaan pendidikan unggul dan kompetensi tenaga pendidik yang sesuai dengan standar mutu pendidikan, untuk mewujudkan misi pembangunan manusia."</p>
          </div>
        </div>
      </Fade>
    </div>
  </div>
</div>


      <Fade bottom cascade>
        <div className="mt-12 text-center w-full flex justify-center bg-white p-8 rounded-xl text-black">
          <div>
            <h1 className="text-xl bg-blue font-bold">Nabi Muhammad ﷺ Bersabda :</h1>
          
        <div className="mt-4 text-center w-full flex justify-center bg-blue p-8 rounded-xl text-black">
          <div>
            <h1 className="text-5xl">وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ</h1>
            <p className="mt-12 text-xl text-center justify-center">Artinya: “Siapa yang menempuh jalan untuk mencari ilmu, maka Allah akan mudahkan baginya jalan</p>
            <p className="mt-1 text-xl text-center justify-center">menuju surga.”</p>
            <h1 className="mt-2 text-xl">(HR. Muslim, no. 2699)</h1>
          </div>
        </div>
          </div>
        </div>
      </Fade>

      {/* <Fade bottom cascade>
          <div className="flex justify-center mt-10">

            <div className="w-4/6 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
              <h2 className="text-white text-4xl">
                MULAI PERJALANAN BELAJAR YANG MENGINSPIRASI
              </h2>
              <p className="mt-10 text-white opacity-70">Al-Fityan memberikan pengalaman pendidikan yang menyenangkan, islami, dan berorientasi pada masa depan. Dengan guru-guru profesional dan program pembinaan karakter, kami membantu siswa tumbuh menjadi pribadi yang percaya diri dan berprestasi.
              </p>
            </div>
          </div>
        </Fade> */}

      {/* <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          OPEN SOURCE
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          A React based framework
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div> */}

      {/* <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          INTEGRATIONS
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Discover and connect
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}

      <Fade bottom cascade>
        <div className="mt-10 flex flex-col w-full text-center">
  <div className="w-full p-0 m-0">
    <h3 className="text-black text-4xl w-full text-center">
      Peresmian Alfityan School Tangerang oleh Bupati Tangerang Bapak Ismet Iskandar Tahun 2006
    </h3>
  </div>
</div>

        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image3}></img>
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
            {/* <h4 className="mt-10 text-black opacity-70 text-xl">Peresmian Alfityan School Tangerang oleh Bupati Tangerang Bapak Ismet Iskandar Tahun 2006</h4> */}
          

          {/* <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Fork</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              PR's welcome
            </h4>
          </div> */}
          {/* <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Stars</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              Give support
            </h4>
          </div> */}
      </Fade>
      {/* 
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
          {" "}
          Integrations
        </h2>
        <h3 className="text-black mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Discover, connect, and configure
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-purple border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FeatureSection
