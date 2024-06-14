import { View, Text } from 'react-native'
import React, { useState, useRef } from 'react'
import RecoveryPasswordContainer from './widgets/RecoveryPasswordContainer'
import { AppColors } from '../../utils/Pallete'
import { BodyMedium, TitleBlack } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import AppInput from '../../components/AppInput'
import { Flex } from '../../utils/AppEnums'
import AppButton from '../../components/AppButton'
import { AppNavigation, AppRoutesKeys } from '../../utils/AppRoutes/AppRoutesUtils'
import api from '../../services/ApiService'
import ToastMessage from '../../components/AppToastMessage'
import { UserPath } from '../../services/ApiService'

export default function RecoveryPasswordInsertNewPasswordScreen({ navigation, route }) {
  const { mail } = route.params
  const [newPaswsword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [typeToast, setTypeToast] = useState('success');
  const [titleToast, setTitleToast] = useState('');
  const [descriptionToast, setDescriptionToast] = useState('');

  const [isLoading, setIsLoading] = useState(false)


  const toastRef = useRef(null);

  const showToast = () => {
    if (toastRef.current) {
      toastRef.current.show();
    }
  }

  async function NewPaswsword() {
    setIsLoading(true);

    if (newPaswsword !== confirmPassword) {
      setTypeToast('warning');
      setTitleToast('As senhas não coincidem');
      setDescriptionToast('Insira a mesma senha nos campos.');
      showToast();
      setIsLoading(false);
      return;
    }

    if (newPaswsword == '' || confirmPassword == '') {
      setTypeToast('warning');
      setTitleToast('Preencha os Campos');
      setDescriptionToast('Esqueceu de algo ai meu chapa!');
      showToast();
      setIsLoading(false);
      return;
    }

    try {
      await api.patch(`${UserPath}/ChangePassword?email=${mail}&senha=${newPaswsword}`);

      navigation.replace(AppRoutesKeys.loginScreen);
    } catch (error) {
      setTypeToast('error');
      setTitleToast('Algo deu errado');
      setDescriptionToast('Verifique as senhas!');
    } finally {
      showToast();
      setIsLoading(false);
    }
  }

  return (
    <>
      <RecoveryPasswordContainer alignItems={Flex.flexStart} navigation={navigation} triangleColor={AppColors.blue} isSquare={false}>

        <TitleBlack size={32}>RECUPERAÇÃO</TitleBlack>
        <Gap height={20} />
        <BodyMedium color={AppColors.black}>Ufa! Agora que sabemos que é você mesmo, pode inserir sua nova senha!</BodyMedium>
        <Gap height={15} />
        <AppInput label={'Nova senha'} textValue={newPaswsword} onChangeText={(txt) => setNewPassword(txt)} isObscureText />
        <Gap height={15} />
        <AppInput label={'Confirmar senha'} textValue={confirmPassword} onChangeText={(txt) => setConfirmPassword(txt)} isObscureText />
        <Gap height={40} />
        <AppButton
          mainColor={AppColors.white}
          label={'REDEFINIR SENHA'}
          onTap={() => { NewPaswsword() }}
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