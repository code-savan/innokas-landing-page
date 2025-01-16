import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Vision() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Vision, Mission, and Objectives</h2>
        <Accordion type="single" collapsible className="w-full mx-auto">
          <AccordionItem value="vision">
            <AccordionTrigger className="text-[22px] md:text-[24px] font-semibold">Vision</AccordionTrigger>
            <AccordionContent className="text-[18px]">
            -As a major stakeholder in the Nigeria business our Vision is to be the most preferred
choice and trusted company that create values, provides and distribute quality, safe and
hygiene product and service to our esteem customer. <br /><br />
- To be the regional leader in this industry by defining excellence and building
unmatched customer loyalty while offering complete solutions to clients‟ needs
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="mission">
            <AccordionTrigger className="text-[22px] md:text-[24px] font-semibold">Mission</AccordionTrigger>
            <AccordionContent className="text-[18px]">
            -The mission and mandate of offering best quality and hygiene consumable goods to our
enormous esteemed customers.<br /><br />
- Committed to provide a stress-free business experience with superior services that
caters for our customers‟ individual and/or corporate needs.<br /><br />
- Always conveying the “Constant and Never-Ending Improvement‟ spirit mixed with
passion for excellence and exceeds client expectations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="objectives">
            <AccordionTrigger className="text-[22px] md:text-[24px] font-semibold">Objectives</AccordionTrigger>
            <AccordionContent className="text-[18px]">
              <ul className="list-disc pl-5 space-y-3">
                <li>Adopt a specific and clear policy in various scopes with high growth rates and
                limited risks.</li>
                <li>Acquire investments with good internal return rates that suit the expectations of
                the company by establish companies with clear, applicable and separable working
                plans.</li>
                <li>Provide path to continuous development in the scope of its activities by studies
                and research.</li>
                <li>Fulfil our Corporate Social Responsibility (CSR) by being an economic, intellectual
                and social asset to each country and community where we do business.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
