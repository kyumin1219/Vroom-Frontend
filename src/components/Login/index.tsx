import React, { useState } from "react";
import styled from "styled-components/native";
import Logo from "../../../assets/Logo.svg";
import { View, Text, TextInput, Button, Alert } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LoginButton = styled.Button``;

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
      <Text>로그인 화면</Text>
      <Input
        placeholder="아이디"
        onChangeText={onChangeId}
        value={id}
        autoCapitalize="none"
      />
      <Input
        placeholder="비밀번호"
        onChangeText={onChangePw}
        value={pw}
        secureTextEntry
        autoCapitalize="none"
      />
      <LoginButton title="로그인" onPress={login} />
    </Container>
  );
};

export default LoginScreen;
