import React, { useState, useEffect, useRef } from "react";
import SkeletonDiv from "./SkeletonDiv";

const SkeletonLoader = ({ isLoading, children }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState([]);

  const getElementDimensions = (element, depth = 0) => {
    if (!element || depth > 2) return null;
    const { height, width } = element.getBoundingClientRect();
    const styles = window.getComputedStyle(element);

    const children = Array.from(element.children)
      .map((child, i) => getElementDimensions(child, depth + 1))
      .filter(Boolean);

    return {
      height,
      width,
      borderRadius: styles.borderRadius,
      margin: styles.margin,
      children,
      padding: styles.padding,
      display: styles.display,
      flexDirection: styles.flexDirection,
      justifyContent: styles.justifyContent,
      alignItems: styles.alignItems,
      gap: styles.gap,
      position: styles.position,
      top: styles.top,
      left: styles.left,
      right: styles.right,
      bottom: styles.bottom,
    };
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const observeSize = () => {
      if (!containerRef?.current) return;

      const rootElement = getElementDimensions(containerRef.current);
      setDimensions(rootElement.children);
    };

    const resizeObserver = new ResizeObserver(observeSize);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  console.log('dimensions -->',dimensions)

  return (
    <div style={{ position: "relative" }}>
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        {children}
      </div>
      {isLoading
        ? dimensions.map((item) => {
            return <SkeletonDiv dimensions={item} key={item.height} />;
          })
        : children}
    </div>
  );
};

export default SkeletonLoader;
