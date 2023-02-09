import { useEffect } from "react";
import {
  getComponentStack, getCurrent, Router
} from 'react-chrome-extension-router';
import "./index.css";
import { One } from "./One";


export default function App() {
  useEffect(() => {
    const { component, props } = getCurrent();
    console.log(
      component
        ? `There is a component on the stack! ${component} with ${props}`
        : `The current stack is empty so Router's direct children will be rendered`
    );
    const components = getComponentStack();
    console.log(`The stack has ${components.length} components on the stack`);
  });
  return (
    <Router>
      <One />
    </Router>
  );
}


