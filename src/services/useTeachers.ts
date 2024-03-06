import { useQuery } from "@tanstack/react-query";
import { getTeachers } from "../api/apiTeachers";

type Teacher = {
    name: string;
    _id:string;
    url:string;
    description:string;
    job:string
}

type Props = {
    status: string;
    results: number;
    data: Teacher[]
}
export function useGetTeachers(){
    const {isLoading, data: teachers} = useQuery({
        queryKey:['teachers'],
        queryFn: getTeachers
    })
    return {teachers: teachers as Props, isLoading}
}