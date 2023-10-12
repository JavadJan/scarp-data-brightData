import Search from "@components/Search";
import Slider from "@components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="px-6 flex max-lg:flex-col gap-10 md:px-20 py-24">
        <div className="flex-1 flex flex-col justify-center">
          <p className="small-text">smart shopping start here <Image src='/assets/icons/arrow-right.svg' alt="arrow" width={20} height={20} /></p>

          <h1 className="head-text">unleash power of our <span className="text-primary">wise price</span></h1>

          <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum libero mollitia dolor. Ea aperiam ullam distinctio quod veritatis accusamus consequatur est!</p>

          <Search />
        </div>

        <div className="flex-1 flex items-center justify-center bg-slate-300 h-[670px] w-[600px] mx-auto rounded-[30px] p-4 max-md:w-[95%]">
          <Slider />
        </div>
      </section>
      <section></section>
    </>
  )
}
