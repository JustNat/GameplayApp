import React , { useState } from "react";
import { View, FlatList, Text } from "react-native";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./style";

export function Home(){
    const [category, setCategory] = useState('')

    const appoinments = [{
        id: '1',
        guild: {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        category: '1',
        date: '22/06 às 20:40h',
        description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
        id: '2',
        guild: {
            id: '1',
            name: 'Gpeis',
            icon: null,
            owner: true
        },
        category: '1',
        date: '32/02 às 05:90h',
        description: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    },
]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId) // Se o ID atual for o mesmo que eu clico, tire-o, senão, coloque-o.
    }

    return(
        <View>
            
            <View style={styles.header}> 
                <Profile />
                <ButtonAdd /> 
            </View>

                    <CategorySelect
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />

                    <View style={styles.content}>
                        <ListHeader
                        title="Partitdas agendadas"
                        subtitle="Total 6"
                        />

                        <FlatList // FlatList indicada para uma maior quantidade de itens, dando mais desempenho que a Scroll
                            data={appoinments}
                            keyExtractor={item => item.id}
                            renderItem= {({ item }) => (
                            <Appointment data={item} />
                            )}
                            ItemSeparatorComponent={() => <ListDivider />} // ItemSeparator já faz com que o componente que eu colocar vire um separador de lista
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
        </View>
    )
}