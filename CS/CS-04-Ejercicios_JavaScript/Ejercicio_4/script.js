console.log('Ejercicio 4');

const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];

const commonCourses = student1Courses.filter(course => student2Courses.includes(course));

  if (commonCourses.length > 0) {
    commonCourses.forEach(course => {
      console.log('Cursos en común: ' + course);
    });
  } else {
    console.log('No existen cursos en común.');
}
