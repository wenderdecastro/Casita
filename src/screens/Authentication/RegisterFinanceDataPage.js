import React, { useState, useRef } from 'react'
import { PositionedImage, AppContainer, Row, Column } from '../../components/AppContainers'
import { AppAssets } from '../../../assets/AppAssets'
import { AppColors } from '../../utils/Pallete'
import AppSquare from '../../components/AppNativeShapes/AppSquare'
import LeadingButtonWidget from './widgets/LeadingButtonWidget'
import { LeadingBox } from './widgets/RecoveryPasswordContainer'
import TextStrokeShadow, { TitleBlack, TitleExtraLarge, BodyLarge } from '../../components/AppFonts'
import { BodyMedium } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import AppInput from '../../components/AppInput'
import AppButton from '../../components/AppButton'
import AppTextWithStroke from '../../components/AppTextWithStroke'
import api from '../../services/ApiService'
import CurrencyInput from 'react-native-currency-input'
import { AppRoutesKeys } from '../../utils/AppRoutes/AppRoutesUtils'
import ToastMessage from '../../components/AppToastMessage'

export default function RegisterFinanceDataScreen({ navigation, route }) {
  const [income, setIncome] = React.useState();
  const [accounts, setAccounts] = useState('');
  const [wishes, setWishes] = useState('');
  const [savings, setSavings] = useState('');

  const { name, mail, password } = route.params;

  const [isLoading, setIsLoading] = useState(false)

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

  const [userDetails, setUserDetails] = useState({
    name: name,
    email: mail,
    password: password,
    idNavigation: {
      balance: 0,
      necessitiesPercentage: accounts / 100,
      savingsPercentage: savings / 100,
      wantsPercentage: wishes / 100,
      monthlyIncome: income
    }
  });

  async function postUser() {
    setIsLoading(true);
    
    if (!accounts ||!wishes ||!savings ||!income) {
      setTypeToast('error');
      setTitleToast('Preencha os Campos');
      setDescriptionToast('Por favor, preencha todos os campos.');
      setIsLoading(false);
      showToast(); 
      return; 
    }
  
    if (parseInt(accounts) + parseInt(wishes) + parseInt(savings) > 100) {
      setTypeToast('warning');
      setTitleToast('Erro na divisão dos Gastos');
      setDescriptionToast('Só dá pra separar 100% da renda');
      setIsLoading(false);
      showToast();
      return;
    }
  
    try {
      await api.post('/User', userDetails);
      setIsLoading(false);
      navigation.replace(AppRoutesKeys.loginScreen);
    } catch (error) {
      setTypeToast('error');
      setTitleToast('Falha ao realizar Cadastro');
      setDescriptionToast('Verifique os dados informados');
      setIsLoading(false);
      showToast();
      return false;
    }
  };
  


  return (
    <AppContainer backgroundColor={AppColors.background}>
      {/* Componentes de fundo */}
      <PositionedImage position={'absolute'} left={-10} top={85} source={AppAssets.dolarSignGreen} />
      <PositionedImage position={'absolute'} left={80} top={90} source={AppAssets.plusGreen} />
      <PositionedImage position={'absolute'} left={80} top={3} source={AppAssets.dotStar} />
      <AppSquare
        width={88}
        height={260}
        backgroundColor={AppColors.green}
        rotate={105}
        top={-15}
        left={5}
      />
      <LeadingBox>
        <LeadingButtonWidget navigation={navigation} />
      </LeadingBox>

      <ToastMessage
        ref={toastRef}
        type={typeToast}
        title={titleToast}
        description={descriptionToast}
      />

      {/* Titulo */}
      <Row width={"100%"} alignItems={'center'} >
        <PositionedImage source={AppAssets.eightPointGreenStarSmall} />
        <TitleBlack style={{ marginLeft: 20 }} size={36}>FINANÇAS</TitleBlack>
      </Row>


      <Gap height={20} />
      <BodyMedium color={AppColors.black} size={18}>Qual a sua renda mensal?</BodyMedium>
      <Gap height={15} />
      <CurrencyInput
        value={income}
        onChangeValue={setIncome}
        renderTextInput={textInputProps => <AppInput placeholder={'R$00.00'} isTextArea textInputProps={textInputProps} keyboardType='numeric' textAlign={'center'} fontSize={45}/>}
        renderText
        prefix="R$"
        delimiter="."
        separator=","
        precision={2}
      />


      <Gap height={40} />
      <TitleBlack size={18} textAlign={'start'} style={{ width: '100%' }}>DIVIDA SUA RENDA</TitleBlack>
      <Gap height={20} />


      <Row alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
        <Column>
          <AppTextWithStroke
            text={' CONTAS '}
            fontSize={20}
            shadowLeft={1}
            textColor={AppColors.green}
          />
          <BodyLarge color={AppColors.black} style={{ marginLeft: 10 }}>Cartões, dividas, etc.</BodyLarge>
        </Column>
        
        <AppInput
          inputWidth={'120px'}
          textValue={accounts}
          onChangeText={(txt) => setAccounts(txt)}
          SuffixIcon={
            <AppTextWithStroke text={" % "} textColor={AppColors.background} fontSize={34} top={-20} left={10}/>
          }
          fontSize={20}
          keyboardType='numeric'
          maxLength={2}
        />
      </Row>


      <Gap height={10} />
      <Row alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
        <Column>
          <AppTextWithStroke
            text={' DESEJOS '}
            fontSize={20}
            shadowLeft={1}
            textColor={AppColors.green}
          />
          <BodyLarge color={AppColors.black} style={{ marginLeft: 10 }}>Seus gastos pessoais.</BodyLarge>
        </Column>
        <AppInput
          inputWidth={'120px'}
          textValue={wishes}
          onChangeText={(txt) => setWishes(txt)}
          SuffixIcon={
           <AppTextWithStroke text={" % "} textColor={AppColors.background} fontSize={34} top={-20} left={10}/>
          }
          fontSize={20}
          keyboardType='numeric'
          maxLength={2}
        />
      </Row>


      <Gap height={10} />
      <Row alignItems={'center'} width={'100%'} justifyContent={'space-between'} >
        <Column>
          <AppTextWithStroke
            text={' ECONIMIAS '}
            fontSize={20}
            shadowLeft={1}
            textColor={AppColors.green}
          />
          <BodyLarge color={AppColors.black} style={{ marginLeft: 10 }}>Quanto deseja guardar.</BodyLarge>
        </Column>
        <AppInput
          inputWidth={'120px'}
          textValue={savings}
          onChangeText={(txt) => setSavings(txt)}
          SuffixIcon={
           <AppTextWithStroke text={" % "} textColor={AppColors.background} fontSize={34} top={-20} left={10}/>
          }
          fontSize={20}
          keyboardType='numeric'
          maxLength={2}
        />
      </Row>

      <Gap height={40} />
      <AppButton mainColor={AppColors.white} label={'CADASTRAR'} onTap={() => postUser()} isLoading={isLoading} />

    </AppContainer>
  )
}