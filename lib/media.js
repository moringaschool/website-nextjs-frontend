import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
    if (!media)
        return "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80";
    const imageUrl = media && media.url.startsWith("/")
        ? getStrapiURL(media.url)
        : media.url;
    return imageUrl;
}