import React from "react";
import { NavigationContainer } from '@react-navigation/native'; // Responsável por guardas as rotas para por exemplo, dar um go back para rota anterior

import { AuthRoutes } from './auth.routes';

export function Routes(){
    return(
            <NavigationContainer> 
                <AuthRoutes />
            </NavigationContainer> 
    
    )
}