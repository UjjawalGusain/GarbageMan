import React, { useCallback, useState, useRef } from 'react'
import useInfiniteScroll from './InfiniteScroll/useInfiniteScroll'

const InfiniteScroll = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { list, error, loading } = useInfiniteScroll(pageNumber);

  const observer = useRef();

  const lastCardRef = useCallback(node => {
    if (loading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log("visible");
        setPageNumber(prev => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading]);

  return (
    <section>
      {list.map((data, index) => {
        if (index === list.length - 1) {
          return (
            <div className='card' ref={lastCardRef} key={data.id}>
              <p>{data.name} {data.location} {data.status}</p>
              <img src={data.image} alt="image" />
            </div>
          );
        } else {
          return (
            <div className='card' key={data.id}>
              <p>{data.name} {data.location} {data.status}</p>
              <img src={data.image} alt="image" />
            </div>
          );
        }
      })}
      {loading && <p>Loading...</p>}
      {error && <p>Error loading more cards</p>}
    </section>
  );
};

export default InfiniteScroll;
