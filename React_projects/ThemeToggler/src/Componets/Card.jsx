import React from 'react'

function Card() {
    return (
        <>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card
