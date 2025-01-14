import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Who Are We?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Innokas Nigeria Limited (INL) is a foremost indigenous and commercialized company
              located at the business heart of Lagos state Nigeria. We specialize in the import
              and distribution of fresh fruits, frozen foods, and fishery products.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              As a limited Liability Company incorporated in 2013, we are approved and licensed
              by the Federal Government of Nigeria as a major dealer in importation and exportation
              of all general supplies of goods and merchandise service across the nation.
            </p>
            <Link href={"#contact"}>
            <Button className="bg-[#bada34] hover:bg-[#a5c22f] text-white">Get in Touch</Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg"
              alt="Innokas Nigeria Limited"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
