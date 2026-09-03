import React, { ReactNode } from "react";

interface WidgetProviderProps {
  children: ReactNode;
}

interface WidgetContextProps {
  key: string;
}

const WidgetContext = React.createContext<WidgetContextProps>({
  key: "",
});

function WidgetProvider(props: WidgetProviderProps) {
  const { children } = props || {};
  return <WidgetContext.Provider value={{ key: "example" }}>{children}</WidgetContext.Provider>;
}

export { WidgetProvider, WidgetContext };
