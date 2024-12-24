

import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const images = await getGifts(category);
        setImages(images);
        setIsLoading(false);
        // console.log(images);
    }

    useEffect(() => {
        getImages();
    }, []);

    //cuando los valores son los mismos se puede colocar una sola vez
    return {
        images,
        isLoading: isLoading
    }
}
