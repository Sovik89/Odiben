import React, { useState, useEffect } from 'react';

function CreateItem() {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [owner, setOwner] = useState('');

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrl = images.map((image) => URL.createObjectURL(image));
        setImageURLs(newImageUrl);
        // Clean up old URLs when component unmounts or when images change
        return () => {
            URL.revokeObjectURL(newImageUrl);
        };
    }, [images]);

    function onImageChange(e) {
        const newImages = e.target.files;
        const newImageURLs = Array.from(newImages).map((image) => URL.createObjectURL(image));
        setImageURLs((prevImageURLs) => [...prevImageURLs, ...newImageURLs]);
        setImages((prevImages) => [...prevImages, ...newImages]);
    }

    function handleImageDelete(index) {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);

        const updatedImageURLs = [...imageURLs];
        updatedImageURLs.splice(index, 1);
        setImageURLs(updatedImageURLs);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert('WIP');
        // Perform other form submission logic here
    }

    return (
        <div className="relative flex justify-center items-center h-[100vh]  overflow-y-auto">
            <div className="w-full p-6 m-auto bg-white border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md  ">
                <div className="flex items-center justify-center">
                    <img src="/odiben.jpg" className="h-20 w-20" alt="OdiBen Logo" />
                </div>
                <h1 className="text-3xl font-semibold text-center text-purple-700 p-y-4">
                    Create Item
                </h1>

                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col m-3">
                        <label
                            htmlFor="images"
                            className="text-m text-gray-800 mb-2"
                        >
                            Images
                        </label>
                        <input
                            type="file"
                            id="images"
                            multiple
                            accept="image/*"
                            onChange={onImageChange}
                            className="w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        <div className="flex flex-wrap mt-2">
                            {imageURLs.map((imageSrc, index) => (
                                <div key={index} className="relative m-2">
                                    <img
                                        src={imageSrc}
                                        alt={`Image ${index + 1}`}
                                        width={'100px'}
                                        height={'100px'}
                                        className="block"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleImageDelete(index)}
                                        className="absolute top-0 bg-red-500 text-purple font-bold p-1 rounded-full cursor-pointer"
                                    >
                                        ❌ 
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex m-3">
                        <label
                            htmlFor="title"
                            className="self-center w-1/4 text-m text-gray-800"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            required
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className=" flex m-3">
                        <label
                            htmlFor="description"
                            className="self-center w-1/4 text-m text-gray-800"
                        >
                            Description
                        </label>
                        <textarea
                            type="textarea"
                            id="lastName"
                            required
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="flex m-3">
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="type"
                                value="directSale"
                                checked={type === 'directSale'}
                                onChange={() => setType('directSale')}
                            />
                            Direct Sale
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                value="auctionable"
                                checked={type === 'auctionable'}
                                onChange={() => setType('auctionable')}
                            />
                            Auctionable
                        </label>
                    </div>

                    <div className="flex m-3">
                        <label
                            htmlFor="price"
                            className="self-center w-1/4 text-m text-gray-800"
                        >
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            required
                            value={price}
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                            className="w-3/4 px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 w-full text-white bg-purple-700 rounded-md hover:bg-purple-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateItem;