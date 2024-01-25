'use client'

import lottieJson from '../../../next-portfolio/public/animation.json'
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

export default function Animation() {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        
        <Lottie
            loop={true}
            play={true}
            animationData={lottieJson}
        />
    )
}

