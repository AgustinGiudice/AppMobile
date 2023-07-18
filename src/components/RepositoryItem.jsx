import { View, StyleSheet, Image} from "react-native-web";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme";

const RepositoryItemHeader = ({ownerAvatarUrl, fullName, description, language}) =>{
    return(
        <View style={{ flexDirection: "Row" , paddingBottom: 2}}>
            <View style= {{ paddingRight: 10 }}>
                <Image style={styles.image} source={{ uri: ownerAvatarUrl }}></Image>
            </View>
            <View style={{ flex: 1 , width: 100}}>
                <StyledText fontWeight="bold">{fullName}</StyledText>
                <StyledText color="secondary"> {description}</StyledText>
                <StyledText style={styles.language} > {language}</StyledText>
            </View>
        </View>
    )
}

const RepositoryItem = (props) => {
    return(
        <View key={props.id} style={styles.container}>
            <RepositoryItemHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 15,
        paddingTop: 5
    },
    language: {
        padding:4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-start",
        borderRadius: 4,
        marginVertical: 4
    },
    image:{
        width:48,
        height:48,
        borderRadius:4,
    }
})

export default RepositoryItem;