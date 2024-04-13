import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { User } from "./useUsers";
import { createContest, deleteContest, getContests } from "../api/apiContest";


export type Contest = {
    name: string;
    _id:string;
    users: User[];
    start: Date;
    duration: number;
    allInTime: boolean;
    status: boolean
}

type Props = {
    status: string;
    results: number;
    data: Contest[]
}
export function useGetContests(){
    const {isLoading, data: contest} = useQuery({
        queryKey:['contests'],
        queryFn: getContests
    })
    return {contests: contest as Props, isLoading}
}
export function useDeleteContest(){
    
    const queryClient = useQueryClient()
    
    const {isPending, mutate: deleteContestFn} = useMutation({
        mutationFn: (id:string) => deleteContest(id),
        onSuccess: ()=>{
            toast.success('Üstünlikli pozuldy')
            queryClient.invalidateQueries({
                queryKey: ['contests']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, deleteContestFn}
}

// export function useUpdateReviewInfo(){
    
//     const queryClient = useQueryClient()
//     // const {id} = useParams()
//     const {isPending, mutate: updateReviewInfoFn } = useMutation({
//         mutationFn: ({ id, data }: { id: string, data: Review }) => updateReviewInfo(id, data),
//         onSuccess: ()=>{
//             toast.success('Üstünlikli sazlanyldy')
//             queryClient.invalidateQueries({
//                 queryKey: ['reviews']
//             })
//         },
//         onError: ()=>{
//             toast.error('Näsazlyklar ýüz berdi')
//         }
//     })
//     return {isPending, updateReviewInfoFn}
// }

// export function useUpdatePhotoReview(){
    
//     const queryClient = useQueryClient()
//     const {isPending, mutate: updatePhotoReviewFn } = useMutation({
//         mutationFn: ({ id, data }: { id: string, data: FormData }) => updatePhotoReview(id, data),
//         onSuccess: ()=>{
//             toast.success('Üstünlikli sazlanyldy')
//             queryClient.invalidateQueries({
//                 queryKey: ['reviews']
//             })
//         },
//         onError: ()=>{
//             toast.error('Näsazlyklar ýüz berdi')
//         }
//     })
//     return {isPending, updatePhotoReviewFn}
// }

export function useCreateContest(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: createContestFn } = useMutation({
        mutationFn: (data:FormData) => createContest( data),
        onSuccess: ()=>{
            toast.success('Üstünlikli döredildi')
            queryClient.invalidateQueries({
                queryKey: ['contest']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, createContestFn}
}