import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createAbout, deleteAbout, getAbouts, updateAboutInfo, updateAboutPhotos } from "../api/apiAbout";


export type AboutProp = {
    header: string;
    title: string;
    content: string;
    list?: string[];
    mainImg: string;
    smallImg?: string;
    _id:string;
}

type Props = {
    status: string;
    results: number;
    data: AboutProp[]
}
export function useGetAbouts(){
    const {isLoading, data: about} = useQuery({
        queryKey:['about', 'updabout'],
        queryFn: getAbouts
    })
    return {abouts: about as Props, isLoading}
}
export function useDeleteAbout(){
    
    const queryClient = useQueryClient()
    
    const {isPending, mutate: deleteAboutFn} = useMutation({
        mutationFn: (id:string) => deleteAbout(id),
        onSuccess: ()=>{
            toast.success('Üstünlikli pozuldy')
            queryClient.invalidateQueries({
                queryKey: ['about']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, deleteAboutFn}
}

export function useUpdateAboutInfo(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: updateAboutInfoFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: any }) => updateAboutInfo(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['about']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateAboutInfoFn}
}

export function useUpdatePhotoAbout(){
    
    const queryClient = useQueryClient()
    const {isPending, mutate: updateAboutPhotosFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: FormData }) => updateAboutPhotos(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['about']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateAboutPhotosFn}
}

export function useCreateAbout(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: createAboutFn } = useMutation({
        mutationFn: (data:FormData) => createAbout( data),
        onSuccess: ()=>{
            toast.success('Üstünlikli döredildi')
            queryClient.invalidateQueries({
                queryKey: ['about']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, createAboutFn}
}