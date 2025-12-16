import { useState, useEffect, useRef } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    const variableRegex = /{{(.*?)}}/g;
    const matches = [...currText.matchAll(variableRegex)];

    const newHandles = matches.map((match) => {
      const variableName = match[1].trim();
      return {
        id: variableName,
        type: "target",
        position: Position.Left,
        style: { top: "auto" },
      };
    });

    newHandles.push({ id: "output", type: "source", position: Position.Right });

    setHandles(newHandles);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <BaseNode id={id} data={data} title="Text" handles={handles}>
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          style={{
            minHeight: "40px",
            resize: "none",
            overflow: "hidden",
            width: "100%",
          }}
        />
      </label>
    </BaseNode>
  );
};
