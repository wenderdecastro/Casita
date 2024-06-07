import { AppContainer, Row } from "../../../components/AppContainers";
import { Flex } from "../../../utils/AppEnums";
import { AppColors } from "../../../utils/Pallete";
import LeadingButtonWidget from "../../Authentication/widgets/LeadingButtonWidget";
import { LeadingBox } from "../../Authentication/widgets/RecoveryPasswordContainer";

export default function GoalsScreen({navigation}) {
  return (
    <AppContainer
      justifyContent={Flex.auto}
      backgroundColor={AppColors.background}
    >
      <Row width={'100%'}>
        
          <LeadingButtonWidget navigation={navigation} />
        
      </Row>
    </AppContainer>
  );
}
