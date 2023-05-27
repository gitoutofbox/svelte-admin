<script lang="ts">
    interface Message {code: string; type: string; message: string};

    export const messages: Array<Message> = [
        {code: '1', type: "success", message: "Added successfully" },
        {code: '2', type: "success", message: "Updated successfully" },
];
    export let messageCode: string;
    let flashMessage:Message;
    $: {
        if (messageCode) {
            const messageObj = messages.filter(item => item.code === messageCode);
            if(messageObj.length) {
                flashMessage = {...messageObj[0]};
                let timeout = setTimeout(() => {
                    flashMessage = {code: '', type: '', message: ''};
                    clearTimeout(timeout);
                }, 5000); 
            }
        }
    }
</script>

{#if flashMessage?.type}
    <h3 class="flash-message flash-message--{flashMessage?.type}">
        {flashMessage?.message}
    </h3>
{/if}

<style>
    .flash-message {
        text-align: center;
    }
    .flash-message--success {
        color: #04aa6d;
    }
</style>
