import { useState } from "react";

export default function useVisualMode(initial) {

  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {

    setHistory((prev) =>
      replace
        ? [...prev.slice(0, prev.length - 1), newMode]
        : [...prev, newMode]
    );


    // const newHistory = [...history]

    // if (replace) {
    //   newHistory.pop();
    // }
    
    // newHistory.push(newMode);
    // setHistory(newHistory);
  }

  function back() {
    
    // if (history.length < 2) {
    //   return;
    // } 
    
    // const newHistory = [...history];
    // newHistory.pop();
    // setHistory(newHistory);

    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }

  }

  return {
    mode: history[history.length - 1],
    transition,
    back
  };
}