import { useEffect, useState, useRef } from "react";

const useElementSize = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      setDimensions(getElementDimensions(containerRef.current));
    };

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef.current);

    updateSize();

    return () => resizeObserver.disconnect(); 
  }, []);

  const getElementDimensions = (element) => {
    if (!element) return null;

    const styles = window.getComputedStyle(element);

    return {
      width: element.offsetWidth,
      height: element.offsetHeight,
      borderRadius: styles.borderRadius,
      margin: styles.margin,
      children: [...element.children].map(getElementDimensions).filter(Boolean),
    };
  };

  return { containerRef, dimensions };
};


export default useElementSize;