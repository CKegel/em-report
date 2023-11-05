import type { LayoutLoad } from './$types';
import "@picocss/pico";
export const ssr = false;
export const load = (async () => {
    return {};
}) satisfies LayoutLoad;