import { Check, Users, Zap, TrendingUp } from 'lucide-react'

const values = [
  { icon: Check, title: 'Integrity', description: 'Honour all commitments with high standards of honesty and ethical behaviour.' },
  { icon: Users, title: 'Teamwork', description: 'Work as one cohesive team, sharing ideas, skills, and resources.' },
  { icon: Zap, title: 'Quality', description: 'Dedicated to providing an individualized business experience that ensures customer satisfaction.' },
  { icon: TrendingUp, title: 'Growth and Profitability', description: 'Committed to continuous innovation and pursuit of new ideas for profitable growth.' },
]

export default function CoreValues() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {values.map((value, index) => (
            <div key={index} className="text-center border border-slate-300 px-4 h-[250px] flex items-center justify-center">
                <div className='size-fit'>
              <value.icon className="w-12 h-12 mx-auto mb-4 text-slate-400" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600 text-[15px]">{value.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
