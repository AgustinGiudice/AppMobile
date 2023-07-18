import react from "react";
import Constants from 'expo-constants';
import { Text, View, TouchableWithoutFeedback, Alert } from "react-native-web";
import RepositoryList from "./RepositoryList";
const Main = () => {
    return(
        <View style={{marginTop: Constants.statusBarHeight, flexGrow:1}}>
            <TouchableWithoutFeedback 
                onPress={() => Alert.alert("Trabajamos hasta tenerla")}>
                <Text>PLAY 5</Text>
            </TouchableWithoutFeedback>
            <RepositoryList></RepositoryList>
        {/* <StatusBar style="auto" /> */}
        </View>
    )
}

export default Main;