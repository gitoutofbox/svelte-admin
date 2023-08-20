import { API_BASE } from "$env/static/private";

export const load = async () => {
    const getLatestPost = async () => {
        console.log('Load lastes post form API')
        const res = await fetch(`${API_BASE}/posts/1`);
        const posts = await res.json();
        return posts;
    };

    return {
        latestPost: getLatestPost() 
    }
}

// export const prerender = true;
// export const ssr = true;