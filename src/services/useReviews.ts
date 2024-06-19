import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createReview, deleteReview, getReviews, updatePhotoReview, updateReviewInfo } from "../api/apireviews";
import toast from "react-hot-toast";


export type Review = {
    name: string;
    _id:string;
    url:string;
    review:string;
    job:string
}

type Props = {
    status: string;
    results: number;
    data: Review[]
}
export function useGetReviews(){
    const {isLoading, data: reviews} = useQuery({
        queryKey:['reviews'],
        queryFn: getReviews
    })
    return {reviews: reviews as Props, isLoading}
}
export function useDeleteReview(){
    
    const queryClient = useQueryClient()
    
    const {isPending, mutate: deleteReviewFn} = useMutation({
        mutationFn: (id:string) => deleteReview(id),
        onSuccess: ()=>{
            toast.success('Üstünlikli pozuldy')
            queryClient.invalidateQueries({
                queryKey: ['reviews']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, deleteReviewFn}
}

export function useUpdateReviewInfo(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: updateReviewInfoFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: Review }) => updateReviewInfo(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['reviews']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateReviewInfoFn}
}

export function useUpdatePhotoReview(){
    
    const queryClient = useQueryClient()
    const {isPending, mutate: updatePhotoReviewFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: FormData }) => updatePhotoReview(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['reviews']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updatePhotoReviewFn}
}

export function useCreateReview(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: createReviewFn } = useMutation({
        mutationFn: (data:FormData) => createReview( data),
        onSuccess: ()=>{
            toast.success('Üstünlikli döredildi')
            queryClient.invalidateQueries({
                queryKey: ['reviews']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, createReviewFn}
}