import { useState, useEffect } from "react";

export default function useVisitor(pageNumber) {
    const [visitors, setVisitors] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setLoading(true);
        setError(false);

        fetch(`https://reqres.in/api/users?page=${pageNumber}`).then(res => res.json()).then(data => {
            setVisitors(prev => [...prev, ...data.data])
            setLoading(false);
            if (data.total_pages <= pageNumber) {
                setHasMore(false)
            }
        }).catch(err => {
            setError(true);
            console.error({ err })
        })
    }, [pageNumber])


    return { visitors, loading, error, hasMore }
}