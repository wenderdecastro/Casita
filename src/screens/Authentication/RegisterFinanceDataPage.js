import React from 'react'
import { PositionedImage, AppContainer, Row, Column } from '../../components/AppContainers'
import { AppAssets } from '../../../assets/AppAssets'
import { AppColors } from '../../utils/Pallete'
import AppSquare from '../../components/AppNativeShapes/AppSquare'
import LeadingButtonWidget from './widgets/LeadingButtonWidget'
import { LeadingBox } from './widgets/RecoveryPasswordContainer'
import { TitleBlack, TitleExtraLarge, BodyLarge, DualTextWithShadow } from '../../components/AppFonts'
import { BodyMedium } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import AppInput from '../../components/AppInput'
import AppButton from '../../components/AppButton'

export default function RegisterFinanceDataScreen({ navigation }) {
  return (
    <AppContainer backgroundColor={AppColors.background}>
      {/* Componentes de fundo */}
      <DualTextWithShadow
        primaryText="$"
        secondaryText="$"
        primaryTextStyle={{ fontSize: 300, color: AppColors.green }}
        secondaryTextStyle={{ fontSize: 305, color: AppColors.black }}
        position='absolute'
        left={0}
        top={615}
        rotate={-20}
      />
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
      <AppInput keyboardType='numeric' placeholder={'R$0,00'} fontSize={'45px'} textAlign={'center'} isTextArea />


      <Gap height={40} />
      <TitleBlack size={18} textAlign={'start'} style={{ width: '100%' }}>DIVIDA SUA RENDA</TitleBlack>
      <Gap height={20} />


      <Row alignItems={'center'} width={'100%'} justifyContent={'space-around'}>
        <Column>
          <TitleExtraLarge size={20} color={AppColors.green} >CONTAS</TitleExtraLarge>
          <BodyLarge color={AppColors.black}>Cartões, dividas, etc.</BodyLarge>
        </Column>
        <AppInput
          inputWidth={'120px'}
          SuffixIcon={
            <DualTextWithShadow
              primaryText="%"
              secondaryText="%"
              primaryTextStyle={{ fontSize: 30, color: AppColors.green }}
              secondaryTextStyle={{ fontSize: 32, color: AppColors.black }}
            />
          }
        />
      </Row>


      <Gap height={10} />
      <Row alignItems={'center'} width={'100%'} justifyContent={'space-around'}>
        <Column>
          <TitleExtraLarge size={20} color={AppColors.green}>DESEJOS</TitleExtraLarge>
          <BodyLarge color={AppColors.black}>Seus gastos pessoais.</BodyLarge>
        </Column>
        <AppInput
          inputWidth={'120px'}
          SuffixIcon={
            <DualTextWithShadow
              primaryText="%"
              secondaryText="%"
              primaryTextStyle={{ fontSize: 30, color: AppColors.green }}
              secondaryTextStyle={{ fontSize: 32, color: AppColors.black }}
            />
          }
        />
      </Row>


      <Gap height={10} />
      <Row alignItems={'center'} width={'100%'} justifyContent={'space-around'}>
        <Column>
          <TitleExtraLarge size={20} color={AppColors.green}>ECONOMIAS</TitleExtraLarge>
          <BodyLarge color={AppColors.black}>Quanto deseja guardar.</BodyLarge>
        </Column>
        <AppInput
          inputWidth={'120px'}
          SuffixIcon={
            <DualTextWithShadow
              primaryText="%"
              secondaryText="%"
              primaryTextStyle={{ fontSize: 30, color: AppColors.green }}
              secondaryTextStyle={{ fontSize: 32, color: AppColors.black }}
            />
          }
        />
      </Row>

      <Gap height={40} />
      <AppButton mainColor={AppColors.white} label={'CADASTRAR'} />
      
    </AppContainer>
  )
}