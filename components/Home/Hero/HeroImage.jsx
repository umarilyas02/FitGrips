import Link from 'next/link'
import React from 'react'

const HeroImage = (props) => {
return (
    <>
    <div
                        className={`bg-cover bg-center bg-no-repeat min-h-[400px] md:min-h-[600px] w-full shadow-lg relative`}
                        style={{ backgroundImage: `url(${props.imageUrl})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div className="absolute inset-0 flex items-end justify-between gap-0">
                            <div className="flex flex-col gap-5 mb-10">
                                <h1 className="text-white text-3xl font-bold px-4">
                                    {props.title}
                                </h1>
                                <div className="flex gap-2 items-center lg:gap-4 pl-4">
                                    {props.t1 && (
                                        <div className="text-white rounded-full ">
                                            <span className="text-white border rounded-3xl p-3 text-xs sm:text">
                                                {props.t1}
                                            </span>
                                        </div>
                                    )}
                                    {props.t2 && (
                                        <div className="text-white rounded-full ">
                                            <span className="text-white border rounded-3xl p-3 text-xs">
                                                {props.t2}
                                            </span>
                                        </div>
                                    )}
                                    {props.t3 && (
                                        <div className="text-white rounded-full ">
                                            <span className="text-white border rounded-3xl p-3 text-xs">
                                                {props.t3}
                                            </span>
                                        </div>
                                    )}
                                    {props.t4 && (
                                        <div className="text-white rounded-full ">
                                            <span className="text-white border rounded-3xl p-3 text-xs">
                                                {props.t4}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="text-white py-2 font-semibold hover:scale-[1.05] hover:underline mb-15 md:mb-20 mr-2 whitespace-nowrap">
                                 <Link href="/shop">Shop now &nbsp;{"  >"}</Link>
                                </button>
                            </div>
                        </div>
                    </div>
    
    </>
)
}

export default HeroImage