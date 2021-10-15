import { getStrapiMedia } from "../../lib/media";
import Image from "../image";
import {PlayIcon} from "@heroicons/react/solid";

const Feature = ({ homepage }) => {
    return(
        <>
        <section>
            <div className="max-w-7xl mx-auto py-16 sm:py-32 px-8 sm:px-0">
                <div className="space-y-6">
                    <h2 className="text-4xl flex space-x-3">
                        {homepage.feature.mantra && homepage.feature.mantra.split(" ").map((word, i) => {
                            let color = '';
                            switch (i) {
                                case 0:
                                    color = 'text-secondary';
                                    break;
                                case 1:
                                    color = 'text-moringa-dark-green';
                                    break;
                                case 2:
                                    color = 'text-moringa-blue';
                                    break;

                            }
                            return (
                                <span key={`mantra-${i}`} className={color}>{word}.</span>
                            );
                        })}
                    </h2>
                    <div>
                        {homepage.feature.description}
                    </div>
                    <div>
                        <ul role="list" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 md:gap-x-16 pt-6">
                        {homepage.feature.usps && homepage.feature.usps.map((usp, i) => {
                            return (
                                <li key={`usp-${i}`} className="rounded-md border border-moringa-blue">
                                    <div className="space-y-4 py-6">
                                        <img className="mx-auto h-32 w-32" src={getStrapiMedia(usp.image)} alt={`${usp.title} - Moringa School`}/>
                                        <div className="text-xs text-center lg:text-sm">
                                            <h3 className="font-bold text-secondary">{usp.title}</h3>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                        </ul>
                    </div>
                    <div className="flex flex-wrap items-center pt-24">
                        <div className="w-full sm:w-1/2">
                            <a href={homepage.feature.video} data-title="Welcome to Moringa School" data-description="" data-desc-position="right" data-type="video" data-effect="fade" data-width="100%" data-height="auto" data-zoomable="true" data-draggable="true" type="button" className="glightbox relative block rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">Welcome to Moringa School</span>
                                <img className="w-full" src={getStrapiMedia(homepage.feature.poster)} alt="Welcome to Moringa School"/>
                                <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gradient-to-b from-transparent to-primary" aria-hidden="true">
                                    <div className="space-y-3 text-center">
                                        <div className="flex justify-center">
                                            <PlayIcon className="h-16 w-16 text-white" stroke="currentColor" />
                                        </div>
                                    </div>
                                </div>
                               </a>
                        </div>
                        <div className="w-full sm:w-1/2 space-y-8 p-6">
                            <h2 className="text-2xl font-bold text-primary">{homepage.feature.statistics_intro}</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                                {homepage.feature.statistics && homepage.feature.statistics.map((statistic, i) => {
                                    let color = '';
                                    switch (i) {
                                        case 0:
                                            color = 'text-moringa-blue';
                                            break;
                                        case 1:
                                            color = 'text-moringa-dark-green';
                                            break;
                                        case 2:
                                            color = 'text-primary';
                                            break;
                                        case 3:
                                            color = 'text-secondary';
                                            break;

                                    }
                                    return (
                                        <div key={`statistic-${i}`} className={`${color} p-3 space-y-3`}>
                                            <p className="text-4xl font-bold">{statistic.description}</p>
                                            <p className="text-sm">{statistic.title}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Feature;