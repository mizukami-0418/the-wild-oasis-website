"use client";

import { useState } from "react";

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? children
    : children.split("、").slice(0, 5).join(" ") + "...";

  return (
    <span style={{ whiteSpace: "pre-wrap" }}>
      {displayText}{" "}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "表示を少なく" : "続きを読む"}
      </button>
    </span>
  );
}

export default TextExpander;
