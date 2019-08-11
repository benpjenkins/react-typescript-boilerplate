import React from "react";

interface IFooProps {
  name: string;
}

const foo: React.FC<IFooProps> = ({ name }) => <h1>Hello {name}!</h1>;

export default foo;
