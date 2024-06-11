import React, { useState, useEffect } from 'react'
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

export default function RegisterFinanceDataScreen({ navigation, route }) {
  const [income, setIncome] = useState('2000');
  const [accounts, setAccounts] = useState('1000');
  const [wishes, setWishes] = useState('350');
  const [savings, setSavings] = useState('650');

  const { name, mail, password } = route.params;
  console.log(name, mail, password);

  const [userDetails, setUserDetails] = useState({
    name: name,
    email: mail,
    password: password,
    idNavigation: {
      balance: 0,
      necessitiesPercentage: accounts,
      savingsPercentage: savings,
      wantsPercentage: wishes,
      monthlyIncome: income
    }
  });

  async function postUser() {
    try {
      const response = await api.post('/User', userDetails);
      console.log('Usuário registrado com sucesso:', response);
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
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

      {/* Titulo */}
      <Row width={"100%"} alignItems={'center'} >
        <PositionedImage source={AppAssets.eightPointGreenStarSmall} />
        <TitleBlack style={{ marginLeft: 20 }} size={36}>FINANÇAS</TitleBlack>
      </Row>


      <Gap height={20} />
      <BodyMedium color={AppColors.black} size={18}>Qual a sua renda mensal?</BodyMedium>
      <Gap height={15} />
      <AppInput
        keyboardType='numeric'
        placeholder={'R$0,00'}
        fontSize={'45px'}
        textAlign={'center'}
        isTextArea
        textValue={income}
        onChangeText={(txt) => setIncome(txt)}
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
          />
          <BodyLarge color={AppColors.black} style={{ marginLeft: 10 }}>Cartões, dividas, etc.</BodyLarge>
        </Column>
        <AppInput
          inputWidth={'120px'}
          textValue={accounts}
          onChangeText={(txt) => setAccounts(txt)}
          SuffixIcon={
            <PositionedImage position={'relative'} top={-18} source={AppAssets.percentage} />
          }
        />
      </Row>


      <Gap height={10} />
      <Row alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
        <Column>
          <AppTextWithStroke
            text={' DESEJOS '}
            fontSize={20}
            shadowLeft={1}
          />
          <BodyLarge color={AppColors.black} style={{ marginLeft: 10 }}>Seus gastos pessoais.</BodyLarge>
        </Column>
        <AppInput
          inputWidth={'120px'}
          textValue={wishes}
          onChangeText={(txt) => setWishes(txt)}
          SuffixIcon={
            <PositionedImage position={'relative'} top={-18} source={AppAssets.percentage} />
          }
        />
      </Row>


      <Gap height={10} />
      <Row alignItems={'center'} width={'100%'} justifyContent={'space-between'} >
        <Column>
          <AppTextWithStroke
            text={' ECONIMIAS '}
            fontSize={20}
            shadowLeft={1}
          />
          <BodyLarge color={AppColors.black} style={{ marginLeft: 10 }}>Quanto deseja guardar.</BodyLarge>
        </Column>
        <AppInput
          inputWidth={'120px'}
          textValue={savings}
          onChangeText={(txt) => setSavings(txt)}
          SuffixIcon={
            <PositionedImage position={'relative'} top={-18} source={AppAssets.percentage} />
          }
        />
      </Row>

      <Gap height={40} />
      <AppButton mainColor={AppColors.white} label={'CADASTRAR'} onTap={() => postUser()} />

    </AppContainer>
  )
}