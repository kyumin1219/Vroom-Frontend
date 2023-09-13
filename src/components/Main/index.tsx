import React from "react";
import styled from "styled-components/native";
import AppHeader from "../layout/AppHeader";
import { View, Text } from "react-native";

const MainContainer = styled.View`
  width: 100%;
  height: 100%;
  background: #fff;
`;

const MainScreen: React.FC = () => {
  return (
    <MainContainer>
      <AppHeader />
    </MainContainer>
  );
};

export default MainScreen;
