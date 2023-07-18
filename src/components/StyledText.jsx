import { React, Children } from "react";
import {Text, StyleSheet} from "react-native";
import theme from '../theme.js'
const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },    
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading:{
        fontSize: theme.fontSizes.subheading
    },
    textAlingCenter:{
        textAlign:"center"
    }
})

const StyledText = ({children, color, fontSize, fontWeight, aling, style, ...restOfProps})  => {
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        aling === 'center' && styles.textAlingCenter,
        style
    ]

    return(
        <Text style={textStyles}>
            {children}
        </Text>
    );
}

export default StyledText;