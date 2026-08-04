// components/organisms/PricingGrid.tsx
import PriceCard from "../molecules/PriceCard";

const plans = [
  {
    eyebrow: "UP TO 50 FLATS",
    title: "Starter",
    amount: "₹999",
    buttonContent: "Get started",
    subscriptionBenefits: [
      "Automated monthly billing",
      "Resident payment portal",
      "UPI & card via Razorpay",
      "Email support",
    ],
    featured: false,
  },
  {
    eyebrow: "UP TO 150 FLATS",
    title: "Growth",
    amount: "₹2,499",
    buttonContent: "Get started",
    subscriptionBenefits: [
      "Everything in Starter",
      "Expense tracker & ledger",
      "Bulk resident import",
      "Priority support",
    ],
    featured: true,

  },
  {
    eyebrow: "150+ FLATS OR FEDERATIONS",
    title: "Enterprise",
    amount: "Custom",
    buttonContent: "Get started",
    subscriptionBenefits: [
      "Everything in Growth",
      "Multiple societies, one login",
      "Dedicated onboarding",
      "SLA-backed support",
    ],
    featured: false,
  },
];

export default function PricingGrid() {
  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-8 pb-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3  gap-1 bg-[#DED2AE] border border-[#DED2AE]">
        {plans.map((plan) => (
          <PriceCard key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
}