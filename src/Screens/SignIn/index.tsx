import React from "react";
import { 
    View, 
    Text, 
    Image,
    StatusBar, 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./style";


export function SignIn(){
    const navigation = useNavigation();
    
    
    
    function handleSignIn() { // Função para levar para a página Home
        navigation.navigate('Home')
    }



    return(
        <View style={styles.container}> 
            
            <Image 
            source={IllustrationImg} 
            style={styles.image} 
            resizeMode='stretch' // faz com que a imagem seja alargada conforme a tela
        />

        <View style={styles.content}>

            <Text style={styles.title}>
                Conecte-se {'\n'}
                e organize suas {'\n'}
                jogatinas {'\n'}
            </Text>

            <Text style={styles.subtitle}>
                Crie grupos para jogar seus games {`\n`}
                favoritos com seus amigos 
            </Text>

            <ButtonIcon 
            title='Entrar com Discord'
            onPress={handleSignIn} // Quando pressionado, o botão utilizada função de navegação
            />

        </View>

        </View>
        
    )
}