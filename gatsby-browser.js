import ReactDOM from "react-dom/client";
import React from "react";


export const replaceHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container)
    root.render(element)
  }
}
export const wrapPageElement = ({ element, props }) => {
  return <>{element}</>
}