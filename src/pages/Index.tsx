import Header from "@/components/Header";
import ConsentSection from "@/components/ConsentSection";
import ModuleCard from "@/components/ModuleCard";
import { modules } from "@/data/questionnaireData";
import { FileText, Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-bl from-primary via-primary/90 to-primary/80 text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center bg-primary-foreground/20 p-4 rounded-full mb-6">
            <FileText className="h-12 w-12" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            صحت سہولت تشخیصی سوالنامہ
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-2">
            ورژن 3.1
          </p>
          <p className="text-base md:text-lg opacity-80">
            امید نو (نئی امید) پروجیکٹ - آغا خان یونیورسٹی
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm opacity-80">
            <span>📋 45 صفحات</span>
            <span>📊 11 ماڈیولز</span>
            <span>✅ مکمل اردو ترجمہ</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <ConsentSection />
        
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">امید نو پروجیکٹ</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            آغا خان یونیورسٹی، کراچی، پاکستان
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> رابطہ نمبر
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> ای میل
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Developed by:{" "}
            <a 
              href="https://github.com/WhyNotAsif/urdu-health-docs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              WhyNotAsif
            </a>
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © 2025 تمام حقوق محفوظ ہیں
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
