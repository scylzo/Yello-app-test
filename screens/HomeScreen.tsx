import { StyleSheet, View } from 'react-native'

import CourseList from 'components/CourseList';
import Header from 'components/Header';
import SearchInput from 'components/SearchInput';
import { NavigationProp } from '@react-navigation/native';
import { MainParamList, PAGES } from 'types/Types';
import { FC, useState } from 'react';
import { courses } from 'services/courses';


interface HomeScreenProps {
    navigation: NavigationProp<MainParamList, PAGES.Detail>
}


const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {

    const [filteredCourses, setFilteredCourses] = useState(courses);


    const handleSearch = (text: string) => {
        if (text === '') {
            setFilteredCourses(courses);
        } else {
            const filtered = courses.filter((course) =>
                course.title.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredCourses(filtered);
        }
    };



    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.mainSection}>
                <SearchInput handleChange={handleSearch} />
                <CourseList navigation={navigation} courses={filteredCourses} />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
    },
    mainSection: {
        flexDirection: "column",
        gap: 20,
        paddingTop: 20,
        flex: 1,

    }
})