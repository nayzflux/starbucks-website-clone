import BigCard from "./cards/BigCard.tsx";
import LittleCard from "./cards/LittleCard.tsx";
import MediumCard from "./cards/MediumCard.tsx";

function Home() {
    return (
        <main className={"py-10 pb-0 space-y-12 2xl:px-80"}>
            <section className="space-y-8">
                <BigCard title={"Talk about refreshing"} description={"Introducing our vibrant new Frozen Lemonade Starbucks Refreshers® beverages: Strawberry Açaí, Pineapple Passionfruit and Mango Dragonfruit."} image={"/1.jpg"} bgColor={'bg-magenta'} colorPadding={true}/>

                <LittleCard title={"Soak up delicious Rewards"} description={"You’re closer than you think to free drinks & food.*"} image={"/2.webp"}/>

                <BigCard title={"Summer to the max"} description={"Go for a Mocha Cookie Crumble or Caramel Ribbon Crunch Frappuccino® blended beverage."} image={"/3.jpg"} bgColor={'bg-blue-purple'}/>

                <BigCard title={"Get there satisfied"} description={"Fill up on the way with a Spinach, Feta & Egg White Wrap or Bacon, Sausage & Egg Wrap."} image={"/4.jpg"} bgColor={'bg-green'} inverted={true}/>

                <MediumCard title={"Be kind to your mind"} description={"We teamed up with Headspace to bring you four free meditations on kindness, plus a special offer for Starbucks® Rewards members—discover more mindfulness with a two-month free membership.**"} image={"/5.jpg"}/>
            </section>

            <section className="text-center p-5 space-y-24 text-sm font-medium">
                <p>
                    *Starbucks Rewards is available at participating stores. Some restrictions apply. See <br/>https://starbucks.com/rewards
                </p>

                <p>
                    **After your two-month free trial, exclusive to Starbucks® Rewards members, the <br/>subscription renews automatically at $69.99 USD for an annual subscription to <br/>Headspace. You can cancel at any time. This offer is for new and returning Headspace <br/>users only.
                </p>
            </section>
        </main>
    )
}

export default Home;