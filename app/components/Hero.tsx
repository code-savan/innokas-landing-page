import Link from 'next/link'
import Header from './Header'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/Slider'
import Image from 'next/image'

const frozenFoods = [
  'Mackerel', 'Hake', 'Blue Whiting', 'Horse Mackerel', 'Sardinella', 'Sardine', 'Pollock'
]

export default function Hero() {
  return (
    <section id='/' className="relative bg-white md:h-screen flex flex-col pb-4 pt-[150px] md:pt-[130px]">
      <Header />
      <div className=" flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[27px] md:text-[50px] font-bold text-gray-900 mb-4 leading-[35px] md:leading-[60px] w-full md:w-[70%] mx-auto">
            <span className=''>
            Innokas Nigeria Limited:
                </span>  <br /> Pioneering Fresh & Frozen Food Imports in Nigeria
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your trusted partner for high-quality fruits, frozen foods, and agricultural products
          </p>
          <div className=" md:flex items-center justify-center gap-4">
            <Link href={"#about"}>
            <Button className="bg-[#bada34] hover:bg-[#a5c22f] text-white px-8 w-full mb-4 md:mb-0">Who we Are</Button>
            </Link>
            <Link href={"#contact"} className=''>
            <Button variant="outline" className='px-10 w-full'>Get in Touch</Button>
            </Link>
          </div>
      <div>
            <Image src={"/banner.png"} className='mx-auto hidden md:block' alt='banner' width={1000} height={600} />
      </div>
        </div>
      </div>
      {/* <div className="overflow-hidden whitespace-nowrap">
        <div className="sliding-text inline-block">
          {frozenFoods.map((food, index) => (
            <span key={index} className="inline-block mx-4 text-lg font-semibold">{food}</span>
          ))}
        </div>
        <div className="sliding-text inline-block">
          {frozenFoods.map((food, index) => (
            <span key={index} className="inline-block mx-4 text-lg font-semibold">{food}</span>
          ))}
        </div>
      </div> */}
        {/* <Slider /> */}
    </section>
  )
}
