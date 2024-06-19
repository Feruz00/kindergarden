import { useEffect } from "react"
import { useLogin } from "../services/useAuth"
import {useForm} from 'react-hook-form'
interface Prop{
  username:string, 
  password:string
}
const Login = () => {
  const {isPending, login} = useLogin()
  const {register, reset, handleSubmit, formState: {errors}} = useForm<Prop>()

  const onSubmit = (d:Prop)=>{
    login(d,{
      onSuccess: ()=>{
        reset()
      },
      onError:err=>{
        console.log(err)
      }
    })
  }
  useEffect(()=>{
    document.title = "Login"
  },[])
  return (
    <div
      className='min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center font-nunito'
    >
      <div className="w-[1500px] xl:w-full flex flex-col justify-center items-center py-20 px-5 lg:px-4 md:px-6 gap-9">
      <h1 className="text-green-600 text-3xl text-center font-normal px-5
            relative
            before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
            after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
            md:text-lg
        ">
            Ulgama gir
        </h1> 
        <form className="flex flex-col gap-5 w-1/2 md:w-full" onSubmit={handleSubmit(onSubmit)} >
          <div className="grid grid-cols-[8rem_1fr] gap-4 items-center">
            <label htmlFor="username">
              Ulanyjynyň ady:
            </label>
            <input className="px-3 py-2 border rounded-lg outline-offset-1 outline-green-500 text-green-800 " id="username" {
              ...register('username',{
                required: 'Ulanyjynyň adyny giriziň',
                min:{
                  value: 6,
                  message: 'Ulanyjynyň ady 5 harpdan uly bolmaly'
                }
              })
            } />
            {
              errors?.username?.message && <p className=" row-start-[2] col-start-[2] text-sm text-red-600">
              *{errors.username.message}
              </p>
            }
            
          </div>   
          
          <div className="grid  grid-cols-[8rem_1fr] gap-4 items-center">
            <label htmlFor="password">
              Açar sözi:
            </label>
            <input className="px-3 py-2 border rounded-lg outline-offset-1 outline-green-500 text-green-800" 
              type="password"
              id="password"
              {
                ...register('password',{
                  required: 'Açar sözüni giriziň',
                  min:{
                    value: 6,
                    message: 'Açar sözi 6 harpdan uly bolmaly'
                  }
                })
              }
            />
            {
              errors?.password?.message && <p className=" row-start-[2] col-start-[2] text-sm text-red-600">
              *{errors.password.message}
              </p>
            }
          </div>   
          <div className="w-full flex justify-end">
              <button type="submit" className={
                ` px-10 py-2 bg-green-600 hover:bg-green-500 text-white transition-all duration-300 rounded-full
                ${isPending ? 'cursor-not-allowed bg-green-400': ''}
                `}>Ulgama gir {isPending && '....'} </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login