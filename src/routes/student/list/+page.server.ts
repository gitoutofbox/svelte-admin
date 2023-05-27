export const load = async () => {
    const getStudentList = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users?_delay=5000');
        const students = await res.json();
        return students;
    };

    return {
        students: getStudentList()
    }
}