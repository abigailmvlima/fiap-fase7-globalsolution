import { ETheme } from "@domain/enum/ETheme";
import { IContextTheme } from "@domain/interfaces/IContextTheme";
import React, { createContext, useState } from "react";

export const ContextTheme = createContext({} as any);

export default ({ children }: any) => {
  const [themeSelected, setThemeSelected] = useState<ETheme>(ETheme.default);

  const sendProps: IContextTheme = {
    theme: themeSelected,
    onChangeTheme: (value: ETheme) => {
      setThemeSelected(value);
    },
  };

  return (
    <ContextTheme.Provider value={sendProps}>
      {children && children}
    </ContextTheme.Provider>
  );
};
