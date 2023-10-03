export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow  dark:bg-gradient-to-br dark:from-slate-900 dark:to-zinc-900">

      {children}

    </main>
  )
}
