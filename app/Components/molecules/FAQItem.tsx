type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="py-6 border-t border-[#DED2AE]">
      <h3 className="font-semibold text-base">{question}</h3>
      <p className="mt-2 text-sm opacity-75">{answer}</p>
    </div>
  );
}