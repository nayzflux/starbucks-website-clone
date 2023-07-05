import {MapPinIcon} from "@heroicons/react/24/solid";
import OutlinedButton from "./buttons/OutlinedButton.tsx";

function Header() {
    return (
        <header className="flex p-4 lg:p-8 shadow w-full space-x-5 lg:space-x-10 2xl:px-72 lg:text-md text-sm">
            {/*Logo*/}
            <div className={"w-12 h-12"}>
                <img src={"/logo.svg"} alt={"Logo"}/>
            </div>

            <nav className={"flex items-center flex-grow"}>
                <ul className={"uppercase flex items-center font-bold space-x-3 lg:space-x-6"}>
                    <li>
                        <a href={"#"} className={"hover:text-green-forest"}>
                            Menu
                        </a>
                    </li>

                    <li>
                        <a href={"#"} className={"hover:text-green-forest"}>
                            Rewards
                        </a>
                    </li>

                    <li>
                        <a href={"#"} className={"hover:text-green-forest"}>
                            Gift Cards
                        </a>
                    </li>
                </ul>

                <ul className={"hidden md:flex items-center font-semibold mr-2 md:mr-10 ml-auto"}>
                    <li>
                        <a href={"/find-a-store"} className={"flex items-center space-x-2 hover:text-green-forest"}>
                            <MapPinIcon className={"h-5"}/>
                            <p>
                                Find a store
                            </p>
                        </a>
                    </li>
                </ul>

                <ul className={"hidden md:flex items-center space-x-1 md:space-x-4 font-semibold"}>
                    <li>
                        <OutlinedButton href={"/sign-in"} text={"Sign in"}/>
                    </li>

                    <li>
                        <a href={"/join-now"} className="rounded-full bg-black text-white px-3 py-1">
                            Join now
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;