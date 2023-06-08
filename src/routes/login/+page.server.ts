import * as yup from "yup";
import { createForm } from "svelte-forms-lib";
import { goto } from "$app/navigation";
import { redirect, type Cookies } from "@sveltejs/kit";

export const load = () => {
}
const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Invalid email")
        .required("Please enter a valid email")
        .test('is-admin@email.com',
            (d) => `Please use admin@email.com`,
            (value) => value == null || value === 'admin@email.com'),
    password: yup.string()
    .required("Please enter password")
    .test('is-admin',
            (d) => `Please use admin as password`,
            (value) => value == null || value === 'admin'),
});

const makeLogin = (userData: {[k: string]: FormDataEntryValue;}, cookies: Cookies) => {
    cookies.set('isLoggedIn', 'true', {path: "/", sameSite: 'strict'});
}
export const actions = {
    login: async ({ request, cookies }) => {
        let err: any = { email: '', password: '' };
        let isError = true;
        
        const formData = Object.fromEntries(await request.formData());
        try {
            const validation = await validationSchema.validate(formData, { abortEarly: false });
            makeLogin(formData, cookies);
            isError = false;
        } catch (e: any) {
            isError = true;
            e?.inner.forEach((error: any) => {
                err[error.path] = error.message;
            });
        }
        if(isError) {
            return {
                hasError: isError,
                formData,
                errors: { ...err }
            };
        } else {
            throw redirect(302, '/student/list');
        }
    }
}