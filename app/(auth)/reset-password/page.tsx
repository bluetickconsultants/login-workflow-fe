import Header from "@/components/ui/header"

export const metadata = {
  title: 'Reset Password - Simple',
  description: 'Page description',
}

export default function ResetPassword() {
  return (
    <>
    <Header />
    <section className="bg-gradient-to-b from-gray-100 to-white  dark:bg-gradient-to-br dark:from-slate-900 dark:to-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4 dark:text-gray-200">Let's get you back up on your feet</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Enter the email address you used when you signed up for your account, and we'll email you a link to reset your password.</p>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1 dark:text-gray-400" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Send reset link</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
