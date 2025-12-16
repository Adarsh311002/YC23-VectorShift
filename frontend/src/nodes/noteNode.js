import { BaseNode } from "./BaseNode";

export const NoteNode = ({ id, data }) => {
  return (
    <BaseNode id={id} data={data} title="Note">
      <div
        style={{
          background: "#fef3c7",
          padding: "8px",
          borderRadius: "4px",
          color: "black",
        }}
      >
        <textarea
          placeholder="Type notes..."
          style={{
            height: "60px",
            width: "100%",
            background: "transparent",
            border: "none",
            color: "black",
            outline: "none",
            resize: "none",
          }}
        />
      </div>
    </BaseNode>
  );
};
