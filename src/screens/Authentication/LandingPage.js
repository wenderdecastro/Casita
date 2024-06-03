import React from 'react'
import { AppContainer, PositionedImage } from '../../components/AppContainers'
import { AppColors } from '../../utils/Pallete'
import { TitleExtraLarge } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import AppButton from '../../components/AppButton'
import { AppAssets } from '../../../assets/AppAssets'

export default function LandingPage() {
  return (
    <AppContainer backgroundColor={AppColors.background}>
      <PositionedImage position={'relative'} left={25} source={AppAssets.casitaLogo} />
      <PositionedImage position={'absolute'} left={1} top={38} source={AppAssets.dotPattern} />
      <PositionedImage position={'absolute'} left={80} top={62}  source={AppAssets.curvedLine} />
      <PositionedImage position={'absolute'} left={3} top={81} source={AppAssets.yellowTriangle}/>
      <PositionedImage position={'absolute'} left={10} top={10} source={AppAssets.eightPointBlueStar}/>

      <Gap height={24} />
      <TitleExtraLarge color={AppColors.black}>
        <TitleExtraLarge color={AppColors.blue}>Tarefas</TitleExtraLarge>, <TitleExtraLarge color={AppColors.green}>finanças</TitleExtraLarge> e <TitleExtraLarge color={AppColors.red}>organização</TitleExtraLarge>, tudo em um só lugar!
      </TitleExtraLarge>
      <Gap height={24} />
      <AppButton 
      mainColor={AppColors.white} 
      label={'LOGIN'} 
      onTap={() => {
        //TODO: Levar para a tela de login
      }} 

      />
      <Gap height={40} />
      <AppButton 
      mainColor={AppColors.white} 
      label={'CADASTRAR'} 
      onTap={() => {
        //TODO: Levar para a tela de cadastro
      }} 
      />
    </AppContainer>
  )
}