import styled from "styled-components";

interface IFooDivProps {
  fontSize: string;
}

export const FooDiv = styled.div<IFooDivProps>`
  font-size: ${props => props.fontSize};
  font-weight: bold;
`;
