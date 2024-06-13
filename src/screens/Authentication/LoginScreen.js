import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { AppContainer, PositionedImage, Row } from '../../components/AppContainers'
import { AppColors } from '../../utils/Pallete'
import LeadingButtonWidget from './widgets/LeadingButtonWidget'
import { AppAssets } from '../../../assets/AppAssets'
import { BodyLarge, BodyMedium, Link, TitleBlack } from '../../components/AppFonts'
import AppInput from '../../components/AppInput'
import AppButton from '../../components/AppButton'
import AppSquare from '../../components/AppNativeShapes/AppSquare'
import { StackActions } from '@react-navigation/native'
import DualTextWithShadow2 from '../../components/AppFonts'
import { Text } from 'react-native'
import ToastMessage from '../../components/AppToastMessage'

import api from '../../services/ApiService'
import { PostLoginPath } from '../../services/ApiService'
import { AppNavigation, AppRoutesKeys } from '../../utils/AppRoutes/AppRoutesUtils'
import { AppStorage, AppStorageKeys } from '../../utils/AppStorage'
import { tokenDecode } from '../../services/TokenService'

const LeadingBox = styled.View`
position: absolute;
top: 8%;
left: 8%;
`
const BoxTitle = styled.View`
  padding-left: 24px;
`

const BoxInput = styled.View`
width: 100%;
margin-top: 34px;
gap: 25px;
`

const LinkBox = styled.View`
  gap: 8px;
`

const StrokeBottom = styled.View`
width: 180px;
border: black;
`

const BoxButton = styled.View`
padding-top: 22px;
width: 100%;
gap: 25px;
`

export default function LoginScreen({ navigation }) {
  const [mail, setMail] = useState('enzo.quarelo@gmail.com');
  const [password, setPassword] = useState('errado');
  const [isLoading, setIsLoading] = useState(false)

  const [typeToast, setTypeToast] = useState('error');
  const [titleToast, setTitleToast] = useState('Email ou Senha inválidos');
  const [descriptionToast, setDescriptionToast] = useState('Verifique os seus dados ai meu mano!');

  const toastRef = useRef(null);

  const showToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  }


  async function Login() {
    if (mail.trim() === '' || password.trim() === '') {
      setTypeToast('warning');
      setTitleToast('Preencha os Campos');
      setDescriptionToast('Esqueceu de algo ai meu chapa!');
      showToast();
      setIsLoading(false);
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(mail)) {
      setTypeToast('error');
      setTitleToast('Email Inválido');
      setDescriptionToast('Por favor, insira um email válido.');
      showToast();
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const response = await api.post(`${PostLoginPath}`, {
        email: mail,
        password: password
      });

      if (response.status === 200) {
        const data = response.data;
        await AppStorage.write(AppStorageKeys.token, data.token);
        const userData = await tokenDecode();
        AppNavigation.push(navigation, AppRoutesKeys.tabNavigator, { userData: userData });
      }
      setIsLoading(false);
    } catch(error) {
      setIsLoading(false);
      showToast();
    }
  }

  return (
    <AppContainer backgroundColor={AppColors.background}>
      <PositionedImage position={'absolute'} left={0} top={0} source={AppAssets.greenTriangle} />
      <PositionedImage position={'absolute'} left={81} top={7} source={AppAssets.dotPattern} />
      <PositionedImage position={'absolute'} left={81} top={82} source={AppAssets.dotStar} />
      <AppSquare width={350} height={150} rotate={25} backgroundColor={AppColors.blue} top={85} left={-40} />

      <LeadingBox>
        <LeadingButtonWidget navigation={navigation} />
      </LeadingBox>

      <ToastMessage
        ref={toastRef}
        type={typeToast}
        title={titleToast}
        description={descriptionToast}
      />

      <Row width={"100%"} alignItems={'center'} justifyContent={'start'}>
        <PositionedImage source={AppAssets.eightPointYellowStarSmall} />
        <BoxTitle>
          <TitleBlack size={32}>LOGIN</TitleBlack>
          <BodyMedium color={AppColors.black}>Já é dos nossos? Se loga aí!</BodyMedium>
        </BoxTitle>
      </Row>

      <BoxInput>
        <AppInput
          label={'Email'}
          textValue={mail}
          onChangeText={(txt) => setMail(txt)}
        />
        <LinkBox>
          <AppInput
            label={'Senha'}
            textValue={password}
            isObscureText
            onChangeText={(txt) => setPassword(txt)}
          />
          <Link color={AppColors.blue}
            onPress={() => {
              const pushAction = StackActions.push(AppRoutesKeys.recoveryPasswordInsertEmailEscreen);
              navigation.dispatch(pushAction);
            }}>Vai falar que esqueceu?</Link>
        </LinkBox>
      </BoxInput>

      <BoxButton>
        <AppButton
          mainColor={AppColors.white}
          label={'LOGIN'}
          onTap={() => { Login() }}
          isLoading={isLoading}
        />
        <Row justifyContent={'center'} gap={28}>
          <BodyLarge color={AppColors.black}>Não tem conta?</BodyLarge>
          <Link size={16} color={AppColors.blue}
            onPress={() => {
              const pushAction = StackActions.push(AppRoutesKeys.registerUserDataPage);
              navigation.dispatch(pushAction);
            }}
          >Cadastre-se</Link>
        </Row>
      </BoxButton>

      <DualTextWithShadow2>
        <Text>Texto com sombra</Text>
        <Text>Texto normal</Text>
      </DualTextWithShadow2>
    </AppContainer>
  )
}