// import { Education } from './useEducation';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../api/apiUsers";
export type User = {
    fullName?: string;
    _id:string;
    username:string;
    bio?:string;
    url?:string;
    role:string
}

type Props = {
    status:string;
    results:string;
    data: User[]
}

export function useGetUsers(){
    const {isLoading, data: users} = useQuery({
        queryKey:['users'],
        queryFn: getUsers
    })
    return {users:users as Props, isLoading}
}

export function useGetUser(userId: string){
    const {isLoading, data: user} = useQuery({
        queryKey:['users', userId],
        queryFn: () => getUser(userId)
    })
    return {user:user as Props, isLoading}
}


export function useDeleteUser(){
    
    const queryClient = useQueryClient()
    
    const {isPending, mutate: deleteUserFn} = useMutation({
        mutationFn: (id:string) => deleteUser(id),
        onSuccess: ()=>{
            toast.success('Üstünlikli pozuldy')
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, deleteUserFn}
}

export function useUpdateUser(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: updateUserFn } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: User }) => updateUser(id, data),
        onSuccess: ()=>{
            toast.success('Üstünlikli sazlanyldy')
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, updateUserFn}
}


export function useCreateUser(){
    
    const queryClient = useQueryClient()
    // const {id} = useParams()
    const {isPending, mutate: createUserFn } = useMutation({
        mutationFn: (data:FormData) => createUser( data),
        onSuccess: ()=>{
            toast.success('Üstünlikli döredildi')
            queryClient.invalidateQueries({
                queryKey: ['users']
            })
        },
        onError: ()=>{
            toast.error('Näsazlyklar ýüz berdi')
        }
    })
    return {isPending, createUserFn}
}