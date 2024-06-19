import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { createGalleryTypes, deleteGalleryTypes, getGalleryTypes, updateGalleryTypes } from "../api/apiGalleryType";
import toast from "react-hot-toast";
import { createTerbiye, deleteTerbiye, getTerbiye, updateTerbiye } from "../api/apiTerbiye";

export type TerbiyeTypes = {
    header: string;
    content: string;
    _id:string;
}

type Props = {
    status: string;
    results: number;
    data: TerbiyeTypes[]
}
export function useGetTerbiye(){
    const {isLoading, data: terbiyeler} = useQuery({
        queryKey:['terbiye'],
        queryFn: getTerbiye
    })
    return {terbiyeler: terbiyeler as Props, isLoading}
}

export function useDeleteTerbiye(){
    
    const queryClient = useQueryClient()
    
    const {isPending, mutate: deleteTerbiyeFn} = useMutation({
        mutationFn: (id:string) => deleteTerbiye(id),
        onSuccess: ()=>{
            toast.success('Üstünlikli pozuldy')
            queryClient.invalidateQueries({
                queryKey: ['terbiye']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, deleteTerbiyeFn}
}

export function useUpdateTerbiye(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: updateTerbiyeFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: TerbiyeTypes }) => updateTerbiye(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['terbiye']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateTerbiyeFn}
}
export function useCreateTerbiye(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()

    // console.log(data)
    const {isPending, mutate: createTerbiyeFn } = useMutation({
        mutationFn: (data:FormData) => createTerbiye( data),
        onSuccess: ()=>{
            toast.success('Üstünlikli döredildi')
            queryClient.invalidateQueries({
                queryKey: ['terbiye']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, createTerbiyeFn}
}