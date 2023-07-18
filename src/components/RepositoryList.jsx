import { Text, FlatList} from "react-native-web";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
    return(
        <FlatList 
            data={repositories}
            itemSeparatorComponent={() => <Text>  </Text>}
            renderItem={ ({item:repo}) => (
                <RepositoryItem {...repo} />
            )}
        >
        </FlatList>
    )
}

export default RepositoryList;