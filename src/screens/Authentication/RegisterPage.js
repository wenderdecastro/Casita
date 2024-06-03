import React from 'react'
import { PositionedImage, AppContainer } from '../../components/AppContainers'
import { AppAssets } from '../../../assets/AppAssets'
import { AppColors } from '../../utils/Pallete'

export default function RegisterScreen() {
  return (
    <AppContainer backgroundColor={AppColors.background}>
      <PositionedImage position={'absolute'} left={-15} top={80} source={AppAssets.yellowTriangle} />
      <PositionedImage position={'absolute'} left={8} source={AppAssets.dotPattern} />
      <PositionedImage position={'absolute'} left={80} top={88} source={AppAssets.dotStar} />
    </AppContainer>
  )
}