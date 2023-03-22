import React from "react";

interface ListTextComponentProps {
  text: string;
}

export const ListTextComponent: React.FC<ListTextComponentProps> = ({
  text,
}) => {
  return <div className="text-center text-lg py-40">{text}</div>;
};
