import { Section } from "@/data/questionnaireData";
import QuestionCard from "./QuestionCard";

interface SectionCardProps {
  section: Section;
}

const SectionCard = ({ section }: SectionCardProps) => {
  return (
    <div className="section-card">
      <div className="section-header">
        <h3 className="text-lg md:text-xl font-bold">{section.title}</h3>
        {section.description && (
          <p className="text-sm mt-2 opacity-90">{section.description}</p>
        )}
      </div>
      <div className="section-content">
        {section.questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default SectionCard;
