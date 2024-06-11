import React from 'react'
import { Column } from '../../../../components/AppContainers'
import { Gap } from '../../../../components/AppSpecialComponents'
import BuyCardWidget from './BuyCardWidget'

export default function BottomSheetDefaultListWidget({ data }) {
    return (
        <Column>
            <Gap height={10} />
            {data.map((item, index) => (
                <React.Fragment key={Math.random()}>
                    <BuyCardWidget item={item}/>
                    {index !== data.length - 1 && <Gap height={10} />}
                </React.Fragment>
            ))}
        </Column>
    )
}