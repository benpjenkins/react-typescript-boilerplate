import * as React from "react";

interface IFooProps {
  name: string;
}

const foo: React.FC<IFooProps> = () => <h1>Hello {name}!</h1>;

export default foo;
