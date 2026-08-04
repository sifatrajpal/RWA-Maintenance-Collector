import { Button } from "../atoms/Button";

type CTABannerProps = {
  title: string;
  buttonText: string;
  onClick?: () => void;
};

export default function CTABanner({ title, buttonText, onClick }: CTABannerProps) {
  return (
    <div className="bg-[#16231B] text-[#F5F1E6] text-center py-24 px-6">
      <h2 className="font-serif text-[38px] leading-tight max-w-2xl mx-auto">
        {title}
      </h2>
      <div className="mt-8 flex justify-center">
        <Button variant="brass" onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}