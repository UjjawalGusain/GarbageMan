import { useState, useEffect } from "react";

export default function useInfiniteScroll(pageNumber) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [list, setList] = useState([]);

    // Generate N fake cards
    const getNewCardComponentData = (count, pageNumber) => {
        let items = [];
        for (let i = 0; i < count; i++) {
            items.push({
                id: `page_${pageNumber}_image_${i}`,
                name: `Name ${pageNumber}-${i}`,
                location: `Location ${i}`,
                status: "Pending Request",
                image: "sample.jpg",
            });
        }
        return items;
    };

    const getNewPage = () => {
        try {
            setLoading(true);
            setError(false);

            const res = getNewCardComponentData(5, pageNumber);
            setList((prev) => [...prev, ...res]);

            setLoading(false);
        } catch (err) {
            setError(true);
        }
    };

    useEffect(() => {
        getNewPage();
    }, [pageNumber]);

    return { list, error, loading };
}
