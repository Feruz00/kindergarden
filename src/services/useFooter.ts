import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { createGalleryTypes, deleteGalleryTypes, getGalleryTypes, updateGalleryTypes } from "../api/apiGalleryType";
import toast from "react-hot-toast";
import { createfooter, deletefooter, getfooter, updatefooter } from "../api/apiFooter";
//@ts-ignore
export type footerTypes = {
    address: string;
    phoneNumber: string;
    email:string;
    content: string;
    _id:string;
}

type Props = {
    status: string;
    results: number;
    data: footerTypes[]
}
export function useGetfooter(){
    const {isLoading, data: footerler} = useQuery({
        queryKey:['footer'],
        queryFn: getfooter
    })
    return {footerler: footerler as Props, isLoading}
}

export function useDeletefooter(){
    
    const queryClient = useQueryClient()
    
    const {isPending, mutate: deletefooterFn} = useMutation({
        mutationFn: (id:string) => deletefooter(id),
        onSuccess: ()=>{
            toast.success('Üstünlikli pozuldy')
            queryClient.invalidateQueries({
                queryKey: ['footer']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, deletefooterFn}
}

export function useUpdatefooter(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: updatefooterFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: footerTypes }) => updatefooter(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['footer']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updatefooterFn}
}
export function useCreatefooter(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()

    // console.log(data)
    const {isPending, mutate: createfooterFn } = useMutation({
        mutationFn: (data:FormData) => createfooter( data),
        onSuccess: ()=>{
            toast.success('Üstünlikli döredildi')
            queryClient.invalidateQueries({
                queryKey: ['footer']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, createfooterFn}
}