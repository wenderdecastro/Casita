import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';

const IconFamily = {
    antDesign: AntDesign,
    entypo: Entypo,
    evilIcons: EvilIcons,
    feather: Feather,
    fontAwesome: FontAwesome,
    fontAwesome5: FontAwesome5,
    fontAwesome6: FontAwesome6,
    fontisto: Fontisto,
    foundation: Foundation,
    ionIcons: Ionicons,
    materialCommunityIcons: MaterialCommunityIcons,
    materialIcons: MaterialIcons,
    octicons: Octicons,
    simpleLineIcons: SimpleLineIcons,
    zocial: Zocial
};

export const AppIconName = {
    default : {
        name: 'disabled-by-default',
        family: IconFamily.materialIcons
    },
    eye: {
        name: 'eye',
        family: IconFamily.ionIcons
    },
    eyeOff: {
        name: 'eye-off',
        family: IconFamily.ionIcons
    },
    home: {
        name: "home",
        family: IconFamily.fontAwesome
    },
    checkTask : {
        name: "checkbox",
        family: IconFamily.foundation
    },
    financialGraph: {
        name: "bar-graph",
        family: IconFamily.entypo,
    },
    arrowDown : {
        name: 'keyboard-arrow-down',
        family: IconFamily.materialIcons
    },
    shoppingCart: {
        name: 'shopping-cart',
        family: IconFamily.entypo
    },
    asterisk: {
        name: 'star-of-life',
        family: IconFamily.fontAwesome5
    },
    add: {
        name: 'add',
        family: IconFamily.materialIcons,
    }
};



export default function AppSvgIcon({ name = AppIconName.default, size = 24, color = "black" }) {

    const iconName = name.name;
    const IconComponent = name.family;

    return <IconComponent  name={iconName} size={size} color={color} />;

}