'use client'

import JotFormEmbed from "@/app/components/JotformWrapper"
import ResourceItem from "@/app/components/ResourceItem"
import Link from "next/link"
import { useEffect } from "react"

export default function Page(){
    useEffect(() => {
        document.querySelectorAll('a.scroll-smooth').forEach((value: Element, _key: number, _parent: NodeListOf<Element>) => {
            const anchor = value as HTMLAnchorElement;
            anchor.addEventListener('click', function(this: HTMLAnchorElement, e: MouseEvent) {
                e.preventDefault();
    
                const href = this.getAttribute('href');
                if (href) {
                    document.querySelector(href)?.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });        
    }, []);    
    return(
        <div className="p-5">
            <div className="p-5 bg-yellow rounded-[50px]">
                <h1 className="font-bold text-5xl text-center mb-8">Envía tu CV</h1>
                <div className="m-3 flex flex-row justify-between">
                    <div className="p-3 flex w-60 justify-center place-items-center bg-white h-20 rounded-[20px]">
                        <p className="underline text-center text-xl"><Link href="#recursos">Recursos para hacer tu CV</Link></p>
                    </div>
                    <div className="p-3 flex w-60 justify-center place-items-center bg-white h-20 rounded-[20px]">
                        <p className="underline text-center text-xl"><Link href="#resourceContainer">Plataformas de Empleo</Link></p>
                    </div>
                    <div className="p-3 flex w-60 justify-center place-items-center bg-white h-20 rounded-[20px]">
                        <p className="underline text-center text-xl"><Link href="#resourceContainer">CV y Entrevista Global</Link></p>
                    </div>
                </div>
                <JotFormEmbed id="JotFormIFrame-231214637790860" title="Envía tu CV" src="https://form.jotform.com/231214637790860" />
            </div>
            <h1 className="w-full text-center my-10 font-bold text-3xl" id="recursos">Recursos para hacer tu CV</h1>
            <div className="flex flex-row justify-between w-full p-5">
                <ResourceItem nombre="Google" path="/logos/google.png" href="https://www.google.com/search?sca_esv=563883328&rlz=1C1OKWM_esMX954MX954&q=plantilla+curriculum&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjs-dOdqpyBAxXVI0QIHaI_A4gQ0pQJegQIDBAB&biw=1517&bih=687&dpr=0.9" alt="Google" />
                <ResourceItem nombre="MiCVIdeal" path="/logos/cvideal.svg" href="micvideal.mx" alt="MiCVIdeal" />
                <ResourceItem nombre="LiveCareer" path="/logos/livecareer.png" href="https://www.livecareer.es" alt="LiveCareer" />
                <ResourceItem nombre="Canva" path="/logos/canva.svg" href="https://www.canva.com" alt="Canva" />
                <ResourceItem nombre="CVApp" path="/logos/cvapp.webp" href="https://cvapp.mx" alt="CVApp" />
                <ResourceItem nombre="Google Docs" path="/logos/docs.svg" href="https://docs.google.com/document/u/0/" alt="Google Docs" />
            </div>
            <div className="flex flex-row p-10 text-center w-full rounded-[50px] bg-black" id="resourceContainer">
                <div className="flex flex-col w-1/2">
                    <h1 className="text-yellow font-bold text-3xl my-3">Plataformas de Empleo</h1>
                    <iframe className="w-inherit h-[300pt]" src="https://drive.google.com/file/d/1kYmvxbDI2wgYGW7crYAhQmF6CUxk4-g1/preview" allow="autoplay"></iframe>
                </div>
                <div className="flex flex-col w-1/2">
                    <h1 className="text-yellow font-bold text-3xl my-3">CV y Entrevista Global</h1>
                    <iframe className="w-inherit h-[300pt]" src="https://drive.google.com/file/d/1Ak8ZoFp-H30n010uyb1fumGG94alX-L-/preview" allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    )
}