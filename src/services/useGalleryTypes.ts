import { useQuery } from "@tanstack/react-query";
import { getGalleryTypes } from "../api/apiGalleryType";

export type GalleryTypes = {
    title: string;
    _id:string;
}

type Props = {
    status: string;
    results: number;
    data: GalleryTypes[]
}
export function useGetGalleryTypes(){
    const {isLoading, data: galleryTypes} = useQuery({
        queryKey:['gallery_types'],
        queryFn: getGalleryTypes
    })
    return {galleryTypes: galleryTypes as Props, isLoading}
}