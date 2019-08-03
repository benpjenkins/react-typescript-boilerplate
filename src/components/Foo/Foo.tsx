import React from "react";
import { IFooProps } from "./Foo.interfaces";

const foo = (props: IFooProps) => <h1>Hello {props.name}!</h1>;

export default foo;
