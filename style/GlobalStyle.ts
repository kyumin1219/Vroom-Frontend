import styled from "styled-components/native";

export const DefaultBox = styled.View`
  width: 100%;
  height: 100%;
  max-width: 1320px;
  margin: 0 auto;

  @media screen and (max-width: 1320px) {
    max-width: 1000px;
  }

  @media screen and (max-width: 700px) {
    max-width: 660px;
  }
`;
