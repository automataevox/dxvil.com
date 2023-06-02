import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export default function AccordionRenderer({ settings }: any) {
  return (
    <Accordion type="single" collapsible className="w-full">

        <AccordionItem value="item-1" key={settings.title}>
          <AccordionTrigger>
            {settings.title}
          </AccordionTrigger>
          <AccordionContent>
            {settings.content}
          </AccordionContent>
        </AccordionItem>

    </Accordion>
  );
}
