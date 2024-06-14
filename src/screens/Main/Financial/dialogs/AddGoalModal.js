import { Image, View } from "react-native";
import AppDialog from "../../../../components/AppDialog";
import { AppColors } from "../../../../utils/Pallete";
import ContainerShadow from "../widgets/ContainerShadow";
import styled from "styled-components";
import { KeyboardType } from "../../../../utils/AppEnums";
import { BodyLarge, FontFamily, TitleBlack } from "../../../../components/AppFonts";
import { Row } from "../../../../components/AppContainers";
import { Gap } from "../../../../components/AppSpecialComponents";
import { AppAssets } from "../../../../../assets/AppAssets";
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import CurrencyInput from "react-native-currency-input";
import AppInput from "../../../../components/AppInput";
import AppButton from "../../../../components/AppButton";
import api, { PostGoalPath } from "../../../../services/ApiService";
import { AppNavigation, AppRoutesKeys } from "../../../../utils/AppRoutes/AppRoutesUtils";

const Input = styled.TextInput`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  text-align: left;
  color: ${({ color = AppColors.altBlack }) => color};
  height: 40px;
`;

const Button = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const BoxView = styled.View`
  height: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 79%;
`;

export default function AddGoalModal({ visible, onClose, userId, navigation }) {
  const [image, setImage] = useState(null);
  const [value, setValue] = useState();
  const [name, setName] = useState()

  const [isLoading, setIsLoading] = useState(false)



  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  const postGoal = async () => {
    setIsLoading(true)
    const form = new FormData()

    form.append("Photo", {
      uri: image, name: 'image.jpeg', type: 'image/jpeg'
    })

    form.append("Name", name)
    form.append("TotalAmount", value)
    form.append("FinantialId", userId)

    await api.post(PostGoalPath, form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log('====================================');
      console.log(response);
      console.log('====================================');
      setIsLoading(false)
      AppNavigation.popWithData(navigation, AppRoutesKeys.goalsScreen, { refresh: true })
    }).catch(error => {
      console.log(error.request);
      setIsLoading(false)
    })

    setIsLoading(false)
  }

  return (
    <AppDialog
      paddingInside={16}
      padding={15}
      visible={visible}
      onClose={onClose}
    >
      <AppInput
        backgroundColor={AppColors.white}
        placeholder={'Nome da meta'}
        fontFamily={FontFamily.archivoBold}
        textValue={name}
        onChangeText={val => {
          setName(val)
        }}
      />

      <Gap height={12} />
      <Row width={"100%"} justifyContent={"space-between"}>
        <ContainerShadow
          width={"25%"}
          height={40}
          backgroundColor={AppColors.white}
          borderRadius={8}
          Content={
            <Button onPress={pickImage}>
              <Image

                source={AppAssets.addPickIcon}
                style={{
                  flex: 1,
                  height: 24,
                  width: 24,
                  resizeMode: "contain",
                }}
              />
            </Button>
          }
        />
        <ContainerShadow
          width={"70%"}
          height={40}
          backgroundColor={AppColors.white}
          borderRadius={8}
          Content={
            <Row
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              height={"100%"}
              style={{ padding: 8 }}
            >
              <View>
                <Image
                  source={AppAssets.goalArrowIcon}
                  style={{
                    flex: 1,
                    height: 24,
                    width: 24,
                    resizeMode: "contain",
                  }}
                />
              </View>

              <BoxView>
                <BodyLarge
                  style={{ width: "auto", height: 30 }}
                  size={20}
                  color={AppColors.black}
                >
                  R$
                </BodyLarge>

                <CurrencyInput
                  value={value}
                  onChangeValue={setValue}
                  renderTextInput={textInputProps =>
                    <AppInput
                      isTransparent
                      fontFamily={FontFamily.archivoMedium}
                      borderRadius={8}
                      backgroundColor={AppColors.white}
                      inputWidth={'140px'}
                      textInputProps={textInputProps}
                      placeholder={'0,00'}

                    />}
                  renderText
                  prefix=""
                  delimiter="."
                  separator=","
                  precision={2}
                />
              </BoxView>
            </Row>
          }
        />
      </Row>

      <Gap height={16} />
      <AppButton
        label={'CRIAR META'}
        isDisabled={!image || !name || !value}
        isLoading={isLoading}
        onTap={postGoal}
      />
    </AppDialog>
  );
}
