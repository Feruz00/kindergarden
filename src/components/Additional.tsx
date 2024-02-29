// import React from 'react'

import Add1 from '../assets/add-1.jpg'
import Add2 from '../assets/add-2.jpg'
import Add3 from '../assets/add-3.jpg'
import Card from "../ui/Card"


const Additional = () => {
  return (
    <div className="lg:min-h-screen bg-zinc-50 flex justify-center items-center md:min-h-screen">
        <div className="w-[1500px] 2xl:w-full 2xl:px-5 flex flex-col items-center py-10 gap-10 h-full">
            <h1 className="text-green-600 text-xl text-center font-normal px-5
                relative
                before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
                after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
                
            ">
                GOŞMAÇALAR
            </h1>
            <h1 className="text-green-700 font-bold text-3xl font-nunito">
                Okuwlarymyz bilen içgin öwrenmek isleseňiz!
            </h1>
            <div className="w-full flex flex-row md:flex-col flex-wrap justify-evenly lg:gap-10 md:gap-1 md:items-center">
                <Card 
                    url={Add1}
                    title='SURAT ÇEKMEK'
                    description='Surat çekmek üçin albom 40 list. Albomda galamlar, flomaster we boýaglar bilen surat çekmek üçin niýetlenen. Albomlarda surat çekmek hemmeler üçin gyzykly we döredijilik güýmenjesi bolýar.'
                    design="-translate-x-10"
                />

                <Card 
                    url={Add2}
                    title='DIL ÖWRENMEK'
                    description='Häzirki wagtda daşary ýurt dillerini bilmek dünýä ylmyna aralaşmagyň möhüm şertleriniň biridir. Islendik daşary ýurt dilini öwrenmek, edil biziň pikir edişimiz ýaly, beýle bir kyn hem däl we köp wagty talap etmeýär.'
                        
                    design="translate-x-10"
                />
                
                <Card 
                    url={Add3}
                    title='TAKYK YLYMLAR'
                    description='Häzirki wagtda daşary ýurt dillerini bilmek dünýä ylmyna aralaşmagyň möhüm şertleriniň biridir. Islendik daşary ýurt dilini öwrenmek, edil biziň pikir edişimiz ýaly, beýle bir kyn hem däl we köp wagty talap etmeýär.'
                
                    design="translate-y-10"
                />
                
                    
            </div>
        </div>
    </div>
  )
}

export default Additional