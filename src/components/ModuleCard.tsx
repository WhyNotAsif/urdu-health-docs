import { Module } from "@/data/questionnaireData";
import SectionCard from "./SectionCard";

interface ModuleCardProps {
  module: Module;
}

const ModuleCard = ({ module }: ModuleCardProps) => {
  return (
    <div id={`module-${module.id}`} className="scroll-mt-20">
      <div className="module-header">
        <h2 className="text-xl md:text-2xl font-bold">{module.title}</h2>
      </div>
      {module.sections.map((section) => (
        <SectionCard key={section.id} section={section} />
      ))}
    </div>
  );
};

export default ModuleCard;
