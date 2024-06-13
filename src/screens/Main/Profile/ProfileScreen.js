import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { AppColors } from '../../../utils/Pallete'
import { AppContainer, Column, Row } from '../../../components/AppContainers'
import { BodyLarge, BodyMedium, H3, TitleBlack } from '../../../components/AppFonts'
import { PositionedImage } from '../../../components/AppContainers'
import { AppAssets } from '../../../../assets/AppAssets'
import { Flex } from '../../../utils/AppEnums'
import AppInput from '../../../components/AppInput'
import AppButton from '../../../components/AppButton'
import { Gap } from '../../../components/AppSpecialComponents'
import AppTextWithStroke from '../../../components/AppTextWithStroke'
import { useRoute } from '@react-navigation/native'

export default function ProfileScreen() {
  const {params} = useRoute();

  useEffect(() => {
    console.log(params);
  }, [])
  return (
    <ScrollView>
      <AppContainer backgroundColor={AppColors.background} justifyContent={Flex.auto}>
        <Row width={"100%"} alignItems={'center'} justifyContent={'start'}>
          <PositionedImage source={AppAssets.eightPointGreenStarSmall} />
          <TitleBlack size={32} style={{ marginLeft: 12 }}>PERFIL</TitleBlack>
        </Row>

        <Gap height={30} />
        <Column width={'100%'} height={220} justifyContent={'space-between'}>
          <H3 color={AppColors.black} size={24}>Informações pessoais</H3>
          <BodyMedium>Essa informação é particular e não será compartilhada com outras pessoas.</BodyMedium>
          <AppInput
            label={'Email'}
            backgroundColor={AppColors.white}
          />
          <AppButton
            mainColor={AppColors.white}
            label={'ALTERAR SENHA'}
          />
        </Column>

        <Gap height={60} />
        <TitleBlack size={18} textAlign={'start'} style={{ width: '100%' }}>RENDA MENSAL</TitleBlack>
        <Gap height={20} />

        <Row alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
          <Column>
            <AppTextWithStroke
              text={' RENDA '}
              fontSize={20}
              shadowLeft={1}
            />
            <BodyLarge color={AppColors.black} style={{ marginLeft: 10 }}>Sua renda mensal</BodyLarge>
          </Column>
          <AppInput
            backgroundColor={AppColors.white}
            inputWidth={'120px'}
            borderRadius={10}
          />
        </Row>

        <Gap height={10} />
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
            SuffixIcon={
              <PositionedImage position={'relative'} top={-18} source={AppAssets.percentage} />
            }
          />
        </Row>

        <Gap height={40} />
        <AppButton mainColor={AppColors.white} label={'SALVAR'} />
        <Gap height={80} />
      </AppContainer>
    </ScrollView>
  )
}