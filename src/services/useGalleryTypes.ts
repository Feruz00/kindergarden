import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createGalleryTypes, deleteGalleryTypes, getGalleryTypes, updateGalleryTypes } from "../api/apiGalleryType";
import toast from "react-hot-toast";

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

export function useDeleteGalleryType(){
    
    const queryClient = useQueryClient()
    
    const {isPending, mutate: deleteGalleryTypeFn} = useMutation({
        mutationFn: (id:string) => deleteGalleryTypes(id),
        onSuccess: ()=>{
            toast.success('Üstünlikli pozuldy')
            queryClient.invalidateQueries({
                queryKey: ['gallery_types']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, deleteGalleryTypeFn}
}

export function useUpdateGalleryType(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: updateGalleryTypeFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: GalleryTypes }) => updateGalleryTypes(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['gallery_types']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateGalleryTypeFn}
}
export function useCreateGalleryType(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: createGalleryTypeFn } = useMutation({
        mutationFn: (data:any) => createGalleryTypes( data),
        onSuccess: ()=>{
            toast.success('Üstünlikli döredildi')
            queryClient.invalidateQueries({
                queryKey: ['gallery_types']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, createGalleryTypeFn}
}