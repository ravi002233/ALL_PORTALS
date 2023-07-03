import React from "react";
import { ExtensionProvider } from "@looker/extension-sdk-react";
import Landing from "./Landing";

export const App = ({}) => {
  return (
    <ExtensionProvider>
      <Landing/>
    </ExtensionProvider>
  );
};
