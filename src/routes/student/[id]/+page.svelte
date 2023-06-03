<script lang="ts">
    import { goto } from "$app/navigation";
    export let data;
    const { user } = data;
    import { createForm } from "svelte-forms-lib";
    import * as yup from "yup";

    const validationSchema = yup.object().shape({
        name: yup.string().required("Please enter a name"),
        email: yup.string().email().required("Please enter a valid email"),
        phone: yup.string().required("Please enter phone"),
    });
    const { form, errors, handleChange, handleSubmit } = createForm({
        initialValues: { ...user },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            updateStudent(values)
                .then((resp) => {
                    goto("list/?status=2");
                })
                .catch((error) => {});
        },
    });

    const updateStudent = async (formData: any) => {
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
    <div class="form-group">
        <label for="student-name">Name:</label>
        <input
            type="text"
            class="form-control"
            id="student-name"
            placeholder="Enter name"
            bind:value={$form.name}
            on:change={handleChange}
            class:is-invalid={$errors.name}
        />
        {#if $errors.name}<div class="invalid-feedback">
                {$errors.name}
            </div>{/if}
    </div>

    <div class="form-group">
        <label for="student-email">Email address:</label>
        <input
            type="email"
            class="form-control"
            id="student-email"
            placeholder="Enter email"
            bind:value={$form.email}
            on:change={handleChange}
            class:is-invalid={$errors.email}
        />
        {#if $errors.email}<div class="invalid-feedback">
                {$errors.email}
            </div>{/if}
    </div>

    <div class="form-group">
        <label for="student-phone">Phone:</label>
        <input
            type="text"
            class="form-control"
            id="student-phone"
            placeholder="Enter phone"
            bind:value={$form.phone}
            on:change={handleChange}
            class:is-invalid={$errors.phone}
        />
        {#if $errors.phone}<div class="invalid-feedback">
                {$errors.phone}
            </div>{/if}
    </div>
    <input type="hidden" name="id" bind:value={$form.id} />
    <br />
    <button class="btn btn-primary" type="submit">Save</button>
</form>
