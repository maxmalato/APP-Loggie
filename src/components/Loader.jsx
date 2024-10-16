function Loader() {
    return (
        <div class="flex flex-row gap-2 justify-center py-2 px-8">
            <div class="size-2 rounded-full bg-slate-700 animate-bounce"></div>
            <div class="size-2 rounded-full bg-slate-800 animate-bounce [animation-delay:-.3s]"></div>
            <div class="size-2 rounded-full bg-slate-900 animate-bounce [animation-delay:-.5s]"></div>
        </div>
    )
}

export default Loader