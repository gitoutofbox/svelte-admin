import { writable } from 'svelte/store';

export const globalLoaderStore = writable(false);
export const containerClassStore = writable('container');