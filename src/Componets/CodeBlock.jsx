import { useEffect, useState } from "react";
import { getHighlighter } from "shiki-es";

const CodeBlock = ({ code, language }) => {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    async function loadHighlighter() {
      const highlighter = await getHighlighter({ theme: "dark-plus" });
      const html = highlighter.codeToHtml(code, { lang: "javascript" });
      setHighlightedCode(html);
    }

    loadHighlighter();
  }, [code, language]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
      style={{
        overflowX: "auto",
        padding: "10px",
        backgroundColor: "#1E1E1E",
        color: "#D4D4D4",
        fontSize:'12px'
      }}
    />
  );
};

export default CodeBlock;
