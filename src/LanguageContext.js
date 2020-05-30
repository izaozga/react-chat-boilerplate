import React from "react";

export const LanguageContext = React.createContext({
  language: "pl",
  changeLanguage: () => {},
});
