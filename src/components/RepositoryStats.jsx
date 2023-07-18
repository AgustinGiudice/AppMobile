import { View } from "react-native-web";
import StyledText from "./StyledText";

const parseThousands = (value) => {
    return value >= 1000
    ? `${Math.round(value / 100) / 10} k`
    : String(value)
}

const RepositoryStats = (props) =>{
    return(
        <View style={{flexDirection: "row", justifyContent:"space-around"}}>
            <View>
                <StyledText fontWeight="bold">Stars</StyledText>
                <StyledText aling="center">{parseThousands(props.stargazersCount)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold">Forks</StyledText>
                <StyledText aling="center">{parseThousands(props.forksCount)}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold">Review</StyledText>
                <StyledText aling="center">{props.reviewCount}</StyledText>
            </View>
            <View>
                <StyledText fontWeight="bold">Rating</StyledText>
                <StyledText aling="center">{props.ratingAverage}</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStats;