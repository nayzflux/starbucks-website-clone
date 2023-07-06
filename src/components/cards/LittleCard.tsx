import OutlinedButton from "../buttons/OutlinedButton.tsx";

function LittleCard({title, description, image}: {title: string; description: string; image: string}) {
    return (
        <div className={`flex flex-col md:flex-row w-full text-gray`}>
            <div className={"md:w-1/2 bg-green-forest py-6"}>
                <img className={"w-full"} src={image} alt={"Product Image"}/>
            </div>

            <div className={"flex flex-col items-center justify-center px-20 space-y-6 text-center md:w-1/2 bg-green-light py-4 md:py-0"}>
                <h3 className={"font-semibold xl:text-2xl text-xl"}>
                    {title}
                </h3>
                
                <p className={"xl:text-xl text-lg"}>
                    {description}
                </p>
                
                <OutlinedButton href={"/refreshers"} text={"Join now"}/>
            </div>
        </div>
    )
}

export default LittleCard