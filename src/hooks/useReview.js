import { useEffect, useState } from 'react';

const useReview = () => {
    const [review, setReview] = useState();
    useEffect(() => {
        fetch('https://secure-coast-01633.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return [review]
};

export default useReview;