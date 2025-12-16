
import { Handle, Position } from "reactflow";

export const BaseNode = ({ id, data, title, children, handles = [] }) => {
  return (
    <div className="custom-node">
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-${handle.id}-${index}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style || {}} 
          isConnectable={true}
        />
      ))}

      <div className="node-header">
        <span>{title}</span>
      </div>

      <div className="node-body">{children}</div>
    </div>
  );
};
