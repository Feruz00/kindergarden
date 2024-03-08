import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTeacher, deleteTeacher, getTeacher, getTeachers, updatePhotoTeacher, updateTeacherInfo } from "../api/apiTeachers";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export type Teacher = {
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
type Prop = {
    status: string;
    results: number;
    data: Teacher
}

export function useGetTeachers(){
    const {isLoading, data: teachers} = useQuery({
        queryKey:['teachers'],
        queryFn: getTeachers
    })
    return {teachers: teachers as Props, isLoading}
}

export function useGetTeacher(){
    const {id} = useParams()
    const {isLoading, data: teacher} = useQuery({
        queryKey:[`teacher-${id}`],
        queryFn:()=> getTeacher(id as string)
    })
    return {teacher:teacher as Prop , isLoading}
}
export function useDeleteTeacher(){
    
    const queryClient = useQueryClient()
    
    const {isPending, mutate: deleteTeacherFn} = useMutation({
        mutationFn: (id:string) => deleteTeacher(id),
        onSuccess: ()=>{
            toast.success('Üstünlikli pozuldy')
            queryClient.invalidateQueries({
                queryKey: ['teachers']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, deleteTeacherFn}
}

export function useUpdateTeacherInfo(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: updateTeacherInfoFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: Teacher }) => updateTeacherInfo(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['teachers']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateTeacherInfoFn}
}


export function useUpdatePhotoTeacher(){
    
    const queryClient = useQueryClient()
    const {isPending, mutate: updatePhotoTeacherFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: FormData }) => updatePhotoTeacher(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['teachers']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updatePhotoTeacherFn}
}

export function useCreateTeacher(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: createTeacherFn } = useMutation({
        mutationFn: (data:FormData) => createTeacher( data),
        onSuccess: ()=>{
            toast.success('Üstünlikli döredildi')
            queryClient.invalidateQueries({
                queryKey: ['teachers']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, createTeacherFn}
}