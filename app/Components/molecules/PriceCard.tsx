import  Eyebrow  from "../atoms/Eyebrow";
import { Button, ButtonVariant } from "../atoms/Button";

type PriceCardProps = {
  eyebrow: string;
  title: string;
  amount: string;
  buttonContent: string;
  subscriptionBenefits: string[];
  featured?: boolean;
};

export default function PriceCard({
  eyebrow,
  title,
  amount,
  buttonContent,
  subscriptionBenefits,
  featured = false,
}: PriceCardProps) {
  const buttonVariant: ButtonVariant = featured ? 'brass' : 'outline';

  return (
    <div className={`p-8 border ${featured ? 'bg-[#16231B] text-[#F5F1E6]' : 'bg-white text-[#16231B]'}`}>
      <div>
        <Eyebrow color={featured ? 'brass' : 'brass'}>{eyebrow}</Eyebrow>
        <h3 className="font-serif text-2xl mt-3">{title}</h3>
        <div className="font-mono text-3xl mt-4">{amount}</div>
      </div>

      <ul className="mt-6 space-y-2 pb-6">
        {subscriptionBenefits.map((benefit) => (
          <li key={benefit} className="border-t pt-2 text-sm">
            {benefit}
          </li>
        ))}
      </ul>

      <Button variant={buttonVariant}>{buttonContent}</Button>
    </div>
  );
}