import { redirect } from "@sveltejs/kit";

declare global {
    namespace App {
        interface Locals {
            auth: any
        }

        interface Platform { }

        interface Session { }

        interface Stuff { }
    }
}

const unProtectedRoutes = ['/', '/login', '/about', '/contact', '/parallax', '/home'];
export const handle = async ({ event, resolve }) => {
    const isLoggedIn = !!(event.cookies.get('isLoggedIn'));
    // const currentRoute = event.route.id;

    if (!isLoggedIn && !unProtectedRoutes.includes(event.url.pathname)) {
        throw redirect(303, '/login');
    }

    event.locals.auth = {
        isLoggedIn: true
        // other user detials to go here
    }

    const query = event.url.searchParams.get('signout');
    if (Boolean(query) == true) {
        await event.cookies.delete('isLoggedIn', { path: '/' });

        throw redirect(303, '/login');
    }
    event.setHeaders({ 'appname': 'student-admin' })
    return resolve(event)
}