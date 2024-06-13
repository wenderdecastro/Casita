import React, { useState, useRef } from 'react'
import RecoveryPasswordContainer from './widgets/RecoveryPasswordContainer'
import { BodyMedium, TitleBlack } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import { AppColors } from '../../utils/Pallete'
import { Flex } from '../../utils/AppEnums'
import AppInput from '../../components/AppInput'
import AppButton from '../../components/AppButton'
import { AppNavigation, AppRoutesKeys } from '../../utils/AppRoutes/AppRoutesUtils'
import api from '../../services/ApiService';
import ToastMessage from '../../components/AppToastMessage'

export default function RecoveryPasswordInsertEmailScreen({ navigation }) {

  const [mail, setMail] = useState('enzo.quarelo@gmail.com')
  const [isLoading, setIsLoading] = useState(false)

  const [typeToast, setTypeToast] = useState('success');
  const [titleToast, setTitleToast] = useState('');
  const [descriptionToast, setDescriptionToast] = useState('');

  const toastRef = useRef(null);

  const showToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  }

  async function SendMail() {
    setIsLoading(true)
    if (mail == '') {
      setTypeToast('warning');
      setTitleToast('Preencha os Campos');
      setDescriptionToast('Esqueceu de algo ai meu chapa!');
      setIsLoading(false)
      showToast();
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(mail)) {
      setTypeToast('error');
      setTitleToast('Email Inválido');
      setDescriptionToast('Por favor, insira um email válido.');
      setIsLoading(false)
      showToast();
      return false;
    }

    try {
      await api.post(`/RecuperarSenha?email=${mail}`)
      navigation.replace(AppRoutesKeys.recoveryPasswordInsertCodeEscreen, { mail })
    } catch (error) {
      setTypeToast('error');
      setTitleToast('Erro ao enviar e-mail');
      setDescriptionToast('Verifique o email!');
      showToast();
    }
    setIsLoading(false)
  }


  return (
    <>
      <RecoveryPasswordContainer alignItems={Flex.flexStart} navigation={navigation}>

        <TitleBlack size={32}>RECUPERAÇÃO</TitleBlack>
        <Gap height={20} />
        <BodyMedium color={AppColors.black}>Poxa, vamos ter que recuperar sua senha... Para isso, precisamos que você insira seu email aqui embaixo!</BodyMedium>
        <Gap height={15} />
        <AppInput label={'Email'} textValue={mail} onChangeText={(txt) => setMail(txt)} />
        <Gap height={40} />
        <AppButton
          mainColor={AppColors.white}
          label={'CONTINUAR'}
          onTap={() => { SendMail() }}
          isLoading={isLoading}
        />
      </RecoveryPasswordContainer>
      <ToastMessage
        ref={toastRef}
        type={typeToast}
        title={titleToast}
        description={descriptionToast}
      />
    </>
  )
}