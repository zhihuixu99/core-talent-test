import RadarChart from "./RadarChart";

export default function BasicReport({ scores }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <RadarChart data={[scores.execution, scores.influence, scores.relationship, scores.strategic]} />
      <div className="mt-6 p-4 bg-white/30 backdrop-blur-md rounded-xl shadow-lg">
        <h3 className="font-bold mb-2">核心天赋亮点</h3>
        <p>执行力：{scores.execution}分，影响力：{scores.influence}分，关系建立：{scores.relationship}分，战略思维：{scores.strategic}分。</p>
      </div>
    </div>
  );
}
