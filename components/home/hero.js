import { getStrapiMedia } from "../../lib/media";
import { StarIcon } from '@heroicons/react/solid'
import Image from "../image";
const Hero = ({ homepage }) => {
    return (
       <>
           {homepage.hero && (
           <section className="bg-cover bg-no-repeat bg-center" style={{backgroundImage : `url('${getStrapiMedia(homepage.hero.image)}')`}}>
               <div className="bg-cover bg-no-repeat bg-bottom" style={{backgroundImage : `url('${getStrapiMedia(homepage.hero.pattern)}')`}}>
                   <div className="bg-primary bg-opacity-50">
                       <div className="max-w-7xl mx-auto flex items-center px-8 sm:px-0 py-16 sm:py-32 xl:py-48">
                           <div className="max-w-2xl space-y-8 text-white">
                               <h1 className="text-3xl sm:text-5xl font-bold">{homepage.hero.title}</h1>
                               <p className="text-xl leading-relaxed font-light">{homepage.hero.description}</p>
                               <a href={homepage.hero.cta.url} className="inline-block mt-3 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-1 sm:flex-shrink-0 sm:inline-flex sm:items-center">
                                   {homepage.hero.cta.title}
                               </a>
                           </div>
                       </div>
                       <section className="bg-primary bg-opacity-50 text-white">
                           <div className="max-w-7xl mx-auto px-8 sm:px-0 py-6 border-b border-secondary">
                                <div className="flex space-x-3 divide-x divide-gray-100">
                                    <div className="w-full sm:w-2/5 grid grid-cols-3 gap-3 p-3">
                                        {homepage.hero.awards && homepage.hero.awards.map((award, i) => {
                                            return (
                                                <div key={`award-${i}`}>
                                                    <div className="flex justify-center mb-3">
                                                        <Image style={{height:"40px"}} image={homepage.hero.trophy} />
                                                    </div>
                                                    <p className="text-xs">{award.title}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="w-full sm:w-1/5 p-3 text-center">
                                        <span className="block mb-3 text-xs">{homepage.hero.rating && homepage.hero.rating.label}</span>
                                        <span className="flex justify-center space-x-3">
                                            <StarIcon className="h-10 w-10 text-yellow-500" />
                                            <StarIcon className="h-10 w-10 text-yellow-500" />
                                            <StarIcon className="h-10 w-10 text-yellow-500" />
                                            <StarIcon className="h-10 w-10 text-yellow-500" />
                                        </span>
                                    </div>
                                    <div className="w-full sm:w-2/5 p-3 text-center">
                                        <span className="block mb-3 text-xs">Our Partners:</span>
                                        <div className="flex space-x-8 items-center justify-center">
                                            {homepage.hero.partners && homepage.hero.partners.map((partner, i) => {
                                                return (<Image key={`partner-${i}`} style={{height:"40px"}} image={partner.image} />);
                                            })}
                                        </div>
                                    </div>

                                </div>
                           </div>
                           <div className="max-w-5xl mx-auto text-center px-8 sm:px-0 py-6">
                               <p>
                                   <span className="pr-3">{homepage.hero.announcement.title}</span><a href={homepage.hero.announcement.url} className="text-secondary">{homepage.hero.announcement.label}</a>
                               </p>
                           </div>
                       </section>
                   </div>
               </div>
           </section>
           )}
       </>
        );
};

export default Hero;