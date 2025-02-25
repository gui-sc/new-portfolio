
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
      className="fixed top-4 right-4 text-gray-300 hover:text-white z-50"
    >
      <Globe className="h-4 w-4 mr-2" />
      {language.toUpperCase()}
    </Button>
  );
};
