import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const FileNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="File"
      handles={[{ type: "source", position: Position.Right, id: "file" }]}
    >
      <div>
        <span>Upload File:</span>
        <input
          type="file"
          style={{
            marginTop: "5px",
            color: "#e4e4e7",
            fontSize: "11px",
            width: "100%",
          }}
        />
      </div>
    </BaseNode>
  );
};
