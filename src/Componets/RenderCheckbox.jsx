import React, { useEffect, useState } from "react";

const RenderCheckbox = React.memo(
  function RenderCheckbox({ data, updateCheck }) {
    return (
      <div>
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="checkbox"
            checked={data.isChecked}
            onChange={(e) => updateCheck(data.id, e.target.checked)}
          />
          <p> {data.title} </p>
        </div>
        {data.childrens.length > 0 &&
          data.childrens.map((item) => {
            return (
              <div style={{ paddingLeft: "16px", margin: "12px 0" }}>
                <RenderCheckbox
                  key={item.id}
                  data={item}
                  updateCheck={updateCheck}
                />{" "}
              </div>
            );
          })}
      </div>
    );
  }
  // (prevProps, nextProps) =>
  //   prevProps.data.isChecked === nextProps.data.isChecked
);

export default RenderCheckbox;
