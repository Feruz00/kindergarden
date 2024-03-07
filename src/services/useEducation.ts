// import { Education } from './useEducation';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createEducation, deleteEducation, getEducations, updateEducation, updatePhotoEducation } from "../api/apiEducation";
import toast from "react-hot-toast";
export type Education = {
    title: string;
    _id:string;
    url:string;
    description:string;
    link:string
}

type Props = {
    status:string;
    results:string;
    data: Education[]
}

export function useGetEducations(){
    const {isLoading, data: educations} = useQuery({
        queryKey:['educations'],
        queryFn: getEducations
    })
    return {educations:educations as Props, isLoading}
}

export function useDeleteEducation(){
    
    const queryClient = useQueryClient()
    
    const {isPending, mutate: deleteEducationFn} = useMutation({
        mutationFn: (id:string) => deleteEducation(id),
        onSuccess: ()=>{
            toast.success('Üstünlikli pozuldy')
            queryClient.invalidateQueries({
                queryKey: ['educations']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, deleteEducationFn}
}

export function useUpdateEducation(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: updateEducationFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: Education }) => updateEducation(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['educations']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateEducationFn}
}


export function useUpdatePhotoEduction(){
    
    const queryClient = useQueryClient()
    const {isPending, mutate: updatePhotoEducationFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: FormData }) => updatePhotoEducation(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['educations']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updatePhotoEducationFn}
}

export function useCreateEducation(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: createEducationFn } = useMutation({
        mutationFn: (data:FormData) => createEducation( data),
        onSuccess: ()=>{
            toast.success('Üstünlikli döredildi')
            queryClient.invalidateQueries({
                queryKey: ['educations']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, createEducationFn}
}