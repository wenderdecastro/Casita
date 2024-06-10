import styled from "styled-components";
import { Row } from "../../../../components/AppContainers";
import { BodyLarge } from "../../../../components/AppFonts";
import { Gap } from "../../../../components/AppSpecialComponents";
import { Flex } from "../../../../utils/AppEnums";
import { AppColors } from "../../../../utils/Pallete";

const GoalBar = styled.View`
  width: 100%;
  height: 15px;
  border-radius: 9999px;
  border-color: ${AppColors.altBlack};
  border-width: 1px;
  background-color: ${AppColors.white};
`;
const ProgressBar = styled.View`
  width: ${({ progress = 0 }) => `${progress}%`};
  height: 15px;
  border-radius: 9999px;
  border-color: ${AppColors.altBlack};
  border-width: 1px;
  background-color: ${({ progressBarColor }) => progressBarColor};
  position: absolute;
`;

const BoxShadow = styled.View`
  background-color: ${AppColors.black};
  border-radius: 10px;
  width: 100%;
  height: 15px;
  position: absolute;
  bottom: -11%;
  left: 1%;
  z-index: -9999;
`;

export default function ProgressBarShadow({
  total = 100,
  actualProgress = 50,
  actualProgressColor = AppColors.green,
  ProgressText = "No",
  BarWidth = "83%",
}) {
  const progressPercentage = (actualProgress / total) * 100;
  return (
    <Row width={"100%"} alignItems={Flex.center}>
      {ProgressText == "No" ? (
        <>
          <GoalBar />
          <ProgressBar
            progress={progressPercentage}
            progressBarColor={actualProgressColor}
          />
          <BoxShadow />
        </>
      ) : (
        <>
          <BodyLarge color={AppColors.altBlack}>{`${progressPercentage.toFixed(
            0
          )}%`}</BodyLarge>
          <Gap width={5} />
          <Row width={BarWidth} alignItems={Flex.center}>
            <GoalBar />
            <ProgressBar
              progress={progressPercentage}
              progressBarColor={actualProgressColor}
            />
            <BoxShadow />
          </Row>
        </>
      )}
    </Row>
  );
}
