import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler"; // elemento de clique que preserva elementos do android e IOS
import {
    Text,
    Image, 
    View,
} from 'react-native'

import DiscordImg from '../../assets/discord.png'
import { styles } from "./style";

type Props = RectButtonProps & { // define tipagem / e as propriedades dessa tipagem são todas as propriedades do RectButton mais as propriedades que eu definir além (representado pelas chaves)
    title: string;
}

export function ButtonIcon({ title, ...rest } : Props){ // o title é aplicado na função e o rest possibilita deixar as propriedades que eu não definir livres para defini-las em outro local
    return(
        <RectButton 
        style={styles.container} 
        {...rest}
        >

            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
                { title }
            </Text>

        </RectButton>
    )
}