import { useForm , Controller  } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'; 
import sideMan from '../../assets/Images/photo_2024-05-08_11-22-44-removebg-preview.png'
import sidemma2 from '../../assets/photo_2024-05-08_11-22-44.jpg'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


interface user {
  firstName: string
  lastName : string
  userName : string
  email : string
  phoneNumber : Number
  password : string
  confirm_Password : string
  userType: string
}

function SignUP() {

  const schema = yup.object().shape({
    firstName: yup.string().required("your first  name is required"),
    lastName: yup.string().required("your last name is required"),
    userName: yup.string().required("username field is required"),
    email: yup.string().email("invalid email").required('email field is required'),
    phoneNumber:yup.number().typeError('Phone number must be a number').positive().integer().min(1).max(13).required('phone number is required'),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least 8 characters, including one letter and one number'
      )
      .required('Password is required'),
    confirm_Password: yup
      .string()
      .oneOf([yup.ref('password'), 'null'], 'Passwords must match')
      .required('Confirm Password is required'),
      userType: yup.string()
    .required('Option is required')
    .oneOf(['user', 'Vendor', 'citizen'], 'Invalid option selected'),
  })

  const { control, register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit =  (data: user) => {
    console.log(data)
    reset()
  }


  return (
    <div className='flex-col justify-center items-center mx-auto h-screen lg:flex lg:flex-row lg:bg-transparent overflow-hidden' >
    <div className='uppercase text-2xl font-extrabold text-[#f6d6df]  inline-block lg:hidden mx-2 my-4 p-2 border border-green-600'><h1>dreamers</h1></div>
      <div className='hidden lg:block lg:basis-[33%] lg:relative lg:flex-[1] lg:overflow-hidden lg:h-screen' >
        <div className='bg-[#400F3A] w-[64%] h-[200vh]  text-center uppercase text-4xl font-extrabold text-[#f6d6df] p-7'><h1>dreamers</h1></div>
        <div><img src={sideMan} alt="ldisplay images" className=' w-[70%] absolute bottom-20 right-0 ' /></div>
      </div>
      <div className='basis-2/4 lg:px-10  flex-[1] '>
        <form action="" className=' border-black  px-10 py-4 lg:p-7 flex-auto  ' onSubmit={handleSubmit(onSubmit)}>
          <h1 className='capitalize font-bold  text-2xl text-center p-5 lg:text-4xl'>create account</h1>
          <div className='flex  justify-between'>
            {errors.firstName && <p  className="capitalize text-[#ff0000] text-sm">{errors.firstName.message + '*'}</p>}
            {errors.lastName && <p  className="capitalize text-[#ff0000] text-sm">{errors.lastName.message + '*'}</p>}     
          </div>
          <div className='flex flex-row gap-20 pb-5'>
            <input type="text" placeholder='First Name' className='border-2 border-black basis-1/2 rounded-md placeholder-black  px-4 py-2 focus:outline-none  ' {...register("firstName")}  />
            <input type="text" placeholder='Last Name' className='border-2 border-black basis-1/2 rounded-md placeholder-black px-4 py-2 focus:outline-none ' {...register("lastName")} />
          </div>
          {errors.userName && <p className="capitalize text-[#ff0000] text-sm">{errors.userName.message + '*'}</p>}
          <input type="text" placeholder='Nickname' className='w-full border-2 border-black rounded-md placeholder-black px-4 py-2 focus:outline-none ' {...register("userName")} />
          <div className='flex  justify-between'>
            {errors.email && <p className="capitalize text-[#ff0000] text-sm">{errors.email.message + '*'}</p>}
            {errors.phoneNumber && <p className="capitalize text-[#ff0000] text-sm truncate w-[20rem]">{errors.phoneNumber.message + '*'}</p>}    
          </div>
          <div className='flex flex-row gap-20 py-5'>
            <input type="email" placeholder='Email ' className='border-2 border-black basis-1/2 rounded-md placeholder-black px-4 py-2 focus:outline-none ' {...register("email")} />
            
            <input type="number" placeholder='Phone' step='1' min='1' className='border-2 border-black basis-1/2 rounded-md placeholder-black px-4 py-2  focus:outline-none ' {...register("phoneNumber")} />
            
          </div>
          {errors.password && <p className="capitalize text-[#ff0000] text-sm">{errors.password.message + '*'}</p>}
          <input type="password" placeholder='password' className='w-full border-2 border-black rounded-md px-4 py-2 mb-4 placeholder-black focus:outline-none ' {...register("password")} />
          {errors.confirm_Password && <p className="capitalize text-[#ff0000] text-sm">{errors.confirm_Password.message + '*'}</p>}

          <input type="password" placeholder='Confirm password' className='w-full border-2 border-black rounded-md px-4 py-2 mb-4 placeholder-black focus:outline-none' {...register("confirm_Password")} />
          {errors.userType && <p className="capitalize text-[#ff0000] text-sm">{errors.userType.message}</p>}
        <Controller
          name="userType"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select className='w-full capitalize border-2 border-black px-4 py-2 '{...field}>
            <option className='capitalize'>user type</option>
            <option className='capitalize'>user</option>
            <option className='capitalize'>vendor</option>
            <option className='capitalize'>citizen</option>
          </select>
          )}
        />
        
          <button
            type="submit"
            className="mt-4 text-white font-bold text-xl py-3 px-2  rounded-md  w-full capitalize bg-[#400F3A]"
          >
            sign up
          </button>
          <div className='relative '>
            <div className='border border-black my-7 mx-2 relative'></div>
            <div className='absolute inset-0 flex items-center justify-center   rounded-full '><h1 className=' border border-white rounded-full bg-white p-2 px-5 text-lg font-bold'>or</h1></div>
          </div>
            <div className='flex flex-row gap-10 ' >
            <div className='flex justify-between items-center border-2 border-black basis-1/2 rounded-md p-3 cursor-pointer'>
            <FcGoogle size={'1.7rem'} />
            <p  className='text-lg font-semibold capitalize'>continue with google</p>
            </div>
            <div className='flex justify-between items-center border-2 border-black basis-1/2 rounded-md p-3 cursor-pointer'>
            <FaApple size={'2rem'} />
            <p className='text-lg font-semibold capitalize'>continue with apple</p>
            </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default SignUP