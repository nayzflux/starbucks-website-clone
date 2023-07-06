import OutlinedButton from "../buttons/OutlinedButton.tsx";

function BigCard({title, description, image, bgColor, inverted, colorPadding}: {title: string; description: string; image: string, bgColor: string, inverted?: boolean; colorPadding?: boolean}) {
    return (
        (!inverted) ?
            <div className={`flex w-full text-gray ${bgColor} space-y-4 md:space-y-0 flex-col-reverse md:flex-row`}>
                <div className={"flex flex-col items-center justify-center px-20 space-y-6 text-center md:w-1/2 py-4 md:py-0"}>
                    <h3 className={"font-semibold xl:text-6xl text-4xl"}>
                        {title}
                    </h3>

                    <p className={"xl:text-3xl text-xl"}>
                        {description}
                    </p>

                    <OutlinedButton href={"/refreshers"} text={"Order now"}/>
                </div>

                <div className={`md:w-1/2 ${colorPadding ? "md:py-3" : ""}`}>
                    <img className={"w-full"} src={image} alt={"Product Image"}/>
                </div>
            </div>
            :
            <div className={`flex w-full text-gray ${bgColor} space-y-4 md:space-y-0 flex-col md:flex-row py-4 md:py-0`}>
                <div className={"md:w-1/2"}>
                    <img className={"w-full"} src={image} alt={"Product Image"}/>
                </div>

                <div className={"flex flex-col items-center justify-center px-20 space-y-6 text-center md:w-1/2"}>
                    <h3 className={"font-semibold xl:text-6xl text-4xl"}>
                        {title}
                    </h3>

                    <p className={"xl:text-3xl text-xl"}>
                        {description}
                    </p>

                    <OutlinedButton href={"/refreshers"} text={"Order now"}/>
                </div>
            </div>
    )
}

export default BigCard