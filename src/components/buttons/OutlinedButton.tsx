function OutlinedButton({href, text}: {href: string, text: string}) {
    return (
        <a href={href} className={"font-semibold border border-black rounded-full px-3 py-1 hover:bg-green-forest hover:bg-opacity-10 transition-all duration-500 ease-out"}>
            {text}
        </a>
    )
}

export default OutlinedButton