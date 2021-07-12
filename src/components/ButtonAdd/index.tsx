import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from "./style";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps; // define tipagem / e as propriedades dessa tipagem são todas as propriedades do RectButton mais as propriedades que eu definir além (representado pelas chaves)



export function ButtonAdd({...rest}: RectButtonProps) {
    return(
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <MaterialCommunityIcons 
            name="plus"
            color={theme.colors.heading}
            size={24}
            />
            
          
        </RectButton>
    )
}