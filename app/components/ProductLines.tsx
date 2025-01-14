'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BananaIcon as Fruit, Fish, Truck, Wheat } from 'lucide-react'

const products = [
  {
    id: 'fruits',
    title: 'Fruits',
    icon: Fruit,
    description: `
    Under these products line we offer an expertise as a major dealer in Apples of different
varieties, Plum, Grapes, Pear, Kiwi, Citrus, Berries of different varieties Vegetables). Our
mission is to contribute to the growth and success of our clients by helping them create
a market structure
which to transact on the sales, distribution and retail of different kind of fruits and
citrus without any difficulty or hinderances from the Nigeria market as being
structured.
<br /> <br />
The business philosophy is to be a major dealer in the importation and sales of fruits
suitable for individual and household consumption at same time helping individuals and
various household maintain a good and healthy balance by consuming of foods not
detrimental to their health.
    `,
    benefits: ['High quality freshly packed fruits', 'Wide range and varieties to choose from', 'High distribution channel', 'Fresh and highly hygienic', 'Fair and competitive prices']
  },
  {
    id: 'frozen',
    title: 'Frozen Foods',
    icon: Fish,
    description: `
    Under this products line, our mission is to be the major key dealers in the
importation, sales and distribution of Fresh and Dried Fishery product such as (Blue
Whiting, Hake, Horse Mackerel, Mackerel, Sardinella, Sardine, Pellock) and other
Pelage Species. <br />
Under this, our products undergo stringent processing and packaging as stated by
the Standard Organization of Nigeria (SON).
    `,
    benefits: ['The provision of high quality well packaged fresh frozen food all year round.', 'Consistent and large production capacity to meet the teeming demand of our many customers.', 'Availability through penetration into every nook and cranny of the city with our efficient distribution channel.', 'Excellent customer care services']
  },
  {
    id: 'logistics',
    title: 'Logistics',
    icon: Truck,
    description: `Under this product line the mission is to enhance the commercial performance of
our clients, through the application of exceptional logistic experience and expertise
by working in a broad range of sectors, for individuals, small, medium and large
companies. <br />
Innokas Transport aims to become a major player in the logistic sector through its
experienced and committed staff.<br /><br />
Following the fast-growing economy in the Africa region; Nigeria mostly, and the
fact that Nigeria imports more than 85% of goods and equipment consumed locally,
INNOKAS Limited, has set up facilities to help citizens purchase through a network of
partner offices in Nigeria.<br /><br />
Enhancing clients' profitability by improving the management of their purchased
goods and services is achieved through a unique combination of: <br /><br />


<ul class="list-disc pl-4">
<li>Team of outstanding Logistics professionals.</li>
<li>High Level logistics expert.</li>
<li>Experienced in improving logistics performance of companies.</li>
<li>Experience in a broad range of supply market.</li>
<li>Tried and tested innovative logistics methodologies.</li>
</ul >
`,
    services: ['Handling of goods and services from one state to another', 'Inter-State Transportation', 'Experienced logistics professionals']
  },
  {
    id: 'farming',
    title: 'Farming',
    icon: Wheat,
    description: `
    The population is growing exponentially and this means more food and drink is
needed. One of the biggest problems in today’s society is not knowing how we will
feed them tomorrow. To curb this problem for the masses is one of the major
reasons Innokas ventured into Agriculture. In the face of rapid population growth,
the science of agriculture has evolved beyond recognition. Our recently acquired Two
Hundred Hectares (200) of Lands recently acquired situate at Okpeaha Farm Land
Opoji, Esan Central Local Government Area, Edo State. <br /><br />


<br /><br />
As a complex carb, rice is the primary source of energy for over half of the world's
people. Depending on the strain of rice, it can contain decent amounts of fibre, protein,
vitamin B, iron and manganese. This means it can play a vital role against malnutrition.
Rice is the most important human food crop in the world, directly feeding more people
than any other crop. In 2012, nearly half of world's population – more than 3 billion
people – relied on rice every day. Rice farming will boost the economic status of Nigeria
because agriculture is a branch of the economy that provides employment for about 30
per cent of the population as of 2014. Nigeria is Africa’s largest rise consumer. <br /><br />
Animal rearing is important for humans as they attain a wide range of food products
having high nutrient values. They meet the commercial requirements of high demand for
food such as dairy needs from cows, goats, and buffaloes. They are called milch animals
as they provide us milk which is full of protein and other vitamins and minerals. The
importance of animal husbandry further extends to another set of animals that are
important to humans for eggs and meat such as hens, ducks, goose, goat, fish, etc. They
are also bred for meat which is rich in protein, iron, fats, vitamin B12 and Zinc. All of
these nutrients are essential to enhance metabolic rate, promote fullness, and reduce
hunger. Marine animals like fish are also believed to keep a person happier and healthier
as these have Omega-3 fatty acids, DHA, and vitamin D. <br /><br />
Producing crops sustainably increases the ability of the system to maintain stable levels
of food production and quality for long term without increasing the demand and
requirements of agricultural chemical inputs to control the system. Nigeria's small farms
produce 80 percent of the total food and 33 percent of this country's land is under
cultivation for this purpose. This is the leading African country in farming because it has
the highest levels of productivity and profitability in this particular sector. <br /><br />
Innokas Nigeria limited wishes to penetrate the market system in these areas to
contribute in global economy of satisfying the wants of her customers and consumers. <br /><br />
INNOKAS NIGERIA LIMITED has as its mandate priority to integrity at all times and
therefore deals with serious and genuine buyers and sellers working worldwide for
the expansion its clients‟ businesses.
    `,
    initiatives: ['Rice Farming', 'Animal Husbandry (Poultry, Dairy, and Aquatic farming (Pisciculture))', 'Crops and seeds productions. (Agronomy)']
  }
]

export default function ProductLines() {
  const [activeTab, setActiveTab] = useState('fruits')

  return (
    <section id="products" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Product Lines</h2>
        <Tabs defaultValue="fruits" className=" mx-auto w-full">
          <TabsList className="flex items-center flex-wrap justify-center gap-4 md:gap-0 w-[80%] mx-auto md:w-full md:mb-8 mb-16">
            {products.map((product) => (
              <TabsTrigger key={product.id} value={product.id} className="md:text-lg font-semibold md:basis-1/4">
                {product.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {products.map((product) => (
            <TabsContent key={product.id} value={product.id}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <product.icon className="w-12 h-12 text-[#bada34] mr-4" />
                  <h3 className="text-2xl font-semibold">{product.title}</h3>
                </div>
                <p dangerouslySetInnerHTML={{ __html: product.description }} className="text-gray-600 mb-6"></p>
                {product.benefits && (
                  <>
                    <h4 className="text-xl font-semibold mb-2">Benefits:</h4>
                    <ul className="list-disc pl-5 mb-6">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-600">{benefit}</li>
                      ))}
                    </ul>
                  </>
                )}
                {product.services && (
                  <>
                    <h4 className="text-xl font-semibold mb-2">Services:</h4>
                    <ul className="list-disc pl-5 mb-6">
                      {product.services.map((service, index) => (
                        <li key={index} className="text-gray-600">{service}</li>
                      ))}
                    </ul>
                  </>
                )}
                {product.initiatives && (
                  <>
                    <h4 className="text-xl font-semibold mb-2">Area of Focus:</h4>
                    <ul className="list-disc pl-5 mb-6">
                      {product.initiatives.map((initiative, index) => (
                        <li key={index} className="text-gray-600">{initiative}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
