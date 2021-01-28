import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Course from './Course';
import { hasConflict } from '../utils/course'

const CourseSelector = ({ courses, view }) => {
    const [selected, setSelected] = useState([]);
  
    // toggle function is to either remove or add the course to the selected list
    const toggle = course => setSelected(selected => (
        // check if current course is in the selected list
        // if it does, use filter function to remove it from the selected list
        // otherwise, append it to the selected list
        selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    ));
  
    return (
      <View style={styles.courseList}>
        {
          courses.map(course => (
            <Course key={course.id} course={course}
              isDisabled={hasConflict(course, selected)}
            //   isSelected={selected.includes(course) ? '#004a99' : '#66b0ff'}
              isSelected={selected.includes(course)}
              select={ toggle }
              view = { view }
            />
          ))
        }
      </View>
    );
};

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
});

export default CourseSelector;