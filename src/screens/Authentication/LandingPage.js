import React from 'react'
import { AppContainer } from '../../components/AppContainers'
import { AppColors } from '../../utils/Pallete'
import { TitleExtraLarge } from '../../components/AppFonts'
import { Gap } from '../../components/AppSpecialComponents'
import AppButton from '../../components/AppButton'
import styled from 'styled-components/native'
import { AppAssets } from '../../../assets/AppAssets'

const AppLogo = styled.Image`
  position: relative;
  left: 25%;
`

const DotPattern = styled.Image`
position: absolute;
top: 38%;
left: 1%;
`

const CurvedLine = styled.Image`
position: absolute;
top: 62%;
left: 80%;
`

const Triangle = styled.Image`
position: absolute;
top: 81%;
left: 3%;
`
const Star = styled.Image`
position: absolute;
top: 10%;
left: 10%;
`

export default function LandingPage() {
  return (
    <AppContainer backgroundColor={AppColors.background}>
      <AppLogo source={AppAssets.casitaLogo} />
      <DotPattern source={AppAssets.dotPattern} />
      <CurvedLine  source={AppAssets.curvedLine} />
      <Triangle source={AppAssets.triangle}/>
      <Star source={AppAssets.eightPointBlueStar}/>

      <Gap height={24} />
      <TitleExtraLarge>
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