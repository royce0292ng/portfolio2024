'use client'

import { gochihand, quicksand } from "@/constants/fonts";
import { Button, Chip, Image } from "@heroui/react";
import dynamic from "next/dynamic";
import Link from "next/link";

// const Scene = dynamic(() => import('@/components/Scene'),{
//   loading: () => <p>Loading...</p>,
//   ssr: false
// })

export default function Home() {
  return (
    <>
      <div className=" h-screen ">
        {/*<Scene/>*/}
      </div>
      {/* Section 1 TalkHQ */}
      <div className="flex ">
        <div className="flex bg-white rounded-xl space-x-16 p-8 m-8 flex-col lg:flex-row ">
            <div className="flex flex-col justify-center">
                <Image  isBlurred isZoomed
                  src=" /images/appMock-up.png"
                  alt="TalkHQ mock up"
                  className=""
                />
            </div>
            <div className="  text-black font-bold m-32">
              <h1 className={` text-6xl ${quicksand.className} `}>
                Talk HQ Mobile App
              </h1>
              <p className={` text-xl ${quicksand.className} p-4`}>
                TalkHQ, a speech pathology company, aims to address the shortage of speech pathologists by developing a mobile app. The app serves as a platform for parents to connect, share strategies, and access resources while waiting for appointments. It provides articles, blogs, videos, and other materials to empower parents in aiding their child's speech development.
              </p>
              <p className={`  text-gray-500 text-xl ${quicksand.className} px-4 mb-4`}>
                The project prioritizes user experience design and iterative development. The app caters to both iOS and Android users, utilizing technologies like React Native, Expo, and AWS. It manages various data types and utilizes modular design for organization, maintainability, and scalability.
              </p>
              <div className=" space-x-2 p-4">
                <Chip>UX/UI</Chip>
                <Chip>Java Script</Chip>
                <Chip>React Native</Chip>
                <Chip>SQL</Chip>
                <Chip>AWS</Chip>
              </div>
            </div>
          </div>
      </div>
      
      {/* Know me more Section */}
      <div className=" flex justify-center ">
        <Link href='/about'>
          <Button>Know more About me</Button>
        </Link>
      </div>
    </>
  );
}
