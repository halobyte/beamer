import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@beamer/ui/components/accordion";

const qnas = [
  {
    q: "What is Beamer?",
    a: "Beamer is an easy-to-use email campaign management tool designed for individuals, small businesses, and marketing teams. It helps you send bulk emails efficiently and reliably using Amazon SES on the backend.",
  },
  {
    q: " Do I need technical knowledge to use Beamer",
    a: "No! Beamer is designed for everyone—from seasoned marketers to complete beginners. You don’t need to know anything about email servers or coding. Just sign up, design your campaign, and hit send.",
  },
  {
    q: "Is there a limit to how many emails I can send?",
    a: "Email sending limits depend on your subscription tier and SES usage quotas. Beamer transparently communicates your available quota and helps you stay within limits. For high-volume needs, we help you scale easily.",
  },
  {
    q: "Can I track email opens and clicks?",
    a: "Yes. Beamer offers basic analytics like open rates, click-through rates, and bounce tracking, so you can measure your campaign's performance.",
  },
  {
    q: "Does Beamer support email templates?",
    a: "Yes. Beamer comes with pre-built templates you can customize, or you can create and save your own designs. An AI powered drag-and-drop editor makes creating and editing high-quality emails easy for everyone.",
  },
  {
    q: "How do I manage my contact lists?",
    a: "Beamer lets you import CSV files, segment audiences, and manage unsubscribes automatically. You can tag, group, and organize your contacts however you like.",
  },
] as const;

export default function FAQAccordions() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-10/12 sm:w-9/12 md:w-[600px]"
    >
      {qnas.map((qna, i) => (
        <AccordionItem key={i} value={`${i}`}>
          <AccordionTrigger className="text-base">{qna.q}</AccordionTrigger>
          <AccordionContent>{qna.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
