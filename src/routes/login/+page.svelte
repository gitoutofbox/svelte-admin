<script lang="ts">
    import { goto } from "$app/navigation";
    import Seo from "$lib/Seo.svelte";
    import { createForm } from "svelte-forms-lib";
    import * as yup from "yup";

    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required("Please enter a valid email"),
        password: yup.string().required("Please enter password"),
    });
    const { form, errors, handleChange, handleSubmit } = createForm({
        initialValues: { email: "", password: "" },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            onsubmit: onSubmit(values).then((isSuccess) => {
                if (isSuccess) {
                    goto("student/list");
                } else {
                    alert()
                }
            }) .catch(error => {
                alert(error)
            });
        },
    });

    const onSubmit = async (formData: any) => {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                if(formData.email === 'admin' && formData.password === 'admin'){
                    resolve(true);
                } else {
                    reject('invalid credentials')
                }
                console.log(formData);
                
            }, 1000);
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
            <form method="POST" on:submit|preventDefault={handleSubmit} novalidate>
                <div class="form-group">
                    <label class="sr-only" for="userEmail">Email address</label
                    >
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
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</section>

<style>
    section {
        margin: 10px auto;
    }
</style>
