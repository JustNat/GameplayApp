import React from "react";
import { Image } from "react-native";

import { styles } from "./style";


export function GuildIcon() {
    const uri = "https://icon-library.com/images/discord-icon-color/discord-icon-color-23.jpg"

    return(
        <Image
        source={{ uri }}
        style={styles.image}
        resizeMode="cover" // se a imagem não tiver uma proporção legal, ajuste-a
        />
    )
}