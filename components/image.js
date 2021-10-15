import { getStrapiMedia } from "../lib/media";

const Image = ({ image, style }) => {
    const imageUrl = getStrapiMedia(image);

    return (
        <img
            src={imageUrl}
            alt={image ? image.alternativeText || image.name : ''}
            style={style}
        />
    );
};

export default Image;