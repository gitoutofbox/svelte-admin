import { redirect } from '@sveltejs/kit';
import { page } from '$app/stores';
/** @type {import('./$types').PageServerLoad} */
export const load = async ({params}) => {
    // const isLoggedIn = cookies.get('isLoggedIn') === 'true';
    // if(!isLoggedIn) {
    //     throw redirect(302 ,'/login')
    // }

    // console.log({page.path})
}