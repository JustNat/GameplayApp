// tipagem de arquivos svg
declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>; // React.FC = o conteúdo é um componente funcional
    export default content;
}