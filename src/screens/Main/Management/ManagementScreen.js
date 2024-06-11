import React, { useCallback, useMemo, useRef, useState } from 'react'
import { AppContainer, Row } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import { BuyListMock, Flex, TasksButtons, TasksListMock } from '../../../utils/AppEnums'
import MyDayWidget from './widgets/MyDayWidget'
import { Gap } from '../../../components/AppSpecialComponents'
import styled from 'styled-components/native'
import AppSvgIcon, { AppIconName } from '../../../../assets/Icons'
import NewTaskDialog from './widgets/dialogs/NewTaskDialog'
import EditTaskDialog from './widgets/dialogs/EditTaskDialog'
import TasksListWidget from './widgets/TasksListWidget'
import ButtonSelector from '../../../components/ButtonSelector'
import { TitleBlack } from '../../../components/AppFonts'
import { AppNavigation, AppRoutesKeys } from '../../../utils/AppRoutes/AppRoutesUtils'
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { AppAssets } from '../../../../assets/AppAssets'
import MyListCardWidget from './widgets/MyListCardWidget'
import { Image, TouchableOpacity, View } from 'react-native'
import AppTextWithStroke from '../../../components/AppTextWithStroke'
import BottomSheetDefaultListWidget from './widgets/BottomSheetDefaultListWidget'
import NewItemDialog from './widgets/dialogs/NewItemDialog'

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

const CheckBox = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    background-color: ${({ isChecked }) => isChecked ? AppColors.yellow : AppColors.white};
    border-width: 1px;
    border-color: ${AppColors.black};
    align-items: center;
    justify-content: center;
`

const TaskBox = styled.View`
  width: 100%;
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

export default function ManagementScreen({ navigation }) {

  const [selected, setSelected] = useState(0)

  const [isNewTaskDialogVisible, setIsNewTaskDialogVisible] = useState(false)
  const [isEditTaskDialogVisible, setIsEditTaskDialogVisible] = useState(false)
  const [isNewItemDialogVisible, setIsNewItemDialogVisible] = useState(false)
  const [bottomSheetType, setBottomSheetType] = useState()

  const [taskSelected, setTaskSelected] = useState()

  const [isChecked, setIsChecked] = useState(false)

  const handleOpenEditModal = (task) => {
    setTaskSelected(task)
    setIsEditTaskDialogVisible(true)
  }

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

  return (
    <AppContainer justifyContent={Flex.flexStart} backgroundColor={AppColors.background}>
      <MyDayWidget onTap={() => { AppNavigation.push(navigation, AppRoutesKeys.myDayScreen) }} />
      <Gap height={30} />
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
        <Gap height={15} />
        <TouchableOpacity activeOpacity={0.9} onPress={() => {AppNavigation.push(navigation, AppRoutesKeys.listsScreen)}}>
          <Row width={'100%'} justifyContent={Flex.flexEnd}>
            <View>
              <AppTextWithStroke
                text={'Ver todas'}
                shadowTop={10}
                shadowLeft={5} />
            </View>
            <View>
              <Image source={AppAssets.arrowRight} style={{
                flex: 1,
                height: 19,
                width: 22,
                resizeMode: 'contain'
              }} />
            </View>
          </Row>
        </TouchableOpacity>
      </ListBox>
      <Gap height={15} />

      <TaskBox>
        <TitleBlack size={20}>TAREFAS</TitleBlack>
      </TaskBox>
      <Gap height={10} />
      <ButtonSelector
        selected={selected}
        buttonList={TasksButtons}
        mainColor={AppColors.white}
        mainTextColor={AppColors.black}
        handleTabSelected={(val) => {
          setSelected(val)
        }}
      />
      <Gap height={3} />
      <TasksListWidget
        DATA={TasksListMock}
        tapAction={handleOpenEditModal}
        flex={0.85} />


      <FixedButton activeOpacity={0.9} onPress={() => { setIsNewTaskDialogVisible(true) }}>
        <AppSvgIcon name={AppIconName.add} />
      </FixedButton>
      <FixedButtonShadow>
        <AppSvgIcon name={AppIconName.add} />
      </FixedButtonShadow>



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
            <CheckBox onPress={() => { setIsChecked(!isChecked) }} isChecked={isChecked}>
              {isChecked ? <AppSvgIcon size={25} name={AppIconName.checkTask} /> : null}
            </CheckBox>
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



      <NewTaskDialog visible={isNewTaskDialogVisible} onClose={() => { setIsNewTaskDialogVisible(false) }} />
      <EditTaskDialog visible={isEditTaskDialogVisible} onClose={() => { setIsEditTaskDialogVisible(false) }} item={taskSelected} />
      <NewItemDialog visible={isNewItemDialogVisible} onClose={() => { setIsNewItemDialogVisible(false) }}/>
    </AppContainer>
  )
}