export default function GenresTitle() {
    return(
      <div className="flex max-w-[100%] flex-col items-end gap-2">
          <h1 className="text-right text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-500  to-indigo-600 bg-clip-text text-transparent"> Cyberpunk. </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> House. </span>
            <br className="inline" />
          Not just a music.
          </h1>
        <p className="max-w-[700px] text-right text-lg text-muted-foreground sm:text-xl">
        Listening to
        <span className="bg-gradient-to-r from-blue-500  to-indigo-600 bg-clip-text font-bold text-transparent"> future</span> or 
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text font-bold text-transparent"> classic </span>
        music? I got your back!
        </p>
      </div>
    )
}