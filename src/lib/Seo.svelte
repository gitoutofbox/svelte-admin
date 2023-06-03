<script lang="ts">
    import { page } from "$app/stores";
    export let title: string = 'Svelte learning';
    export let description: string;
    export let type: string;
    export let name: string;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}" />
    {@html `
    <script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@type": "${type}",
        "name": "${name}",
        "description": "${description}",
        "url": "${$page.url.href}",
    }
    </script>`
    }
</svelte:head>
