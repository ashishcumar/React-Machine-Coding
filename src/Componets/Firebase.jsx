import React, { useEffect, useRef } from "react";
import { useState } from "react";
import CodeBlock from "./CodeBlock";

export default function Firebase() {


  const htmlSnippet = `
import { useEffect, useState } from "react";
import { getHighlighter } from "shikiji";

const CodeBlock = ({ code, language = "html" }) => {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    async function loadHighlighter() {
      const highlighter = await getHighlighter({ themes: ["github-dark"] });
      const html = await highlighter.codeToHtml(code, { lang: language, theme: "github-dark" });
      setHighlightedCode(html);
    }

    loadHighlighter();
  }, [code, language]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
      style={{ overflowX: "auto", padding: "10px", background: "#282c34" }}
    />
  );
};

  `;

  return (
    <div>
      <h2>Code Preview</h2>
      <CodeBlock code={htmlSnippet} language="jsx" />
    </div>
  );
}
