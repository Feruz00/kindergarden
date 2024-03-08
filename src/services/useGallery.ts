import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GalleryTypes } from "./useGalleryTypes";
import { useParams, useSearchParams } from "react-router-dom";
import { createGallery, deleteGallery, getGallery, getOneGallery, updateFileGallery, updateGallery, updatePhotoGallery } from "../api/apiGallery";
import toast from "react-hot-toast";

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
        queryKey: ['gallery', setSearchParams.get('type') ],
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

export function useDeleteGallery(){
    
    const queryClient = useQueryClient()
    
    const {isPending, mutate: deleteGalleryFn} = useMutation({
        mutationFn: (id:string) => deleteGallery(id),
        onSuccess: ()=>{
            toast.success('Üstünlikli pozuldy')
            queryClient.invalidateQueries({
                queryKey: ['gallery']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, deleteGalleryFn}
}

export function useUpdateGallery(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: updateGalleryFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: Gallery }) => updateGallery(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['gallery']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateGalleryFn}
}
export function useUpdatePhotoGallery(){
    
    const queryClient = useQueryClient()
    const {isPending, mutate: updatePhotoGalleryFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: FormData }) => updatePhotoGallery(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['gallery']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updatePhotoGalleryFn}
}

export function useUpdateFileGallery(){
    
    const queryClient = useQueryClient()
    const {isPending, mutate: updateFileGalleryFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: FormData }) => updateFileGallery(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['gallery']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateFileGalleryFn}
}

export function useCreateGallery(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: createGalleryFn } = useMutation({
        mutationFn: (data:FormData) => createGallery( data),
        onSuccess: ()=>{
            toast.success('Üstünlikli döredildi')
            queryClient.invalidateQueries({
                queryKey: ['gallery']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, createGalleryFn}
}

