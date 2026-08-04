// components/organisms/ValuesSection.tsx
import SectionHeader from "../molecules/SectionHeader";
import FeatureListItem from "../molecules/FeatureListItem";

const values = [
  { title: "Transparency", description: "Every rupee collected and spent is visible to the people who paid it." },
  { title: "Simplicity", description: "If a secretary needs a manual to use it, we haven't finished building it." },
  { title: "Trust by design", description: "Data isolation between societies is enforced by the database, not a promise in our terms of service." },
];

export default function ValuesSection() {
  return (
    <div className="bg-[#EDE4CC]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-16 md:py-24 ">
        <SectionHeader eyebrow="WHAT WE HOLD TO" title="" size="sm" />
        <div className="gap-7">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px   mt-8 md:mt-9 md:p-12  ">

            {values.map((v) => (
              <div  key={v.title} className="border  border-[#DED2AE] bg-[#f5f1e6] px-12 py-18 gap-3"  >

                <FeatureListItem title={v.title} description={v.description}  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}