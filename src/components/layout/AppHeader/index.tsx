import React from "react";
import styled from "styled-components/native";
import { DefaultBox } from "../../../../style/GlobalStyle";
import Camera from "../../../assets/camera.svg"
import Category from "../../../assets/category.svg"
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

const HeaderContainer = styled.View`
    width: 100%;
    height: 40px;
    background: #fff;
`

const AppHeaderBox = styled(DefaultBox)`
    position: relative;
    padding: 0 20px;

`

const AppHeader = () => {
    return(
        <HeaderContainer>
            <AppHeaderBox>

            </AppHeaderBox>
        </HeaderContainer>
    )
}

export default AppHeader