import { redirect } from "@sveltejs/kit";

const unProtectedRoutes = ['/', '/login', '/about', '/contact'];
export const handle = async ({ event, resolve }) => {
    const isLoggedIn = !!(event.cookies.get('isLoggedIn'));
    // const currentRoute = event.route.id;

    if (!isLoggedIn && !unProtectedRoutes.includes(event.url.pathname)) {
        throw redirect(303, '/login');
    }

    const query = event.url.searchParams.get('signout');
    console.log('query', query)
    if (Boolean(query) == true) {
        await event.cookies.delete('isLoggedIn', { path: '/' });
        throw redirect(303, '/login');
    }
    return resolve(event)
}