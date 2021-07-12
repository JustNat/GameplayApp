import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper' // elemento ajudante em relação a espaçamento de margem em Iphones com barra preta

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24, // padding é espaçamento interno
        flexDirection: 'row', // Por padrão, cada elemento fica embaixo do outro e não em "row"
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26, // aplicação do elemento de barra preta que afeta apenas Iphones
        marginBottom: 42,
    },
    content: {
        marginTop: 42,   
    },
    matches: {
       marginTop: 24,
       marginLeft: 24
    }
});