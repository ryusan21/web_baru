import React from "react"
import Fade from "react-reveal/Fade"
import peresmian2 from "../images/market-day.jpeg";
import peresmianfun from "../images/fun-cooking.jpeg";

const FeaturedBlog = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
          <h2 className="text-black mt-12 justify-center text-center text-4xl opacity-70 font-semibold pl-4">
            Afista News Updates!
          </h2>
          {/* <h3 className="text-black pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            Latest Posts
          </h3> */}
         
          <div className="grid md:grid-cols-2 gap-8">
            <div className="mt-12 blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-2xl font-simibold mb-2">
                Market Day (Putra) SMP Al Fityan School Tangerang
              </h2>
              {/* <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Kolam utama DX Waterpark memiliki ukuran luas dengan kedalaman sekitar 1,5 meter.
                Tempat ini cocok bagi pengunjung yang ingin berenang santai, berolahraga air, atau sekedar
                menikmati kesejukan air jenih di bawah sinar matahari. Kolam ini juga sering digunakan untuk
                latihan renang atau kegiatan komunitas olahraga air.
              </p> */}
              <img className="mb-4 rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center" alt="Image" src={peresmian2}></img>
              <a
                href="/blog/blog-post-1"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                Read more...
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
            <div className="mt-12 blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-2xl font-simibold mb-2">
               Fun Cooking Al Fityan School Tangerang dengan tema “Membuat Sop Buah dan Salad Buah”
              </h2>
              {/* <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
               Fun Cooking Al Fityan School Tangerang dengan tema “Membuat Sop Buah dan Salad Buah”
              </p> */}
              <img className="mb-4 rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center" alt="Image" src={peresmianfun}></img>
              <a
                href="/blog/blog-post-2"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                Read more...
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
        </div>
      </div>
    </Fade>
  )
}

export default FeaturedBlog
