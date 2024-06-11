import { Image, TextInput, TouchableOpacity, View } from "react-native";
import AppDialog from "../../../../components/AppDialog";
import { AppColors } from "../../../../utils/Pallete";
import ContainerShadow from "../widgets/ContainerShadow";
import styled from "styled-components";
import { KeyboardType } from "../../../../utils/AppEnums";
import { BodyLarge, FontFamily, TitleBlack } from "../../../../components/AppFonts";
import { Row } from "../../../../components/AppContainers";
import { Gap } from "../../../../components/AppSpecialComponents";
import { AppAssets } from "../../../../../assets/AppAssets";

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

export default function AddGoalModal({ visible, onClose }) {
  return (
    <AppDialog
      paddingInside={16}
      padding={15}
      visible={visible}
      onClose={onClose}
    >
      <ContainerShadow
        width={"100%"}
        height={40}
        backgroundColor={AppColors.white}
        borderRadius={0}
        Content={
          <Input fontFamily={FontFamily.archivoBold}>Nome da Meta</Input>
        }
      />

      <Gap height={12} />
      <Row width={"100%"} justifyContent={"space-between"}>
        <ContainerShadow
          width={"25%"}
          height={40}
          backgroundColor={AppColors.white}
          borderRadius={8}
          Content={
            <Button>
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

                <Input
                  fontSize={"20px"}
                  keyboardType={KeyboardType.numeric}
                  fontFamily={FontFamily.archivoMedium}
                  placeholder={"380,00"}
                >
                  <BodyLarge
                    style={{ width: "auto" }}
                    size={20}
                    color={AppColors.black}
                  >
                    380,00
                  </BodyLarge>
                </Input>
              </BoxView>
            </Row>
          }
        />
      </Row>

      <Gap height={16} />
      <ContainerShadow
        width={"100%"}
        height={40}
        backgroundColor={AppColors.white}
        borderRadius={100}
        Content={
            <Button>
                <TitleBlack>CRIAR META</TitleBlack>
            </Button>
        }
      />
    </AppDialog>
  );
}
