import React from 'react'
import AddCardIcon from '@mui/icons-material/AddCard';
import PageviewIcon from '@mui/icons-material/Pageview';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';


function Wallet() {
    const [isHovered, setIsHovered] = useState(false);

    const handleAddMoneyHover = () => {
        setIsHovered(true);
    };

    const handleAddMoneyLeave = () => {
        setIsHovered(false);
    };
    const handleSearchTransactionHover = () => {
        setIsHovered(true);
    };

    const handleSearchTransactionLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className=" wallet_container w-[100] p-1 bg-white border-t border-purple-600 text-purple-800 rounded shadow-lg shadow-purple-800/50 ">
            <h1 className="text-2xl font-bold mb-4 text-center">My Wallet</h1>
            {/* Image Placeholder */}
            <div className="mx-auto mb-4">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="mx-auto rounded-full"
                    style={{ width: '150px', height: '150px' }}
                />
            </div>

            
            <label htmlFor="email" className="block text-lg m-4 p-1 flex justify-center font-bold text-purple-800">
                Email /User Name : Dummy Name
            </label>
            <label htmlFor="Balance" className="block text-lg m-4 p-1 flex justify-center font-bold text-purple-800">
                Wallet Balance : 234.90
            </label>
            
            <div className='flex flex-row m-4 p-6 justify-center'>
            <Tooltip title="Add Money" arrow>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        padding:'20px',
                        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                        transition: 'transform 0.5s ease-in',
                    }}
                    onMouseEnter={handleAddMoneyHover}
                    onMouseLeave={handleAddMoneyLeave}
                >
                    <AddCardIcon
                        style={{
                            height: '50px',
                            width: '50px',
                            color: 'purple',
                            cursor: 'pointer',
                        }}
                    />
                </div>
            </Tooltip>
            <Tooltip title="View Recent Transactions" arrow>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        padding:'20px',
                        transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                        transition: 'transform 0.5s ease-in',
                    }}
                    onMouseEnter={handleSearchTransactionHover}
                    onMouseLeave={handleSearchTransactionLeave}
                >
                    <PageviewIcon
                        style={{
                            height: '50px',
                            width: '50px',
                            color: 'purple',
                            cursor: 'pointer',
                        }}
                    />
                </div>
            </Tooltip>
            </div>
            {/* <div className='transactions flex flex-col relative m-3 '>
                <div className='transaction p-1 flex space-x-60 items-center m-2 bg-white border border-purple-600 text-purple-800 rounded shadow-m shadow-purple-800/50 '>

                    <div class="details w-2/4">
                        <div class="title text-left grow text-sm font-bold mb-1">99 designs</div>
                        <div class="time text-sm opacity-60 font-semibold tracking-wide">03.45PM
                        </div>
                    </div>
                    <div class="amount tracking-wide text-green-500 text-sm font-semibold">+&nbsp;750&#8377;
                    </div>

                </div>
                <div className='transaction p-1 flex space-x-60 items-center bg-white m-2 border border-purple-600 text-purple-800 rounded shadow-m shadow-purple-800/50 '>

                    <div class="details w-2/4">
                        <div class="title text-left grow text-sm font-bold mb-1">7 Trans</div>
                        <div class="time text-sm opacity-60 font-semibold tracking-wide">05.45AM
                        </div>
                    </div>
                    <div class="amount tracking-wide text-red-500 text-sm font-semibold">-&nbsp;250&#8377;
                    </div>

                </div>
            </div> */}
            <div className='flex flex-col justify-center'>
                <h2 className="mx-auto">Powered By:</h2>
                <div className="mx-auto mb-1 flex flex-row justify-center ">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                alt="Payment Mode 1" 
                className="mx-auto "
                style={{ width: '150px', height: '150px' }}/>
                <img 
                src="https://thegivingblock.com/wp-content/uploads/2023/02/MetaMask-Partnership-The-Giving-Block.png"
                alt="Payment Mode 2" 
                className="mx-auto "
                style={{ width: '150px', height: '150px' }}/>
                </div>
            </div>
        </div>
    )
}

export default Wallet