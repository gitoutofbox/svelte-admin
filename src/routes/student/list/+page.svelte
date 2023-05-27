<script>
    export let data;
    const { students } = data;

    import FlashMessage from "$lib/messages.svelte";
    import { page } from "$app/stores";
    const status = $page.url.searchParams.get("status");
    // export let statusMessage = {type:'', message:''};
    // $: {
    //     const status = $page.url.searchParams.get('status');
    //     if(status) {
    //         statusMessage.type = messages[status].type;
    //         statusMessage.message = messages[status].message;
    //     }
    // }
</script>

<h1>Studens</h1>
<FlashMessage messageCode={status ? status : ""} />
<!-- <h3 class="status-message status-message--{statusMessage.type}">{statusMessage.message}</h3> -->
<table>
    <tr>
        <th>#ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
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
            </tr>
        {/each}
    {:catch error}
        <p>{error}</p>
    {/await}
</table>

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
