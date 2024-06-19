import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createDashboard, getDashboard, updateDashboardInfo, updateDashboardPhotos } from "../api/apiDashboard";


export type DashboardProp = {
    header: string[];
    
    mainImg: string;
    _id:string;
}

type Props = {
    status: string;
    results: number;
    data: DashboardProp[]
}
export function useGetDashboard(){
    const {isLoading, data: dashboard} = useQuery({
        queryKey:['dashboard'],
        queryFn: getDashboard
    })
    return {dasboard: dashboard as Props, isLoading}
}

export function useUpdateDashboardInfo(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: updateDashboardInfoFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: any }) => updateDashboardInfo(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['dashboard']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateDashboardInfoFn}
}

export function useUpdatePhotoDashboard(){
    
    const queryClient = useQueryClient()
    const {isPending, mutate: updateDashboardPhotosFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: FormData }) => updateDashboardPhotos(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['dashboard']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateDashboardPhotosFn}
}

export function useCreateDashboard(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: createDashboardFn } = useMutation({
        mutationFn: (data:FormData) => createDashboard( data),
        onSuccess: ()=>{
            toast.success('Üstünlikli döredildi')
            queryClient.invalidateQueries({
                queryKey: ['dashboard']
            })
        },
        onError: ()=>{
            // console.log
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, createDashboardFn}
}