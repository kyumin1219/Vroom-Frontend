import React, { useState } from "react";
import styled from 'styled-components/native';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Logo from "../../assets/logo.svg";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

const ImageContainer = styled.View`
    font-size: 26px;
    align-items: center;
    font-weight: 600;
`;

const InputContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const EmailContainer = styled.View`
    width: 100%;
    margin-left: 15%;
    margin-top: 20%;
    margin-bottom: 15%;
    align-items: left;
`;

const PasswordContainer = styled.View`
    width: 100%;
    margin-left: 15%;
    margin-bottom: 10%;
    align-items: left;
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
    font-family: 'Noto Sans KR';
    text-align: left;
`;

const ButtonContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CustomButton = styled.TouchableOpacity`
    background-color: #82c96d;
    align-items: center;
    justify-content: center;
    width: 290px;
    height: 50px;
    border-radius: 20px;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`;

const SignUpScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
      
    const onChangeEmail = (text: string) => setEmail(text);
    const onChangePassword = (text: string) => setPassword(text);
      
    const signUp = () => {
        if (email === '' || password === '') {
        Alert.alert('이메일과 비밀번호를 입력해 주세요.');
        } 
        else {
            Alert.alert('회원가입 성공!');
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
              onChangeText={onChangeEmail}
              value={email}
              autoCapitalize="none"
            />
            <Label>아이디</Label>
            <Input
              placeholder="아이디를 입력하세요"
              onChangeText={onChangeEmail}
              value={id}
              autoCapitalize="none"
            />
          </EmailContainer>
          <PasswordContainer>
            <Label>비밀번호</Label>
            <Input
              placeholder="비밀번호를 입력하세요"
              onChangeText={onChangePassword}
              value={password}
              secureTextEntry
              autoCapitalize="none"
            />
            <Label>비밀번호 확인</Label>
            <Input
              placeholder="비밀번호를 입력하세요"
              onChangeText={onChangePassword}
              value={passwordCheck}
              secureTextEntry
              autoCapitalize="none"
            />
          </PasswordContainer>
        </InputContainer>
        <ButtonContainer>
          <CustomButton onPress={signUp}>
            <ButtonText>완료</ButtonText>
          </CustomButton>
        </ButtonContainer>
      </Container>
    );
  };

export default SignUpScreen;