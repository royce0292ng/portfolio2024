import { Oswald, Gochi_Hand, Quicksand, Libre_Barcode_128, Linefont, Volkhov, Roboto } from 'next/font/google'
 
export const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
})

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    display: 'swap',
})

export const volkhov = Volkhov({
    subsets: ['latin'],
    weight: ['700'],
    display: 'swap',
})

export const gochihand = Gochi_Hand({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
})

export const quicksand = Quicksand({
    subsets: ['latin'],
    display: 'swap',
  })

export const barcode = Libre_Barcode_128({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
})

export const linefont = Linefont({
    display: 'swap',
})