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

export default function RegisterFinanceDataScreen() {
  return (
    <AppContainer backgroundColor={AppColors.background}>
      <PositionedImage position={'absolute'} left={0} top={81} source={AppAssets.dolarSignGreen} />
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
        <PositionedImage source={AppAssets.eightPointGreenStarSmall} />
        <TitleBlack style={{marginLeft: 20}} size={36}>FINANÇAS</TitleBlack>
      </Row>

      <AppButton mainColor={AppColors.white} label={'CADASTRAR'}/>
    </AppContainer>
  )
}