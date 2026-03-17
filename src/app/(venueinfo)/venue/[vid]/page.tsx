import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage({params} : {params: Promise<{vid:string}>}){
    const {vid} = await params
    const venueDetail = await getVenue(vid);
    /*
    const mockVenueData = new Map()
    mockVenueData.set("001",{name:"The Bloom Pavilion", image:"/img/bloom.jpg"});
    mockVenueData.set("002",{name:"Spark Space", image:"/img/sparkspace.jpg"});
    mockVenueData.set("003",{name:"The Grand Table", image:"/img/grandtable.jpg"});*/

    return (
        <main className="text-center p-5 gap-10 flex flex-col">
            <h1 className="font-mono text-3xl font-bold">{venueDetail.data.name}</h1>
            <div className="flex flex-row my-30 gap-10 item-center justify-center -translate-x-10 ">
                <Image src={venueDetail.data.picture} 
                alt="Venue Picture" width={0} height={0} sizes='100vh'
                className="rounded-lg w-[30%] bg-black"/>
                <div className="block m-10 text-left">
                        <div className="text-xl mx-5">Name: {venueDetail.data.name}</div>
                        <div className="text-xl mx-5">Address: {venueDetail.data.address}</div>
                        <div className="text-xl mx-5">District: {venueDetail.data.district}</div>
                        <div className="text-xl mx-5">Postal Code: {venueDetail.data.postalcode}</div>
                        <div className="text-xl mx-5">Tel: {venueDetail.data.tel}</div>
                        <div className="text-xl mx-5">Daily Rate: {venueDetail.data.dailyrate}</div>
                </div>
                
            </div>
        </main>
    )
}
/*
export async function generateStaticParams() {
    return [{vid:'001'},{vid:'002'},{vid:'003'}]
    
}*/