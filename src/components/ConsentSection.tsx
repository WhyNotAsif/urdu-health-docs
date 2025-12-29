import { consentText } from "@/data/questionnaireData";
import { ScrollText, CheckCircle } from "lucide-react";

const ConsentSection = () => {
  return (
    <div className="section-card">
      <div className="bg-gradient-to-l from-health-blue to-health-blue/80 text-primary-foreground p-4 md:p-6 flex items-center gap-3">
        <ScrollText className="h-8 w-8 shrink-0" />
        <h2 className="text-xl md:text-2xl font-bold">{consentText.title}</h2>
      </div>
      <div className="section-content space-y-4">
        <p className="text-muted-foreground leading-relaxed">{consentText.greeting}</p>
        
        <div className="bg-health-green-light p-4 rounded-lg border border-primary/20">
          <p className="leading-loose whitespace-pre-line text-foreground">
            {consentText.statement}
          </p>
        </div>

        <div className="bg-health-orange-light p-4 rounded-lg border border-accent/20">
          <div className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-1" />
            <p className="text-foreground">{consentText.participation}</p>
          </div>
        </div>

        <div className="bg-secondary p-4 rounded-lg">
          <p className="font-semibold mb-4">{consentText.consent}</p>
          <div className="grid gap-3">
            {consentText.signatureFields.map((field, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-muted-foreground">{field}:</span>
                <span className="flex-grow border-b-2 border-dashed border-border h-6"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentSection;
