import { View,  Image } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AppContainer, Row } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import { BuyListMock, Flex } from '../../../utils/AppEnums'
import { AppAssets } from '../../../../assets/AppAssets'
import { Gap } from '../../../components/AppSpecialComponents'
import { TitleBlack } from '../../../components/AppFonts'
import AppSvgIcon, { AppIconName } from '../../../../assets/Icons'
import MyListCardWidget from './widgets/MyListCardWidget'
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import AppCheckBox from '../../../components/AppCheckBox'
import BottomSheetDefaultListWidget from './widgets/BottomSheetDefaultListWidget'
import styled from 'styled-components/native'
import ListCardWidget from './widgets/ListCardWidget'
import NewListDialog from './widgets/dialogs/NewListDialog'
import { AppNavigation, AppRoutesKeys } from '../../../utils/AppRoutes/AppRoutesUtils'
import api from '../../../services/ApiService'
import { FlatList } from 'react-native-gesture-handler'

const FixedButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${AppColors.yellow};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
  position: absolute;
  bottom: 100px;
  right: 20px;
  z-index: 0;
`

const ListBox = styled.View`
    width: 100%;
`

const FixedButtonShadow = styled.View`
  padding: 15px;
  background-color: ${AppColors.black};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
  position: absolute;
  bottom: 99px;
  right: 18px;
  z-index: -1;
`

const TotalBox = styled.View`
  padding: 20px;
  padding-left: 60px;
  padding-right: 60px;
  border-width: 1px;
  border-color: ${AppColors.black};
  background-color: ${AppColors.background};
  position: absolute;
  border-radius: 10px;  
  margin-left: 15px;
  margin-right: 15px;
  bottom: 20px;
`

export default function ListsScreen({navigation, route}) {

    //Listas API
    const [customList, setCustomList] = useState([]);
    const [shopList, setShopList] = useState([]);
    const [taskList, setTaskList] = useState([]);

    const [bottomSheetType, setBottomSheetType] = useState()
    const [isChecked, setIsChecked] = useState(false)

    const [isNewListDialogVisible, setIsNewListDialogVisible] = useState(false)

    // ref
    const bottomSheetModalRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ["25%", "50%"], []);

    // callbacks
    const handlePresentModalPress = useCallback((type) => {
        setBottomSheetType(type)
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index) => {
        console.log("handleSheetChanges", index);
    }, []);


    //API Call
    async function ListApi() {
        const resApi = await api.get(`/TaskList/custom?userId=${route.params.userId}`)
        console.log("UIRBUYBVU45YBRVUORBT4O8Y", resApi.status);
    }

    //API Call useEffect
    useEffect(() => {ListApi()}, [])
    return (
        <AppContainer alignItems={Flex.flexStart} justifyContent={Flex.flexStart} backgroundColor={AppColors.background}>
            <Row alignItems={Flex.center}>
                <Image style={{
                    width: 45,
                    height: 45,
                    resizeMode: 'contain',

                }} source={AppAssets.eightPointYellowStarSmall} />
                <Gap width={13} />
                <TitleBlack size={32}>LISTAS</TitleBlack>
            </Row>
            <Gap height={40} />
            <ListBox>
                <TitleBlack size={20}>MINHAS LISTAS</TitleBlack>
                <Gap height={10} />
                <Row>
                    <MyListCardWidget
                        appIconName={AppIconName.shoppingCart}
                        label={'Lista de compras'}
                        tagText={5}
                        tagColor={AppColors.white}
                        tagTextColor={AppColors.black}
                        onTap={() => { handlePresentModalPress('LISTA DE COMPRAS') }}
                    />
                    <Gap width={10} />
                    <MyListCardWidget
                        appIconName={AppIconName.asterisk}
                        label={'Objetivos'}
                        cardColor={AppColors.yellow}
                        tagText={5}
                        tagTextColor={AppColors.black}
                        tagColor={AppColors.white}
                        onTap={() => { handlePresentModalPress('OBJETIVOS') }}
                    />
                </Row>
            </ListBox>
            <Gap height={47} />
            <TitleBlack size={20}>LISTAS PERSONALIZADAS</TitleBlack>
            <Gap height={10} />
            <FlatList
                tagText={'5'}
                title={'Lista de numero 1'}
                actualProgress={8}
                total={10}
                onTap={() => {AppNavigation.push(navigation, AppRoutesKeys.listDetailScreen)}}
            />
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                style={{

                    zIndex: 9999999,
                    marginBottom: 300,
                    backgroundColor: AppColors.white
                }}

            >
                <BottomSheetScrollView

                    style={{
                        padding: 20,
                        paddingEnd: 40,
                        paddingStart: 40,
                        paddingBottom: 100,
                        zIndex: 99999999999
                    }}

                >
                    <Row alignItems={Flex.center} justifyContent={Flex.spaceBetween}>
                        <AppCheckBox onPress={() => { setIsChecked(!isChecked) }} isChecked={isChecked}>
                            {isChecked ? <AppSvgIcon size={25} name={AppIconName.checkTask} /> : null}
                        </AppCheckBox>
                        <AppSvgIcon name={bottomSheetType == 'LISTA DE COMPRAS' ? AppIconName.shoppingCart : AppIconName.asterisk} />
                        <TitleBlack size={20}>{bottomSheetType}</TitleBlack>
                    </Row>
                    <Gap height={10} />
                    <BottomSheetDefaultListWidget data={BuyListMock} />
                    <Gap height={170} />
                </BottomSheetScrollView>

                <FixedButton activeOpacity={0.9} onPress={() => { setIsNewItemDialogVisible(true) }}>
                    <AppSvgIcon name={AppIconName.add} />
                </FixedButton>
                <FixedButtonShadow>
                    <AppSvgIcon name={AppIconName.add} />
                </FixedButtonShadow>

                <TotalBox>
                    <Row width={'100%'} justifyContent={Flex.spaceBetween}>
                        <TitleBlack size={20}>TOTAL</TitleBlack>
                        <TitleBlack size={20}>R$ 50,00</TitleBlack>
                        <View style={{
                            padding: 5,
                            borderWidth: 1,
                            borderColor: AppColors.black,
                            backgroundColor: AppColors.yellow,
                            borderRadius: 10,
                        }}>
                            <AppSvgIcon name={AppIconName.shoppingCart} />
                        </View>
                    </Row>
                </TotalBox>
            </BottomSheetModal>
            <NewListDialog visible={isNewListDialogVisible} onClose={() => setIsNewListDialogVisible(false)}/>
            <FixedButton activeOpacity={0.9} onPress={() => { setIsNewListDialogVisible(true) }}>
                <AppSvgIcon name={AppIconName.add} />
            </FixedButton>
            <FixedButtonShadow>
                <AppSvgIcon name={AppIconName.add} />
            </FixedButtonShadow>
        </AppContainer>
    )
}