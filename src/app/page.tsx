import { gochihand, oswald, quicksand } from "@/constants/fonts";
import { Button, Chip, Image } from "@nextui-org/react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Scene = dynamic(() => import('@/components/Scene'),{
  loading: () => <p>Loading...</p>,
  ssr: false
})

export default function Home() {
  return (
    <>
      <div className=" h-screen ">
        <Scene/>
      </div>
      {/* Section 2 TalkHQ */}
      <div className="flex ">
        <div className="flex-col bg-white rounded-xl p-8 m-8">
          <h2 className="text-black text-6xl px-8 pb-8 drop-shadow-2xl">Recent Project</h2>
          <div className="flex space-x-16"> 
            <Image isBlurred isZoomed
              src=" /images/appMock-up.png"
              alt="TalkHQ mock up"
              className="" 
            />
            <div className="  text-black font-bold m-32">
              <h1 className={` text-6xl ${quicksand.className} `}>
                Talk HQ Mobile App
              </h1>  
              <p className={` text-2xl ${quicksand.className} p-4`}>
                TalkHQ, a speech pathology company, aims to address the shortage of speech pathologists by developing a mobile app. The app serves as a platform for parents to connect, share strategies, and access resources while waiting for appointments. It provides articles, blogs, videos, and other materials to empower parents in aiding their child's speech development. 
              </p> 
              <p className={`  text-gray-500 text-2xl ${quicksand.className} px-4 mb-4`}>
                The project prioritizes user experience design and iterative development. The app caters to both iOS and Android users, utilizing technologies like React Native, Expo, and AWS. It manages various data types and utilizes modular design for organization, maintainability, and scalability.
              </p>
              <div className={` space-x-2 p-4 ${oswald.className} `}>
                <Chip>UX/UI</Chip>
                <Chip>Java Script</Chip>
                <Chip>React Native</Chip>
                <Chip>SQL</Chip>
                <Chip>AWS</Chip>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Know me more Section */}
      <div className=" flex justify-center p-32 m-32">
        <Link href='/about'>
          <Button size="lg">Know more About me</Button>
        </Link>
      </div>
      
    </>
  );
}
