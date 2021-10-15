import {PhoneIcon, MapIcon} from "@heroicons/react/solid";
import {getStrapiMedia} from "../lib/media";

export default function Footer ( { menu, global } ) {
    return (
        <footer id="contact" className="bg-primary pt-16 pb-6">
            <div className="max-w-screen-xl mx-auto px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-3 text-white">
                    <nav className="px-3 space-y-3">
                        {global.logo_white && (
                            <div className="py-2">
                                <img className="h-12 w-auto" src={getStrapiMedia(global.logo_white)} alt="Moringa School logo" />
                            </div>
                        )}
                        <ul id="" className="ml-6 sm:ml-12 leading-relaxed text-normal list-outside space-y-6">
                            {menu && ( menu.map((item) => {
                                return (<li key={`footer-menu-item-${item.id}`}><a href={item.url}>{item.title}</a></li>);
                            }))}
                        </ul>
                    </nav>
                    <div>
                        {global.contacts && (
                        <ul className="px-3 space-y-3">
                            <li>{global.contacts.address}</li>
                            <li>
                                <a target="_blank" href={global.contacts.phone_admissions} className="flex items-center text-gray-100 hover:text-white transition ease-in-out duration-200 mr-4">
                                    <span className="text-secondary mr-3">
                                        <MapIcon className="h-3 w-3" />
                                    </span>
                                    <span>{global.contacts.phone_admissions} (Admissions)</span>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href={global.contacts.phone_data_science}
                                   className="flex items-center text-gray-100 hover:text-white transition ease-in-out duration-200 mr-4">
                                    <span className="text-secondary mr-3">
                                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"></path>
                                        </svg>
                                    </span>
                                    <span>{global.contacts.phone_data_science} (Data Science)</span>
                                </a>
                            </li>

                            <li>
                                <a target="_blank" href={`https://wa.me/${global.contacts.whatsapp}`} className="flex items-center text-gray-100 hover:text-white transition ease-in-out duration-200 mr-4">
                                    <span className="text-secondary mr-3">
                                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"></path>
                                        </svg>
                                    </span>
                                    <span>{global.contacts.whatsapp} (WhatsApp)</span>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href={global.contacts.email}
                                   className="flex items-center text-gray-100 hover:text-white transition ease-in-out duration-200 mr-4">
                        <span className="text-secondary mr-3">
                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"></path>
                            </svg>
                        </span>
                                    <span>{global.contacts.email}</span>
                                </a>
                            </li>
                            <li className="flex items-center text-gray-100 hover:text-white transition ease-in-out duration-200 mr-4">
                        <span className="text-secondary mr-3">
                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"></path>
                            </svg>
                        </span>
                                <span>{global.contacts.postal_address}</span>
                            </li>
                        </ul>
                        )}

                        <div className="mt-8 pl-3 flex items-center">
                            {global.contacts && ( <>
                            <a href={global.social.facebook} target="_blank"
                               className="text-gray-100 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </a>

                            <a href={global.social.linkedin} target="_blank"
                               className="ml-6 text-gray-100 hover:text-text-white">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z"></path>
                                </svg>
                            </a>

                            <a href={global.social.twitter} target="_blank"
                               className="ml-6 text-gray-100 hover:text-text-white">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                </svg>
                            </a>

                            <a href={global.social.youtube} target="_blank"
                               className="ml-6 text-gray-100 hover:text-text-white">
                                <span className="sr-only">YouTube</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M10 2.3C.172 2.3 0 3.174 0 10s.172 7.7 10 7.7 10-.874 10-7.7-.172-7.7-10-7.7zm3.205 8.034l-4.49 2.096c-.393.182-.715-.022-.715-.456V8.026c0-.433.322-.638.715-.456l4.49 2.096c.393.184.393.484 0 .668z"></path>
                                </svg>
                            </a>
                            </>
                            )}
                        </div>
                    </div>
                    <div>
                        {global.contacts && global.contacts.map && (
                            <iframe allowFullScreen="" aria-hidden="false" frameBorder="0" src={global.contacts.map} style={{height:'300px', width:'100%'}} tabIndex="0"></iframe>
                        )}

                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-center text-base leading-6 text-gray-100 mb-3">
                        © {new Date().getFullYear() + global.copyright_text}
                    </p>
                </div>
            </div>
        </footer>
    );
}

