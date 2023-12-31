import React, { useState } from "react";
import styled from "styled-components/native";
import Logo from "../../assets/logo.svg";
import Insta from "../../assets/insta.svg";
import Facebook from "../../assets/facebook.svg";
import Google from "../../assets/google.svg";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40%;
`;

const EmailContainer = styled.View`
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
  margin-right: 70%;
`;

const ButtonContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35%;
`;

const CustomButton = styled.TouchableOpacity`
  background-color: #82c96d;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 50px;
  border-radius: 30px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const LoginContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const LoginFooter = styled.View`
  display: flex;
  padding: 0;
  margin-left: 30%;
`;

const FooterText = styled.Text`
  color: #5f5f5f;
  font-family: Pretendard Variable;
  font-size: 11px;
  font-weight: 300;
  margin-top: 5px;
`;

const LoginScreen: React.FC = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigation = useNavigation();

  const onChangeId = (text: string) => setId(text);
  const onChangePw = (text: string) => setPw(text);

  const login = () => {
    if (id === "" || pw === "") {
      Alert.alert("아이디와 비밀번호를 입력해 주세요.");
    } else {
      Alert.alert("로그인 성공!");
      navigation.navigate("main" as never);
    }
  };

  return (
    <Container>
      <ImageContainer>
        <Logo width={200} height={40} />
      </ImageContainer>
      <InputContainer>
        <EmailContainer>
          <Label>이메일</Label>
          <Input
            placeholder="이메일을 입력하세요"
            onSubmitEditing={login}
            onChangeText={onChangeId}
            value={id}
            autoCapitalize="none"
          />
        </EmailContainer>
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
      </InputContainer>
      <ButtonContainer>
        <LoginContainer>
          <Insta width={27} height={27} />
          <Facebook width={27} height={27} />
          <Google width={27} height={27} />
        </LoginContainer>
        <CustomButton onPress={login}>
          <ButtonText>로그인</ButtonText>
        </CustomButton>
      </ButtonContainer>
      <LoginFooter>
        <FooterText>
          자주 묻는 질문 | <FooterText>회원가입</FooterText>
        </FooterText>
      </LoginFooter>
    </Container>
  );
};

export default LoginScreen;
