import { useEffect, useState } from 'react';

const UseWatchs = () => {
    const [watchs, setWatchs] = useState([]);
    useEffect(() => {
        fetch('https://secure-coast-01633.herokuapp.com/watchs')
            .then(res => res.json())
            .then(data => setWatchs(data))
    }, [])
    return [watchs]
};

export default UseWatchs;