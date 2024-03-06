import { useQuery } from "@tanstack/react-query";
import { getReviews } from "../api/apireviews";

type Review = {
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