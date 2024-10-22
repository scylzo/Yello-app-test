
import { StyleSheet, View, FlatList } from 'react-native'
import CourseItem from './CourseItem';
import { NavigationProp } from '@react-navigation/native';
import { Course, MainParamList, PAGES } from 'types/Types';
import { FC } from 'react';



interface CourseListProps {
  courses: Course[]
  navigation: NavigationProp<MainParamList, PAGES.Detail>
}


const CourseList: FC<CourseListProps> = ({ navigation, courses }) => {


  const handleShowDetail = (course: Course) => {
    navigation.navigate(PAGES.Detail, {
      course
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list
        }
        showsVerticalScrollIndicator={false}
        data={courses}
        keyExtractor={(_i, index) => index.toString()}
        renderItem={({ item }) => <CourseItem course={item} onPress={handleShowDetail} />}
      />
    </View>
  )
}

export default CourseList

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    paddingHorizontal: 20
  }

})