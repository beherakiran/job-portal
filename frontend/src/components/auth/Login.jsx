import React,{useState} from 'react';
import Navbar from "../shared/navbar"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup,RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from  "@/components/ui/button";
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";
import {USER_API_END_POINT} from "../../utils/constant";
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';

const Login = () => {
      const[input,setInput] = useState({
                email:"",
                password:"",
                role:""

            });
const navigate = useNavigate();
const dispatch = useDispatch();
const {loading} = useSelector(store=>store.auth);
const changeEventHandler = (e)=>{
setInput({...input,[e.target.name]:e.target.value});
 }
 const submitHandler =async(e)=>{
    e.preventDefault();
                     try {
                        dispatch(setLoading(true));
                        const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
                            headers:{
                                "Content-Type":"application/json"
                            },
                            withCredentials:true,
                        });
                        if(res.data.success){
                            dispatch(setUser(res.data.user))
                            navigate("/")
                            toast.success(res.data.message);
                        }
                     } catch (error) {
                        console.log(error);
                        toast.error(error.response?.data?.message || "Something went wrong")
                     }finally{
                        dispatch(setLoading(false));
                     }
                    }
  return (
    <div>
        <Navbar></Navbar>
        <div className='flex items-center justify-center mx-auto max-w-7xl'>
            <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md my-10 p-4'>
                <h1 className='font-bold text-xl mb-5'>Login</h1>
                 <div className='my-2'>
                    <Label>email</Label>
                    <Input className='mt-2'
                    type='email' 
                    value={input.email}
                    name="email"
                    onChange={changeEventHandler}
                    placeholder='supriya789@gmail.com'
                    />
                </div>
                <div className='my-2'>
                    <Label>password</Label>
                    <Input className='mt-2'
                    type='password' 
                    value={input.password}
                    name="password"
                    onChange={changeEventHandler}
                    placeholder='1234'
                    />
                </div>
                <div className='flex items-center justify-between'>
                     <RadioGroup  className="flex items-center gap-4 my-5">
                       <div className="flex items-center space-x-2">
                           <Input
                              type="radio"
                              name="role"
                              value="student"
                              checked={input.role === 'student'}
                              onChange={changeEventHandler}
                              className='cursor-pointer'
                           />
                           <Label htmlFor="r1">Student</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                           <Input
                              type="radio"
                              name="role"
                              value="recruiter"
                              checked={input.role === 'recruiter'}
                              onChange={changeEventHandler}
                              className='cursor-pointer'
                           />
                           <Label htmlFor="r2">Recruiter</Label>
                      </div> 
                      </RadioGroup>
                     
                </div>
                {
                  loading ?( <Button className='w-full my-4'><Loader2 className='mr-2 h-4 w-4 animate-spin'/>Please Wait</Button>)
               :(
                <Button type="submit" className='w-full my-4 bg-black text-white hover:bg-gray-800'>
                 Login
              </Button>
               )}
              <span className='text-sm'>Don't  have an account? <Link to='/signup' className="text-blue-600">Signup</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Login;