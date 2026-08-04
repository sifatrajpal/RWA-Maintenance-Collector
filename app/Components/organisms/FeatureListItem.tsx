// components/molecules/FeatureListItem.tsx  (updated with a boxed layout prop)
type FeatureListItemProps = {
  title: string;
  description: string;
  boxed?: boolean;
};

export default function FeatureListItem({ title, description, boxed = false }: FeatureListItemProps) {
  if (boxed) {
    return (
      <div className="bg-[#F5F1E6] border border-[#DED2AE] p-7">
        <h3 className="text-lg mb-2.5">{title}</h3>
        <p className="text-sm leading-relaxed opacity-75">{description}</p>
      </div>
    );
  }

  return (
    <li className="flex gap-3.5">
      <span className="font-mono opacity-40">₹</span>
      <div>
        <strong>{title}</strong>
        <p className="mt-1 text-sm opacity-75">{description}</p>
      </div>
    </li>
  );
}