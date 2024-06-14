import { View, Text, Image } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AppContainer, Row } from '../../../components/AppContainers'
import { AppColors } from '../../../utils/Pallete'
import { AppAssets } from '../../../../assets/AppAssets'
import { BodyMedium, TitleBlack } from '../../../components/AppFonts'
import { Flex, TasksListMock } from '../../../utils/AppEnums'
import { Gap } from '../../../components/AppSpecialComponents'
import TasksListWidget from './widgets/TasksListWidget'
import styled from 'styled-components'
import AppButton from '../../../components/AppButton'
import AppSvgIcon, { AppIconName } from '../../../../assets/Icons'
import NewTaskDialog from './widgets/dialogs/NewTaskDialog'
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet'
import BottomSheetListWidget from './widgets/BottomSheetListWidget';
import { tokenDecode } from '../../../services/TokenService';
import api from '../../../services/ApiService';

const ButtonBox = styled.View`
    border-radius: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};
    background-color: ${AppColors.background};
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    bottom: 30px;
    left: 15px;
    right: 15px;
    text-align: center;
    padding: 10px;
    flex-direction: row;
    z-index: -1;
`

const FixedButton = styled.TouchableOpacity`
  padding: 8px;
  background-color: ${AppColors.yellow};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
`

const FixedButtonShadow = styled.View`
  padding: 8px;
  background-color: ${AppColors.black};
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${AppColors.black};
  position: absolute;
  bottom: 0px;
  right: -3px;
  z-index: -999;
`

export default function MyDayScreen({ navigation }) {
    const [isNewTaskDialogVisible, setIsNewTaskDialogVisible] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [weeklyTasks, setWeeklyTasks] = useState([]);
    const [monthlyTasks, setMonthlyTasks] = useState([]);

    // ref
    const bottomSheetModalRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ["25%", "50%"], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log("handleSheetChanges", index);
    }, []);

    async function GetTasks() {
        const token = await tokenDecode()
        const userId = token.id
        await api.get(`/Task/myday?userId=${userId}`)
            .then((response) => {
                setTasks(response.data);
            })
            .catch(error => {
                console.log(error.request)
            })
    }

    async function GetAllTasks() {
        const token = await tokenDecode()
        const userId = token.id
        await api.get(`/Task?userId=${userId}`)
            .then((response) => {
                const tasks = response.data;
                const weeklyTasks = tasks.filter(task => task.frequencyId === 3);
                const monthlyTasks = tasks.filter(task => task.frequencyId === 4);

                setWeeklyTasks(weeklyTasks);
                setMonthlyTasks(monthlyTasks);
            })
            .catch(error => {
                console.log(error.request);
            });
    }


    useEffect(() => {
        GetTasks();
        GetAllTasks();
    }, [])

    return (
        <AppContainer alignItems={Flex.flexStart} justifyContent={Flex.flexStart} backgroundColor={AppColors.yellow}>
            <Row alignItems={Flex.center}>
                <Image style={{
                    width: 45,
                    height: 45,
                    resizeMode: 'contain',

                }} source={AppAssets.eightPointBlueStar} />
                <Gap width={13} />
                <TitleBlack size={32}>MEU DIA</TitleBlack>
            </Row>
            <Gap height={30} />
            <TitleBlack size={20}>TAREFAS</TitleBlack>
            <TasksListWidget
                DATA={tasks}
                tapAction={() => { }}
                flex={0.88}
            />

            <BottomSheetModalProvider>
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    style={{
                        zIndex: 99999
                    }}

                >
                    <BottomSheetScrollView
                        style={{
                            flex: 1,
                            padding: 20,
                        }}

                    >
                        <TitleBlack size={20}>O QUE PARA HOJE?</TitleBlack>
                        <Gap height={20} />
                        <BottomSheetListWidget label={'SEMANAIS'} data={weeklyTasks} />
                        <Gap height={40} />
                        <BottomSheetListWidget label={'MENSAIS'} data={monthlyTasks} />
                        <Gap height={40} />
                    </BottomSheetScrollView>
                </BottomSheetModal>

            </BottomSheetModalProvider>
            <ButtonBox>
                <View style={{ flex: 7 }}>
                    <AppButton
                        onTap={() => {
                            setIsNewTaskDialogVisible(true)
                        }}
                        mainColor={AppColors.white}
                        FontStyle={BodyMedium}
                        justifyContent={Flex.flexStart}
                        label={'Qual a boa de hoje paizão?'}
                    />

                </View>
                <Gap width={10} />
                <View style={{ flex: 1 }}>
                    <FixedButton activeOpacity={0.9} onPress={handlePresentModalPress}>
                        <AppSvgIcon name={AppIconName.add} />
                    </FixedButton>
                    <FixedButtonShadow>
                        <AppSvgIcon name={AppIconName.add} />
                    </FixedButtonShadow>
                </View>
            </ButtonBox>
            <NewTaskDialog visible={isNewTaskDialogVisible} onClose={() => { setIsNewTaskDialogVisible(false) }} navigation={navigation} />
        </AppContainer>
    )
}