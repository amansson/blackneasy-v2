const Footer = () => {
    return (
        <div className="pt-16 mx-auto">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 px-16">
                <div className="sm:col-span-2">
                    <a
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img
                            className="block h-8 w-auto"
                            src="./assets/logo.png"
                            alt="Your Company"
                        />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Black and Easy
                        </span>
                    </a>
                    <div className="mt-6 lg:max-w-md">
                        <p className="text-sm text-gray-800">
                            En bra groenendal eller terveuren har allt,
                            arbetsvilja, stabil mentalitet och en sund exteriör
                            som följer rasstandarden. Rasen passar till lite av
                            varje.
                        </p>
                        <p className="mt-4 text-sm text-gray-800">
                            Vill du vara aktiv och ha kul med din hund så hänger
                            en belgare alltid med och tackar aldrig nej.
                        </p>
                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-gray-900">
                        Contacts
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Namn:</p>
                        <a
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Marie-Louise
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Phone:</p>
                        <a
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            0706-170833
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-gray-800">Email:</p>
                        <a
                            href="mailto:stadning@hotmail.com"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            stadning@hotmail.com
                        </a>
                    </div>
                </div>
                <div>
                    <span className="text-base font-bold tracking-wide text-gray-900">
                        Social
                    </span>
                    <div className="flex items-center mt-1 space-x-3">
                        <a
                            href="/"
                            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5"
                            >
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                            </svg>
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        Clicka på ikonen för sociala medier
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-between pt-6 pb-8 border-t lg:flex-row px-16">
                <p className="text-sm text-gray-600">
                    © Copyright 2023 Black and Easy.
                </p>
            </div>
        </div>
    );
};

export default Footer;
