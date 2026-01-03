import React from "react";
import { CardProps } from "../../types";

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padding = "p-6",
  ...props
}) => {
  return (
    <div
      className={`
        bg-white rounded-lg shadow-md border border-gray-200
        ${padding}
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
