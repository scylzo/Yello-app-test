import { StyleSheet, TextInput, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { FC, useState } from 'react';
import { COLORS } from 'constant/colors';

interface SearchInputProps {
    handleChange: (text: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ handleChange }) => {

    const [searchText, setSearchText] = useState<string>('')

    const handleInputChange = (text: string) => {
        setSearchText(text);
        handleChange(text);
    };


    return (
        <View style={styles.searchInputContainer}>
            <AntDesign name="search1" size={24} color={COLORS.secondaryAccent} />
            <TextInput style={styles.textInput} placeholder='Rechercher un cours' value={searchText} onChangeText={handleInputChange} />
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    searchInputContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 3,
        marginHorizontal: 20
    },
    textInput: {
        fontSize: 16
    }

})