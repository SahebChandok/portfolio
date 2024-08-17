import React from 'react'

const Interest = () => {
    return (
        <div>
            <div className='container mx-auto px-4 pt-16 pb-24 mb-10 mt-30 border-b-2 border-gray-200 max-w-[1400px]'>
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">Interests</h2>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 mt-20">

                    <div className='flex flex-col text-center hover:backdrop-blur-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#0000F5"><path d="M480-551 369-663v-217h223v217L480-551Zm183 182L551-480l112-112h217v223H663Zm-583 0v-223h217l112 112-112 111H80ZM369-80v-217l111-112 112 112v217H369Z" /></svg>
                        </div>
                        <div className='text-center'>
                            <p className='mt-7 pb-5'>Gaming</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-center hover:backdrop-blur-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <div className='flex items-center justify-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#BB271A"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm205-493 69-24 18-64q-34-53-84-90.5T575-809l-65 43v70l175 123Zm-409 0 174-123v-70l-64-43q-63 20-113 57.5T189-661l22 64 65 24Zm-54 320 60-7 39-65-62-191-71-24-48 39q0 72 16 131.5T222-253Zm258 113q27 0 54.5-5t57.5-13l33-72-32-55H368l-32 55 33 72q26 8 55 13t56 5ZM374-345h208l61-183-163-117-166 117 60 183Zm365 92q49-57 65-116.5T820-501l-48-33-70 18-62 191 38 65 61 7Z" /></svg>
                        </div>
                        <div className='text-center'>
                            <p className='mt-7 pb-5'>Football</p>
                        </div>
                    </div>



                    <div className='flex flex-col text-center hover:backdrop-blur-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <div className='flex items-center justify-center '>
                            <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#F19E39"><path d="M328-120H120v-360q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v360H632v-296h148v-64q0-125.36-87.32-212.68Q605.36-780 480-780q-125.36 0-212.68 87.32Q180-605.36 180-480v64h148v296Z" /></svg>
                        </div>
                        <div className='text-center'>
                            <p className='mt-7 pb-5'>Music</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-center hover:backdrop-blur-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#75FB4C"><path d="M285-80v-83l124-86v-172L80-288v-102l329-231v-188q0-29 21-50t50-21q29 0 50 21t21 50v188l329 231v102L551-421v172l123 86v83l-194-59-195 59Z" /></svg>
                        </div>
                        <div className='text-center'>
                            <p className='mt-7 pb-5'>Travel</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-center hover:backdrop-blur-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#666666"><path d="M290-80q-54 0-92-38t-38-92v-540q0-54 38-92t92-38h510v600q-26 0-43 21t-17 49q0 28 17 49t43 21v60H290Zm30-260h60v-480h-60v480Zm-30 200h409q-9-15-14-33t-5-37q0-20 5-37.5t15-32.5H290q-29 0-49.5 20.5T220-210q0 29 20.5 49.5T290-140Z" /></svg>
                        </div>
                        <div className='text-center'>
                            <p className='mt-7 pb-5'>Reading</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-center hover:backdrop-blur-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#634FA2"><path d="M160-120v-720h60v60h120v-60h280v60h120v-60h60v720h-60v-60H620v60H340v-60H220v60h-60Zm60-120h120v-120H220v120Zm0-180h120v-120H220v120Zm0-180h120v-120H220v120Zm400 360h120v-120H620v120Zm0-180h120v-120H620v120Zm0-180h120v-120H620v120Z" /></svg>
                        </div>
                        <div className='text-center'>
                            <p className='mt-7 pb-5'>Movies</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Interest
