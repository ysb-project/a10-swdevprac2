import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";

export default async function Venue(){
    const venues = await getVenues()

    return(
        <main className="text-center p-5 font-mono">
            <h1 className="text-3xl font-mono font-medium">Select your venue</h1>
            <VenueCatalog venuesJson={venues}/>
        </main>
    )
}