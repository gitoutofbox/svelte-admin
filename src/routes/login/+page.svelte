<script lang="ts">
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import Seo from "$lib/Seo.svelte";
    import type { ActionData } from "./$types";
    let serverError = "";
    let isLoginProgressing = false;

    // export let data;
    export let form;
    // $: {
    //     if(form?.success) {
    //         goto('/student/list')
    //     }
    // }
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
                alt="Sample"
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
            novalidate
                method="POST"
                action="?/login"
                use:enhance={() => {
                    return async ({ update }) => {
                      await update({ reset: false });
                    };
                  }}
            >
                <div class="form-group">
                    <label class="sr-only" for="userEmail">Email address</label>
                    <input
                        type="email"
                        class="form-control"
                        id="userEmail"
                        name="email"
                        placeholder="Enter email"
                        value="admin@email.com"
                        class:is-invalid={form?.errors?.email}
                    />
                    {#if form?.errors?.email}
                        <div class="invalid-feedback">{form?.errors?.email}</div>
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
                        value="admin"
                        class:is-invalid={form?.errors?.password}
                    />
                    {#if form?.errors?.password}
                        <div class="invalid-feedback">{form?.errors?.password}</div>
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
                        <div
                            class="spinner-border spinner-border-sm text-light"
                            role="status"
                        />
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
