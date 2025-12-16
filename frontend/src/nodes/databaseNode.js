import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const DatabaseNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Database"
      handles={[
        { type: "target", position: Position.Left, id: "query" },
        { type: "source", position: Position.Right, id: "result" },
      ]}
    >
      <label>
        DB Name:
        <input type="text" placeholder="postgres_main" />
      </label>
      <label>
        Mode:
        <select>
          <option>Read</option>
          <option>Write</option>
        </select>
      </label>
    </BaseNode>
  );
};
