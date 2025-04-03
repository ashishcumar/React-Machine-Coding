import React from "react";

function SkeletonDiv({ dimensions, isChild }) {
  const { children, ...dimensionStyle } = dimensions;

  return (
    <div
      key={dimensions.height}
      style={dimensionStyle}
      className={isChild ? "waveStyle" : ""}
    >
      {dimensions.children?.length
        ? dimensions.children.map((child) => {
            return (
              <SkeletonDiv
                dimensions={child}
                key={child.height}
                isChild={true}
              />
            );
          })
        : null}
    </div>
  );
}

export default SkeletonDiv;
