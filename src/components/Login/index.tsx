import React, { useState } from "react";
import styled from "styled-components/native";
import Logo from "../../../assets/Logo.svg";
import { WithLocalSvg } from "react-native-svg";
import { View, Text, TextInput, Button, Alert } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const ImageContainer = styled.View`
  font-size: 26px;
  margin-left: 50px;
  margin-top: 20px;
  font-weight: 600;
`;

const InputContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const PasswordContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  border-width: 0 0 1px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-family: "Noto Sans KR";
`;

const ButtonContainer = styled.View`
  width: 290px;
  height: 50px;
  border-radius: 30px;
`;

const LoginButton = styled.Button`
  background-color: #82c96d;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const LoginScreen: React.FC = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChangeId = (text: string) => setId(text);
  const onChangePw = (text: string) => setPw(text);

  const login = () => {
    if (id === "" || pw === "") {
      Alert.alert("아이디와 비밀번호를 입력해 주세요.");
    } else {
      Alert.alert("로그인 성공!");
    }
  };

  return (
    <Container>
      <ImageContainer>
        <WithLocalSvg width={200} height={40} asset={Logo} />
      </ImageContainer>
      <InputContainer>
        <Label>이메일</Label>
        <Input
          placeholder="이메일을 입력하세요"
          onSubmitEditing={login}
          onChangeText={onChangeId}
          value={id}
          autoCapitalize="none"
        />
      </InputContainer>
      <PasswordContainer>
        <Label>비밀번호</Label>
        <Input
          placeholder="비밀번호를 입력하세요"
          onChangeText={onChangePw}
          value={pw}
          secureTextEntry
          autoCapitalize="none"
        />
      </PasswordContainer>
      <ButtonContainer>
        <LoginButton title="로그인" onPress={login}>
          <ButtonText>로그인</ButtonText>
        </LoginButton>
      </ButtonContainer>
    </Container>
  );
};

export default LoginScreen;
