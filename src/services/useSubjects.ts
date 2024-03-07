import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createSubject, deleteSubject, getSubjects, updatePhotoSubject, updateSubjectInfo } from "../api/apiSubjects";
import toast from "react-hot-toast";

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
export function useDeleteSubject(){
    
    const queryClient = useQueryClient()
    
    const {isPending, mutate: deleteSubjectFn} = useMutation({
        mutationFn: (id:string) => deleteSubject(id),
        onSuccess: ()=>{
            toast.success('Üstünlikli pozuldy')
            queryClient.invalidateQueries({
                queryKey: ['subjects']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, deleteSubjectFn}
}

export function useUpdateSubjectInfo(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: updateSubjectInfoFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: Subject }) => updateSubjectInfo(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['subjects']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateSubjectInfoFn}
}

export function useUpdatePhotoSubject(){
    
    const queryClient = useQueryClient()
    const {isPending, mutate: updatePhotoSubjectFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: FormData }) => updatePhotoSubject(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['subjects']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updatePhotoSubjectFn}
}

export function useCreateSubject(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: createSubjectFn } = useMutation({
        mutationFn: (data:FormData) => createSubject( data),
        onSuccess: ()=>{
            toast.success('Üstünlikli döredildi')
            queryClient.invalidateQueries({
                queryKey: ['subjects']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, createSubjectFn}
}