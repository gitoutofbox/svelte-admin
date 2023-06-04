<script lang="ts">
    import { goto } from "$app/navigation";
    import Seo from "$lib/Seo.svelte";
    import { createForm } from "svelte-forms-lib";
    import * as yup from "yup";
    let serverError = "";
    let isLoginProgressing = false;

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Invalid email")
            .required("Please enter a valid email"),
        password: yup.string().required("Please enter password"),
    });
    const { form, errors, handleChange, handleSubmit } = createForm({
        initialValues: { email: "", password: "" },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            serverError = "";
            onsubmit: onFormSubmit(values)
                .then((isSuccess) => {
                    if (isSuccess) {
                        goto("student/list");
                    }
                })
                .catch((error) => {
                    serverError = error;
                });
        },
    });

    const onFormSubmit = async (formData: any) => {
        isLoginProgressing = true;
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    formData.email === "admin@email.com" &&
                    formData.password === "admin"
                ) {
                    resolve(true);
                } else {
                    reject("Invalid credentials. Use admin@email.com/admin");
                }
                console.log(formData);
                isLoginProgressing = false;
            }, 3000);
        });
    };
</script>

<Seo
    title="Login | Learn Svelte"
    description="Login to website"
    type="Login"
    name="Svelte website login"
/>
<section>
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
            />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            {#if serverError}
                <div class="alert alert-danger" role="alert">
                    {serverError}
                </div>
            {/if}
            <div class="text-secondary">Credentials: admin@email.com/admin</div>
            <form
                method="POST"
                on:submit|preventDefault={handleSubmit}
                novalidate
            >
                <div class="form-group">
                    <label class="sr-only" for="userEmail">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="userEmail"
                        name="email"
                        placeholder="Enter email"
                        bind:value={$form.email}
                        on:change={handleChange}
                        class:is-invalid={$errors.email}
                    />
                    {#if $errors.email}
                        <div class="invalid-feedback">
                            {$errors.email}
                        </div>
                    {/if}
                </div>
                <br />
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        name="password"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        bind:value={$form.password}
                        on:change={handleChange}
                        class:is-invalid={$errors.password}
                    />
                    {#if $errors.password}
                        <div class="invalid-feedback">
                            {$errors.password}
                        </div>
                    {/if}
                </div>
                <br />
                <button
                    type="submit"
                    class="btn btn-primary"
                    disabled={isLoginProgressing}
                >
                    Submit
                    {#if isLoginProgressing}
                        <div class="spinner-border spinner-border-sm text-light" role="status"></div>
                    {/if}
                </button>
            </form>
        </div>
    </div>
</section>

<style>
    section {
        margin: 10px auto;
    }
</style>
