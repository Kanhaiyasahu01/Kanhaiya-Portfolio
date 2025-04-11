import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import image1 from "../../assets/stack/Nodejs.svg";
import image2 from "../../assets/stack/MongoDB.svg";
import image3 from "../../assets/stack/Express.png";
import image4 from "../../assets/stack/react-icon.svg";


const CircularAnimation = () => {
    const images = [image1, image2, image3, image4];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, []);

    const positions = [
        { x: "0%", y: "-140%", scale: 0.8 }, // Top larger
        { x: "140%", y: "0%", scale: 0.8 }, // Right larger
        { x: "0%", y: "140%", scale: 0.8 }, // Bottom larger
        { x: "-140%", y: "0%", scale: 1.5 }, // Main focus (biggest)
    ];

    return (
        <div className="relative w-32 h-32 sm:w-64 sm:h-64 md:w-64 md:h-64 lg:h-64 lg:w-64 flex flex-col items-center justify-center mt-6 md:mt-0">
            <div className="relative w-full h-full flex items-center justify-center">
                {images.map((img, i) => {
                    const positionIndex = (i - index + images.length) % images.length;
                    const { x, y, scale } = positions[positionIndex];

                    return (
                        <motion.img
                            key={i}
                            src={img}
                            className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full"
                            style={{ zIndex: positionIndex === 3 ? 10 : 5 }} // Keep bigger image on top
                            animate={{ x, y, scale, opacity: positionIndex === 3 ? 1 : 0.7 }}
                            transition={{ duration: 1.2 }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CircularAnimation;