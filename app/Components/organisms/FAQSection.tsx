// components/organisms/FAQSection.tsx
import SectionHeader from "../molecules/SectionHeader";
import FAQItem from "../molecules/FAQItem";

const faqs = [
  {
    question: "Does Bahi take a cut of payments?",
    answer: "No — Razorpay's standard processing fee applies; your subscription is flat regardless of collection volume.",
  },
  {
    question: "Can we switch plans as the society grows?",
    answer: "Yes, at any time — your next billing cycle simply reflects the new flat count.",
  },
  {
    question: "Is there a setup fee?",
    answer: "None. Most committees are fully onboarded in under an hour.",
  },
];

export default function FAQSection() {
  return (
    <div className="bg-[#EDE4CC]">
      <div className="max-w-[760px] mx-auto px-6 md:px-8 py-16 md:py-24">
        <SectionHeader eyebrow="A FEW QUESTIONS" title="" size="sm" />
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
}