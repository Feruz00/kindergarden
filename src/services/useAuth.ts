import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { changeInfoApi,  changePasswordApi, getCurrentUserApi, loginApi, logoutApi, registerApi, uploadPhotoApi } from "../api/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User } from "../context/AuthContext";

export interface UserData {
    username: string,
    password: string
}

export function useRegister(){
    const {mutate: register, isPending} = useMutation({
        mutationKey: ['user'],
        mutationFn: registerApi,
        onSuccess: ()=>{
            toast.success("Ulanyjy döredildi")
        },
        onError: (err:any)=>{
            toast.error(err.response?.data?.message || 'Serwerde näsazlyk ýüz berdi')  
        }
    })
    return {register, isPending}
}

export function useLogin(){
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    
    const {mutate: login, isPending} = useMutation({
        mutationKey: ['user'],
        mutationFn: loginApi,
        onSuccess: (user)=>{
            // console.log(user)
            queryClient.setQueryData(['user'],user)
            // console.log(user)
            navigate('/admin', {replace: true})

        },
        onError: (err:any)=>{
            toast.error(err?.response?.data?.message || 'Ýalnyş parol ýa login')
        }
    })

    return {login, isPending}
}

export function useCurrentUser(){
    const {isLoading, data:user, error} = useQuery({
        queryKey:["user"],
        queryFn: getCurrentUserApi,
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
        // refetchOnReconnect: false,
        retryOnMount: false,
        retry: false
    })
    return {isLoading, user: user as User, isAuthenticated: error? false:true }
}
export const useLogout = ()=>{
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const {mutate: logout, isPending} = useMutation({
        mutationFn: logoutApi,
        onSuccess: ()=>{
            navigate('/', {replace: true})
            // queryClient.
            // @ts-ignore
            queryClient.setQueryData(['user'],null)
            queryClient.removeQueries()
        }
    })
    return {logout, isPending}
}


export const useChangeInfo = ()=>{
    const queryClient = useQueryClient()
    
    const {mutate: changeInfo, isPending} = useMutation({
        mutationFn: changeInfoApi,
        onSuccess: (user)=>{
            console.log(user)
            queryClient.setQueryData(['user'],user)
            toast.success('Maglumatlaryňyz üstünlikli üýtgedildi')
            queryClient.invalidateQueries({
                queryKey: [  'user' ]
            })

        },
        onError: (err:any)=>{
            toast.error(err?.response?.data?.message || 'Serwerde näsazlyk boldy')
        }
    })
    return {changeInfo, isPending}
}
export const useChangePassword = ()=>{
    
    const {mutate: changePassword, isPending} = useMutation({
        mutationFn: changePasswordApi,
        onSuccess: ()=>{
            toast.success('Açar sözi üstünlikli üýtgedildi')
        },
        onError: (err:any)=>{
            toast.error(err?.response?.data?.message ||'Serwerde näsazlyk boldy')
        }
    })
    return {changePassword, isPending}
}

export const useUploadPhoto = ()=>{
    const queryClient = useQueryClient()
    
    const {mutate: uploadPhoto, isPending} = useMutation({
        mutationFn: uploadPhotoApi,
        onSuccess: ()=>{
            toast.success('Profil suratyňyz ýüklenildi')
            queryClient.invalidateQueries({
                queryKey: ['user', 'users']
            })

        },
        onError: (err:any)=>{
            toast.error(err?.response?.data?.message || 'Serwerde näsazlyk boldy')
        }
    })
    return {uploadPhoto, isPending}
}