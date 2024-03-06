import { useQuery } from "@tanstack/react-query";
import { GalleryTypes } from "./useGalleryTypes";
import { useParams, useSearchParams } from "react-router-dom";
import { getGallery, getOneGallery } from "../api/apiGallery";

type Gallery = {
    title: string;
    _id:string;
    url:string;
    picture:string;
    type: GalleryTypes
}

type Props = {
    status:string;
    results:string;
    data: Gallery[]
}
type Prop = {
    status:string;
    results:string;
    data: Gallery
}

type Params = {
    type?: string; // Define types for known parameters. '?' indicates optional.
    [key: string]: string | undefined; // Allow other string parameters
};

export function useGetGallery(){
    const [setSearchParams] = useSearchParams()
    let p: Params = {};

    if (setSearchParams.has('type')) {
        p["type"] = setSearchParams.get('type') || undefined;
    }
    const { isLoading, data: galleries } = useQuery({
        queryKey: [setSearchParams.get('type')],
        queryFn: () => getGallery(p)
    });

    return {galleries:galleries as Props, isLoading}
}
export function useGetOneGallery(){
    
    const {galleryId} = useParams()
    const { isLoading, data: gallery } = useQuery({
        queryKey: [galleryId],
        queryFn: () => getOneGallery(galleryId as string)
    });

    return {gallery:gallery as Prop, isLoading}
}