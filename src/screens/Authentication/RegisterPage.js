import React from 'react'
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

export default function RegisterScreen() {
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
        <LeadingButtonWidget />
      </LeadingBox>

      <Row width={"100%"} alignItems={'center'} >
        <PositionedImage source={AppAssets.eightPointBlueStarSmall} />
        <TitleBlack style={{marginLeft: 20}} size={36}>CADASTRO</TitleBlack>
      </Row>
      <Gap height={20}/>
      <BodyMedium color={AppColors.black}>Que bom que você deseja usar o Casita! Insira seus dados para continuarmos com seu cadastro.</BodyMedium>
      <Gap height={15}/>
      <AppInput label={'Nome'}/>
      <Gap height={15}/>
      <AppInput label={'Email'}/>
      <Gap height={15}/>
      <AppInput label={'Senha'}/>
      <Gap height={15}/>
      <AppInput label={'Confirmar Senha'}/>
      <Gap height={40}/>
      <AppButton mainColor={AppColors.white} label={'CONTINUAR'}/>
    </AppContainer>
  )
}