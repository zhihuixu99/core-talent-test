import { motion, AnimatePresence } from "framer-motion";

export default function QuestionCard({ question, onAnswer }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={question.id}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="backdrop-blur-md bg-white/30 rounded-xl p-6 shadow-lg w-full max-w-md mx-auto my-8"
      >
        <h2 className="text-2xl font-bold mb-4">{question.text}</h2>
        <div className="flex flex-col gap-4">
          {question.options.map((opt, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onAnswer(idx)}
              className="bg-white/50 rounded-lg p-3 text-left shadow-sm"
            >
              {opt}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
