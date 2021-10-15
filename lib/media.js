import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {

    const imageUrl = media && media.url.startsWith("/")
        ? getStrapiURL(media.url)
        : media.url;
    return imageUrl;
}