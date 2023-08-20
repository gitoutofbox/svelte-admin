import { redirect } from '@sveltejs/kit';
import { API_BASE} from '$env/static/private';

export const load = async ({cookies}) => {
    // const isLoggedIn = cookies.get('isLoggedIn') === 'true';
    // if(!isLoggedIn) {
    //     throw redirect(302 ,'/login')
    // }
    const getStudentList = async () => {
        const res = await fetch(`${API_BASE}/users?_delay=5000`);
        const students = await res.json();
        return students;
    };

    return {
        students: getStudentList()
    }
}