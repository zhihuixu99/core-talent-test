import { useState } from "react";
import questions from "../data/questions.json";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import BasicReport from "../components/BasicReport";
import HighTierReport from "../components/HighTierReport";

export default function TestPage({ productType, code }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const totalQuestions = questions.length;
  const [step, setStep] = useState("test"); // test | basicReport | highTierReport

  const handleAnswer = (idx) => {
    const newAnswers = [...answers, idx];
    setAnswers(newAnswers);
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex(currentIndex + 1);
    } else {
      if (productType === "normal") setStep("basicReport");
      else setStep("highTierReport");
    }
  };

  const calculateScores = (answers) => {
    const dims = { execution:0, influence:0, relationship:0, strategic:0 };
    answers.forEach((a,i)=>{
      const dim = questions[i].dimension;
      const score = 5 - a; // 选项顺序越靠前分越高
      if(dim==="执行力") dims.execution += score;
      else if(dim==="影响力") dims.influence += score;
      else if(dim==="关系建立") dims.relationship += score;
      else if(dim==="战略思维") dims.strategic += score;
    });
    // 归一化到1-5
    Object.keys(dims).forEach(k=>dims[k]=(dims[k]/(totalQuestions/4)).toFixed(1));
    return dims;
  };

  const scores = calculateScores(answers);

  if(step==="basicReport") return <BasicReport scores={scores} />;
  if(step==="highTierReport") return <HighTierReport scores={scores} />;

  return (
    <div>
      <ProgressBar currentIndex={currentIndex} total={totalQuestions} />
      <QuestionCard question={questions[currentIndex]} onAnswer={handleAnswer} />
    </div>
  );
}
