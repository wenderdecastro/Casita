import React, {useState, useRef} from 'react'
import { PositionedImage, AppContainer, Row } from '../../components/AppContainers'
import { AppAssets } from '../../../assets/AppAssets'
import { AppColors } from '../../utils/Pallete'
import AppSquare from '../../components/AppNativeShapes/AppSquare'
import LeadingButtonWidget from './widgets/LeadingButtonWidget'
import { LeadingBox } from './widgets/RecoveryPasswordContainer'
import { TitleBlack } from '../../components/AppFonts'
import { BodyMedium } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import AppInput from '../../components/AppInput'
import AppButton from '../../components/AppButton'
import ToastMessage from '../../components/AppToastMessage'

import { AppRoutesKeys } from '../../utils/AppRoutes/AppRoutesUtils'
import { StackActions } from '@react-navigation/native'

export default function RegisterUserDataScreen({navigation}) {
  const [name, setName] = useState('Enzo');
  const [mail, setMail] = useState('enzo.quarelo@gmail.com');
  const [password, setPassword] = useState('123');
  const [confirmyPassword, setConfirmyPassword] = useState('123');

  const [typeToast, setTypeToast] = useState('success');
  const [titleToast, setTitleToast] = useState('');
  const [descriptionToast, setDescriptionToast] = useState('');

  const toastRef = useRef(null);

  const showToast = () => {
    console.log(toastRef)
    if (toastRef.current) {
      toastRef.current.show();
    }
  }

  const validatedInputs = () => {
    const emailRegex =/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;
    if (name === '' || mail === '' || password === '' || confirmyPassword === '') {
      setTypeToast('warning');
      setTitleToast('Preencha os Campos');
      setDescriptionToast('Esqueceu de algo ai meu chapa!');
      showToast();
      return false;
    }
    if (!emailRegex.test(mail)) {
      setTypeToast('error');
      setTitleToast('Email Inválido');
      setDescriptionToast('Por favor, insira um email válido.');
      showToast();
      return false;
    }
    if (password !== confirmyPassword) {
      setTypeToast('error');
      setTitleToast('Senhas não Coecidem');
      setDescriptionToast('As suas senhas tem que ser iguais!');
      showToast();
      return false;
    }
    return true;
  }

  return (
    <AppContainer backgroundColor={AppColors.background}>
      <PositionedImage position={'absolute'} left={-15} top={80} source={AppAssets.yellowTriangle} />
      <PositionedImage position={'absolute'} left={8} source={AppAssets.dotPattern} />
      <PositionedImage position={'absolute'} left={80} top={88} source={AppAssets.dotStar} />
      <AppSquare
        width={88}
        height={150}
        backgroundColor={AppColors.blue}
        rotate={22}
        top={-3}
        left={65}
      />
      <LeadingBox>
        <LeadingButtonWidget navigation={navigation}/>
      </LeadingBox>

      <ToastMessage
        ref={toastRef}
        type={typeToast}
        title={titleToast}
        description={descriptionToast}
      />

      <Row width={"100%"} alignItems={'center'} >
        <PositionedImage source={AppAssets.eightPointBlueStarSmall} />
        <TitleBlack style={{marginLeft: 20}} size={36}>CADASTRO</TitleBlack>
      </Row>
      <Gap height={20}/>
      <BodyMedium color={AppColors.black}>Que bom que você deseja usar o Casita! Insira seus dados para continuarmos com seu cadastro.</BodyMedium>
      <Gap height={15}/>
      <AppInput 
        label={'Nome'}
        textValue={name}
        onChangeText={(txt) => setName(txt)}
      />
      <Gap height={15}/>
      <AppInput 
        label={'Email'}
        textValue={mail}
        onChangeText={(txt) => setMail(txt)}
      />
      <Gap height={15}/>
      <AppInput 
        label={'Senha'}
        textValue={password}
        onChangeText={(txt) => setPassword(txt)}
        isObscureText
      />
      <Gap height={15}/>
      <AppInput 
        label={'Confirmar Senha'}
        textValue={confirmyPassword}
        onChangeText={(txt) => setConfirmyPassword(txt)}
        isObscureText
      />
      <Gap height={40}/>
      <AppButton 
        mainColor={AppColors.white} 
        label={'CONTINUAR'}
        onTap={() => validatedInputs()}
      />
    </AppContainer>
  )
}

        // onTap={() => {
        //   const pushAction = StackActions.push(AppRoutesKeys.registerFinanceDataPage);
        //   navigation.dispatch(pushAction);
        // }}