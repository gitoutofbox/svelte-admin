<script lang="ts">
    interface Message {
        code: string;
        type: string;
        message: string;
    }

    export const messages: Array<Message> = [
        { code: "1", type: "success", message: "Added successfully" },
        { code: "2", type: "error", message: "Failed to add" },
        { code: "3", type: "success", message: "Updated successfully" },
        { code: "4", type: "error", message: "Failed  to update" },
        { code: "5", type: "success", message: "Deleted successfully" },
        { code: "6", type: "error", message: "Failed to delete" },
    ];
    export let messageCode: string;
    let flashMessage: Message;
    $: {
        if (messageCode) {
            console.log('aaaaaaaaa')
            const messageObj = messages.filter(
                (item) => item.code === messageCode
            );
            if (messageObj.length) {
                flashMessage = { ...messageObj[0] };
                let timeout = setTimeout(() => {
                    flashMessage = { code: "", type: "", message: "" };
                    clearTimeout(timeout);
                }, 5000);
            }
        }
    }
</script>

{#if flashMessage?.type}
    <div class="alert alert-{flashMessage?.type}" role="alert">
        {flashMessage?.message}
    </div>
{/if}
