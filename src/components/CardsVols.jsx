import React from 'react'
import Icons from './Icons'
import Buttons from './Buttons'

function CardsVols() {
  return (
    <section className='max-w-6xl mx-auto'>

        <Buttons
        textContent={"Filtres"}
        buttonClass={"px-8 py-1 mt-6 ml-6"}
        />

    <div className='border border-gray-600 m-6 p-6 rounded-lg relative'>
        <div>
            <div className='absolute top-2 right-2'>
                <Icons
                iconName={"heartempty"}
                iconClass={"fill-colorG"}/>
            </div>

            <div className='grid grid-cols-4 mt-8'>

                <div className='flex flex-col justify-center text-center'>
                    <p>CompagnieA</p>
                </div>

                <div className='flex flex-col justify-center ml-10'>
                    <p>09:15</p>
                    <p className='font-thin'>PAR</p>
                </div>

                <div className='flex justify-center items-center relative md:left-[-50px] lg:left-[-100px]'>
                    <span className='border-t-2 border-gray-600 w-full'></span>
                    <div className='absolute right-[-16px] top-1/2 transform -translate-y-1/2'>
                        <Icons
                        iconName={"plane"}
                        iconSize={"16px"}
                        iconClass={"text-gray-400"}
                        />
                    </div>
                </div>

                <div className='flex flex-col justify-center ml-6'>
                    <p>09:15</p>
                    <p className='font-thin'>NYC</p>
                </div>

            </div>


            <div className='grid grid-cols-4 mt-8'>

                <div className='flex flex-col justify-center text-center'>
                    <p>CompagnieR</p>
                </div>

                <div className='flex flex-col justify-center ml-10'>
                    <p>09:15</p>
                    <p className='font-thin'>PAR</p>
                </div>

                <div className='flex justify-center items-center relative md:left-[-50px] lg:left-[-100px]'>
                    <span className='border-t-2 border-gray-600 w-full'></span>
                    <div className='absolute right-[-16px] top-1/2 transform -translate-y-1/2'>
                        <Icons
                        iconName={"plane"}
                        iconSize={"16px"}
                        iconClass={"text-gray-400"}
                        />
                    </div>
                </div>

                <div className='flex flex-col justify-center ml-6'>
                    <p>09:15</p>
                    <p className='font-thin'>NYC</p>
                </div>
            </div>
        </div>


        <div className='mt-6 md:absolute md:top-24 md:right-6 md:transform md:-translate-y-1/2 md:w-auto md:ml-12'>
            <div className='grid grid-cols-2 md:grid-cols-1'>
            <div>
                <p className='font-thin'>Offres dès</p>
                <p className='font-bold'>Prix</p>
            </div>
            <div className='flex justify-end md:justify-start md:pt-2'>
                <Buttons textContent={"Voir"} buttonClass={"px-8"} />
            </div>
            </div>
        </div>


    </div>

    </section>
  )
}

export default CardsVols;