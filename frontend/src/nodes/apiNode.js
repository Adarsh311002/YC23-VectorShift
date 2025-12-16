import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const APINode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="API"
      handles={[
        { type: "target", position: Position.Left, id: "req" },
        { type: "source", position: Position.Right, id: "res" },
      ]}
    >
      <label>
        Endpoint:
        <input type="text" placeholder="https://api.example.com" />
      </label>
      <label>
        Method:
        <select>
          <option>GET</option>
          <option>POST</option>
        </select>
      </label>
    </BaseNode>
  );
};
