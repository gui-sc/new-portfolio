import { useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LanguageToggle = () => {
  const [language, setLanguage] = useState<"EN" | "PT">("EN");

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "EN" ? "PT" : "EN")}
      className="fixed top-4 right-4 text-gray-300 hover:text-white"
    >
      <Globe className="h-4 w-4 mr-2" />
      {language}
    </Button>
  );
};