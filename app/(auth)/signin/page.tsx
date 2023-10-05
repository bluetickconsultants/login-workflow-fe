'use client'

export const metadata = {
  title: 'Sign In - Simple',
  description: 'Page description',
}

import Header from '@/components/ui/header'
import axios from '@/utils/axios'
import { appConstants } from '@/utils/constants'
import { authEndpoints } from '@/utils/endpoints'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { useRouter } from "next/navigation"
import { apiErrorHandler, isUserAuthenticated } from '@/utils/util'
import { toast } from 'react-toastify';

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()


  if (isUserAuthenticated()) {
    router.push('/chatbot')
  }


  const handleSubmitButton = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    if (!loading) {
      try {
        const resp = await axios.post(authEndpoints.LOGIN, {
          email,
          password
        })
        if (resp && resp.data && resp.data.token) {
          localStorage.setItem(appConstants.token, resp.data.token)
          router.push('/chatbot')
          setLoading(false)
        }
      } catch (e) {
        setLoading(false)
        toast.error(apiErrorHandler(e))
      }
    }
  }
  return (
    <>
      <Header />
      <section className="bg-gradient-to-b from-gray-100 to-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 dark:text-white">
              <h1 className="h1">Welcome back. We exist to make entrepreneurism easier.</h1>
            </div>

            {/* Form */}
            <div className="max-w-md mx-auto">
              <div className='dark:bg-stone-500/20 rounded shadow-xl p-7'>
                <form onSubmit={handleSubmitButton}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <span className="block text-gray-800 text-sm font-medium mb-1 dark:text-gray-400">Email</span>
                      <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <span className="block text-gray-800 text-sm font-medium mb-1 dark:text-gray-400">Password</span>
                        <Link href="/reset-password" className="text-sm font-medium text-blue-600 hover:underline">Having trouble signing in?</Link>
                      </div>
                      <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input w-full text-gray-800" placeholder="Enter your password" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-600 ml-2 dark:text-gray-400">Keep me signed in</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
                        {loading ? <>
                          <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                          </svg>
                          <span className="sr-only">Loading...</span></> : <>Sign in</>}
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div className="border-t border-gray-300 grow ml-3" aria-hidden="true"></div>
                </div>
                <form>

                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Continue with Google</span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-600 text-center mt-6 dark:text-gray-400">
                  Don't you have an account?
                  <Link href="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
