export const load = async ({ params }) => {
    return {
        user: {
            id: '',
            name: '',
            phone: ''
        }
    };
}

/** @type {import('./$types').Actions} */

export const actions = {
    update: async ({ request }) => {
        console.log('Form submitted with update action')
        const formData = Object.fromEntries(await request.formData());
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${formData.id}`, {
            method: 'PATCH',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        // const test = await res.json();
        return {
            success: true,
            formData
        };
    }
};