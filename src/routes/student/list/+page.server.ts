import { redirect } from '@sveltejs/kit';

export const load = async ({cookies}) => {
    const isLoggedIn = cookies.get('isLoggedIn') === 'true';
    if(!isLoggedIn) {
        throw redirect(302 ,'/login')
    }
    const getStudentList = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users?_delay=5000');
        const students = await res.json();
        return students;
    };

    return {
        students: getStudentList()
    }
}