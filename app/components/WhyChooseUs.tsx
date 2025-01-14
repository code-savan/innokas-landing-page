import { Check } from 'lucide-react'

const reasons = [
  { title: 'High-quality products', description: 'We ensure that all our products meet the highest standards of quality.' },
  { title: 'Hygiene and freshness', description: 'Our products are handled with utmost care to maintain hygiene and freshness.' },
  { title: 'Competitive prices', description: 'We offer fair and competitive prices without compromising on quality.' },
  { title: 'Strong distribution network', description: 'Our efficient distribution network ensures timely delivery across Nigeria.' },
  { title: 'Excellent customer service', description: 'We prioritize customer satisfaction with our dedicated support team.' },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="flex items-center justify-center flex-wrap gap-8 justify-items-center">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 md:w-[350px] w-full">
              <div className="flex items-center mb-4">
                <Check className="w-6 h-6 text-[#bada34] mr-2" />
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </div>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
