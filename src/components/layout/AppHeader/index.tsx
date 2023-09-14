import React from "react";
import styled from "styled-components/native";
import { DefaultBox } from "../../../../style/GlobalStyle";
import Camera from "../../../assets/camera.svg";
import Search from "../../../assets/search.svg";
import Category from "../../../assets/category.svg";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HeaderContainer = styled.View`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: #fff;
`;

const AppHeaderBox = styled(DefaultBox)`
  position: relative;
  padding: 0 30px;
  margin-top: 15%;
  background: #fff;
`;

const HeaderButtonBox = styled.View`
  position: absolute;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const AppHeaderButton = styled.View`
  width: 30px;
  height: 30px;
  margin-left: 25px;
  margin-right: 65%;
`;

const CategoryHeaderButton = styled.View`
  width: 30px;
  height: 30px;
  margin-left: 15px;
`;

const AppHeader = () => {
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      <AppHeaderBox>
        <HeaderButtonBox>
          <AppHeaderButton
            onPress={() => navigation.navigate("camera" as never)}
          >
            <Camera width={30} height={30} />
          </AppHeaderButton>
          <CategoryHeaderButton
            onPress={() => navigation.navigate("search" as never)}
          >
            <Search width={30} height={30} />
          </CategoryHeaderButton>
          <CategoryHeaderButton
            onPress={() => navigation.navigate("category" as never)}
          >
            <Category width={30} height={30} />
          </CategoryHeaderButton>
        </HeaderButtonBox>
      </AppHeaderBox>
    </HeaderContainer>
  );
};

export default AppHeader;
