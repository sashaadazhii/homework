let classroomS = [
    { name: 'classroom1', places: 15, faculty: 'ecomomy', },
    { name: 'classroom2', places: 10, faculty: 'engineering', },
    { name: 'classroom3', places: 15, faculty: 'sport', },
    { name: 'classroom4', places: 12, faculty: 'ecomomy', },
];

function printAllClassrooms() {
    for (let i = 0; i < classroomS.length; i++) {
        document.write(classroomS[i]['name'] + ' ');
    }
}
printAllClassrooms();

function printClassroom(facultyName) {
    for (let i = 0; i < classroomS.length; i++) {
        if (facultyName === classroomS[i]['faculty']) {
            return document.write(classroomS[i]['name']);
        } else { return document.write('Enter correct faculty') };
    }
}
printClassroom('engineeing');

function printClassForGroup(obj) {

}