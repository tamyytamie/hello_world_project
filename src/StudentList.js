import React from "react";

const StudentList = () => {
    const students = [
        {id: 1, name: 'Tahreem'},
        {id: 2, name: 'Areesha'},
        {id: 3, name: 'Salma'},
    ];

return (
    <ul>
        {students.map((student) => (<Student key={student.id} id={student.id} name={student.name}
        />
        ))}
    </ul>
);
};

const Student = ({ id, name }) => {
    return <li>{`${id}: ${name}`}</li>;
};

export default StudentList;