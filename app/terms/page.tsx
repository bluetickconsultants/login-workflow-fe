export const metadata = {
    title: 'Sign Up - Simple',
    description: 'Page description',
}

import Header from '@/components/ui/header'
import Link from 'next/link'

export default function SignUp() {
    return (
        <>
            <Header />
            <section className="dark:bg-gradient-to-br dark:from-slate-900 dark:to-zinc-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                        {/*    */}
                        <div className="dark:text-gray-200 text-center text-4xl">Terms of Service</div>


                    </div>
                </div>
            </section>
        </>
    )
}
