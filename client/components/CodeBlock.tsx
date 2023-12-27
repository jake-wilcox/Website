import React, { useEffect } from "react";
import Prism from "prismjs";

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({code, language}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="rounded-xl">
      <pre className="rounded-xl">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
export default CodeBlock
