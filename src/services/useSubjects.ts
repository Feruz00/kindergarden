import { useQuery } from "@tanstack/react-query";
import { getSubjects } from "../api/apiSubjects";

type Subject = {
    title: string;
    _id:string;
    url:string;
    description:string;
}

type Props = {
    status:string;
    results:string;
    data: Subject[]
}

export function useGetSubjects(){
    const {isLoading, data: subjects} = useQuery({
        queryKey:['subjects'],
        queryFn: getSubjects
    })
    return {subjects:subjects as Props, isLoading}
}