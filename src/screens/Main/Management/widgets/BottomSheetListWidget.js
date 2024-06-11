import React from 'react'
import { Column } from '../../../../components/AppContainers'
import { TitleExtraLarge } from '../../../../components/AppFonts'
import TaskCardWidget from './TaskCardWidget'
import { Gap } from '../../../../components/AppSpecialComponents'
import { AppColors } from '../../../../utils/Pallete'

export default function BottomSheetListWidget({ label, data }) {
    return (
        <Column>
            <TitleExtraLarge size={14} color={AppColors.black}>{label}</TitleExtraLarge>
            <Gap height={10} />
            {data.map((item, index) => (
                <React.Fragment key={Math.random()}>
                    <TaskCardWidget
                        onTap={() => tapAction(item)}
                        item={item}
                    />
                    {index !== data.length - 1 && <Gap height={20} />}
                </React.Fragment>
            ))}
        </Column>
    );
}
