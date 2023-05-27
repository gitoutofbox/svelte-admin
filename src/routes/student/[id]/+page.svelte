<script lang="ts">
    import { goto } from "$app/navigation";
    export let data;
    const { user } = data;
    import { createForm } from "svelte-forms-lib";
    import * as yup from "yup";

    const validationSchema = yup.object().shape({
        name: yup.string().required('Please enter a name'),
        email: yup.string().email().required('Please enter a valid email'),
        phone: yup.string().required('Please enter phone')
    });
    const { form, errors, handleChange, handleSubmit } = createForm({
        initialValues: {...user},
        validationSchema: validationSchema,
        onSubmit: (values) => {
            _updateStudent(values)
            .then((resp)=> {goto('list/?status=2');})
            .catch((error) => {})
        }
    });

    const _updateStudent = async (formData: any) => {
        return await fetch(
            `https://jsonplaceholder.typicode.com/users/${formData.id}`,
            {
                method: "PATCH",
                body: JSON.stringify(formData),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }
        );
    };
</script>

<h1>{user.name}</h1>

<form method="POST" on:submit|preventDefault={handleSubmit}>
    <label for="name">Name:</label><br />
    <input
        type="text"
        id="name"
        name="name"
        bind:value={$form.name}
        on:change={handleChange}
    />
    <br />
    {#if $errors.name}<small>{$errors.name}</small>{/if}
    <br /><br />

    <label for="email">Email:</label><br />
    <input
        type="text"
        id="email"
        name="email"
        bind:value={$form.email}
        on:change={handleChange}
    />
    <br />
    {#if $errors.email}<small>{$errors.email}</small>{/if}
    <br /><br />

    <label for="phone">Phone:</label><br />
    <input
        type="text"
        id="phone"
        name="phone"
        bind:value={$form.phone}
        on:change={handleChange}
    />
    <br />
    {#if $errors.phone}<small>{$errors.phone}</small>{/if}
    <br /><br />
    <input type="hidden" name="id" bind:value={$form.id} />

    <button>Submit</button>
</form>
