import { FOOTER_CONTACT_INFO, SOCIALS } from '@/constants'
import { Divider } from "@heroui/react"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' py-4 '>
        <div className='flex flex-wrap gap-10 justify-between m-8'>
            <div className='flex flex-col gap-5'>
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                    {FOOTER_CONTACT_INFO.contacts.map((contact, index) => (
                        <div className='flex gap-4 md:flex-col lg:flex-row' key={`contact-${index}`}>
                            <p className='whitespace-nowrap'>
                                {contact.label}:
                            </p>
                            <Link href={contact.link} className='transition origin-left hover:scale-x-150'>
                                <p className='font-medium whitespace-nowrap'>
                                    {contact.value}
                                </p>
                            </Link>
                        </div>
                    ))}
                </FooterColumn>
            </div>
            <div className='flex flex-col gap-5'>
                <FooterColumn title={SOCIALS.title}>
                    <ul className='flex gap-4 text-gray-500'>
                        {SOCIALS.socials.map((social, index)=>(
                            <Link href={social.link} key={`social-${index}`} className=' transition ease-in-out hover:scale-125' >
                                <Image className='bg-white rounded-md p-1' src={social.icon} alt='logo' width={23} height={24}/>
                            </Link>
                        ))}
                    </ul>
                </FooterColumn>
            </div>
        </div>

        <Divider/>
        <p className=' w-full my-4 text-center'>
            2024© Royce Ng | All Right Reserved
        </p>
    </footer>
  )
}

type FooterColumnProps = {
    title: string;
    children: React.ReactNode
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className='flex flex-col gap-5'>
            <h4 className='font-bold whitespace-nowrap group'>
                {/* Map through each character in the title */}
                {title.split('').map((char, index) => (
                    char === ' ' ? (
                        // Render a span for space character
                        (<span key={index}>&nbsp;</span>)
                    ) : (
                        // Render a span for non-space character with animation
                        (<span key={index} style={{ animationDelay: `${index * 0.1}s` }} className='inline-block group-hover:animate-wave'>{char}</span>)
                    )
                ))}
            </h4>
            {children}
        </div>
    );
}

export default Footer