import { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import useCourseEmoji from 'hooks/useGetCoursesEmoji';
import { Course } from 'types/Types';
import { COLORS } from 'constant/colors';
import AntDesign from '@expo/vector-icons/AntDesign';

interface CourseItemProps {
    course: Course,
    onPress: (course: Course) => void
}

const CourseItem: FC<CourseItemProps> = ({ course, onPress }) => {

    const { getCourseEmoji } = useCourseEmoji();
    const handlePress = () => onPress(course)

    return (
        <TouchableOpacity style={styles.courseItem} onPress={handlePress}>
            <Text style={styles.title}>{getCourseEmoji(course.title)} {course.title}</Text>
            <Text style={styles.description} numberOfLines={1}>{course.description}</Text>
            <Text style={styles.level}>Niveau : {course.level}</Text>
            <View style={styles.eye}>
                <AntDesign name="eye" size={24} color="black" />
            </View>
        </TouchableOpacity>

    );
};


export default CourseItem


const styles = StyleSheet.create({

    courseItem: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: COLORS.primaryAccent,
        borderRadius: 8,
        position: "relative",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.10,
        shadowRadius: 2,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        marginBottom: 5,
    },
    level: {
        fontSize: 12,
        color: COLORS.textColor,
        marginBottom: 10,
    },
    eye: {
        position: "absolute",
        right: 5,
        bottom: 1
    }
});