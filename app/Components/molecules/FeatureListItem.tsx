type FeatureListItemProps = {
  title: string;
  description: string;
};

export default function FeatureListItem({ title, description }: FeatureListItemProps) {
  return (
    <li className="flex gap-2.5 ">

      <div>
        <strong>{title}</strong>
        <p className="mt-1 text-sm opacity-75">{description}</p>
      </div>
    </li>
  );
}