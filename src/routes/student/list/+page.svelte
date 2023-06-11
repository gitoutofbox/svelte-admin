<script lang="ts">
    type Student = {
        id: string | number;
        name: string;
        phone: number | string;
    };

    export let data;
    const { students } = data;
    import { globalLoaderStore } from '../../../store/store';
    import FlashMessage from "$lib/messages.svelte";
    import { page } from "$app/stores";
    import Seo from "$lib/Seo.svelte";
    import Modal from "$lib/Modal.svelte";
    import { PUBLIC_API_BASE } from "$env/static/public";
    let status = $page.url.searchParams.get("status");

    let showModal = false;
    let student: Student;
    const askDeleteConfirmation = (studentItem: Student) => {
        showModal = true;
        student = { ...studentItem };
    };
    const deleteStudent = async () => {
        globalLoaderStore.set(true);
        showModal = false;
        try {
            const resp = await fetch(`${PUBLIC_API_BASE}/users/${student.id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            status = '5';
            globalLoaderStore.set(false);
        } catch (error) {
            status = '6';
            globalLoaderStore.set(false);
        }
    };
</script>

<Seo
    title="Student list | Learn Svelte"
    description="List of students"
    type="Students"
    name="Svelte website student list"
/>
<FlashMessage messageCode={status ? status : ""} />

<div class="row">
    <div class="col">
        <h1>Studens</h1>
    </div>
    <div class="col-2 my-auto text-end">
        <a class="link-dark" href="/student/create">+ Create</a>
    </div>
</div>

<table>
    <tr>
        <th>#ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Action</th>
    </tr>
    {#await students}
        <p>Working...</p>
    {:then students}
        {#each students as student}
            <tr>
                <td>{student.id}</td>
                <td>
                    <a href={student.id}>{student.name}</a>
                </td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>
                    <button
                        class="btn btn-anchor"
                        on:click={() => askDeleteConfirmation(student)}
                        >Delete</button
                    >
                </td>
            </tr>
        {/each}
    {:catch error}
        <p>{error}</p>
    {/await}
</table>

<Modal bind:showModal>
    <h2 slot="header">Modal</h2>
    Are you sure you want to delete {student?.name}?
    <div slot="footer">
        <button class="btn btn-danger" on:click={deleteStudent}>Yes</button>
        <button class="btn btn-default" on:click={() => showModal = false}>No</button>
    </div>
</Modal>

<style>
    table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    table td,
    table th {
        border: 1px solid #ddd;
        padding: 15px 10px;
    }

    table tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    table tr:hover {
        background-color: #ddd;
    }

    table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04aa6d;
        color: white;
    }
</style>
