import React from 'react'
import Header from './Header';
import './../App.css';
function HomePage() {
    return (
        <div className='min-w-[300px]'>
            <Header />
            <div>
                <div className='py-10 flex flex-row flex-wrap justify-around'>
                    {/* Buy Card */}
                    <div class="max-w-sm mb-6 md:mb-0 rounded-lg shadow-md shadow-purple-600 items-center">
                        <img
                            class="object-cover w-full h-48"
                            src="https://www.squareyards.com/cdn-cgi/image/quality=70,fit=crop,gravity=auto,format=webp/https://www.squareyards.com/blog/wp-content/uploads/2015/09/buying-a-property-at-auction-1.jpg"
                            alt="image"
                        />
                        <div class="px-6 py-4">
                            <h4 class="mb-3 text-xl font-semibold tracking-tight text-purple-600">
                                Buying the Auctionables
                            </h4>
                            <p class="mb-2 leading-normal text-sky-900">
                                Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium,
                                quibusdam facere quo laborum maiores sequi nam tenetur laud.
                            </p>
                            <button
                                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                                onClick={()=>{alert("Buy Work in Progress")}}>
                                Buy
                            </button>
                        </div>
                    </div>
                    {/* Sell Card */}
                    <div class="max-w-sm mb-6 md:mb-0 rounded-lg shadow-md shadow-purple-600 items-center">
                        <img
                            class="object-cover w-full h-48"
                            src="https://images.squarespace-cdn.com/content/v1/53e05bb2e4b0b27bce115c5c/1424387116728-55O5DNZZXAIKK4C2JEND/image-asset.jpeg"
                            alt="image"
                        />
                        <div class="px-6 py-4">
                            <h4 class="mb-3 text-xl font-semibold tracking-tight text-purple-600">
                                Sale of the Auctionables
                            </h4>
                            <p class="mb-2 leading-normal text-sky-900">
                                Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium,
                                quibusdam facere quo laborum maiores sequi nam tenetur laud.
                            </p>
                            <button
                                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                                onClick={()=>{alert("Sell Work in Progress")}}>
                                Sell
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomePage;