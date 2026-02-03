import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

export default function RadarChart({ data }) {
  const chartData = {
    labels: ["执行力", "影响力", "关系建立", "战略思维"],
    datasets: [
      {
        label: "你的天赋",
        data,
        backgroundColor: "rgba(142,197,252,0.2)",
        borderColor: "#8EC5FC",
        pointBackgroundColor: "#E0C3FC",
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
        ticks: { stepSize: 1 },
      },
    },
  };

  return <Radar data={chartData} options={options} height={250} />;
}
