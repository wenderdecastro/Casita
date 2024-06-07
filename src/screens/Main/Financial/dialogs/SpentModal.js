import { useState } from "react";
import AppDialog from "../../../../components/AppDialog";
import { SpentTypeButtons } from "../../../../utils/AppEnums";
import ButtonSelector from "../../../../components/ButtonSelector";
import { AppColors } from "../../../../utils/Pallete";

export default function SpentModal({ visible, onClose }) {
  const [selected, setSelected] = useState(0);

  return (
    <AppDialog paddingInside={16} padding={15} visible={visible} onClose={onClose}>
      <ButtonSelector
        selectedColor={AppColors.green}
        selected={selected}
        isCompact={true}
        buttonList={SpentTypeButtons}
        mainColor={AppColors.white}
        mainTextColor={AppColors.black}
        handleTabSelected={(val) => {
          setSelected(val);
        }}
      />
    </AppDialog>
  );
}
