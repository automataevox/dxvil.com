export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ">Developer.</span><br className="hidden sm:inline" />
          Its more than passion.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Coded with ❤️ and built with 👻 bringing in next-gen UI where every line of code meets innovation and creativity.
        </p>
      </div>
    </section>
  )
}
