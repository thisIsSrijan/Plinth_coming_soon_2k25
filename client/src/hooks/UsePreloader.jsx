import { useState, useEffect } from "react";

const UsePreloader = () => {
const [isPreloading, setIsPreloading] = useState(true);
const [showContent, setShowContent] = useState(false);

useEffect(() => {
    const preloaderTimer = setTimeout(() => {
    setIsPreloading(false);
    setTimeout(() => setShowContent(true), 100);
    }, 5500);

    return () => clearTimeout(preloaderTimer);
}, []);

return { isPreloading, showContent };
};

export default UsePreloader;
