import { Question } from "@/data/questionnaireData";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
  return (
    <div className="question-row animate-fade-up">
      <span className="question-number">{question.id}</span>
      <div className="flex-grow">
        <p className="question-text">{question.text}</p>
        {question.note && (
          <p className="text-sm text-muted-foreground mt-1">({question.note})</p>
        )}
        {question.skipLogic && (
          <p className="text-sm text-health-orange mt-1 font-medium">{question.skipLogic}</p>
        )}
        {question.options && (
          <div className="options-container mt-2">
            {question.options.map((option) => (
              <span key={option.value} className="option-badge">
                {option.value}. {option.label}
              </span>
            ))}
          </div>
        )}
        {question.type === "yesno" && !question.options && (
          <div className="options-container mt-2">
            <span className="option-badge">1. جی ہاں</span>
            <span className="option-badge">2. نہیں</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
