import highTierTemplate from "../data/highTierTemplate.json";
import RadarChart from "./RadarChart";

export default function HighTierReport({ scores }) {
  const { execution, influence, relationship, strategic } = scores;
  const core = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
  const reportText = highTierTemplate.template
    .replace("{execution}", execution)
    .replace("{influence}", influence)
    .replace("{relationship}", relationship)
    .replace("{strategic}", strategic)
    .replace("{core}", core);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <RadarChart data={[execution, influence, relationship, strategic]} />
      <div className="mt-6 p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-lg whitespace-pre-wrap">
        {reportText}
      </div>
    </div>
  );
}
