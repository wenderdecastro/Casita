import styled from "styled-components"
import { AppColors } from "../../../../utils/Pallete"

const ViewIncome = styled.View`
    background-color: ${({ backgroundColor = AppColors.green }) => backgroundColor};
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${AppColors.black};

    align-items: center;
`

const BoxShadow = styled.View`
    background-color: ${AppColors.black};
    border-radius: 10px;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: ${({ bottom }) => `${bottom}%`};
    left: ${({ left }) => `${left}%`};
    z-index: -9999;
`

const BoxIncome = styled.View`
    width: ${({ width }) => `${width}`};
    height: ${({ height }) => `${height}px`};
    margin-top: ${({ marginTop }) => `${marginTop}px`};
`

export default function ContainerShadow({
    width= 100, 
    height= 100,
    backgroundColor,
    Content,
    marginTop,
    bottom = -7,
    left = 1.5,
}) {
    return(
    <BoxIncome width={width} height={height}  marginTop={marginTop}>
        <ViewIncome backgroundColor={backgroundColor}>
            {Content}
        </ViewIncome>
        <BoxShadow bottom={bottom} left={left}/>
    </BoxIncome>
    )
}