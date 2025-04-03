import React, { useState, useEffect } from "react";
import "./style.css";

export default function NestedCheckbox() {
  const [checkboxesData, setCheckboxesData] = useState([
    {
      id: 1,
      name: "Electronics",
      checked: false,
      children: [
        {
          id: 2,
          name: "Mobile phones",
          checked: false,
          children: [
            {
              id: 3,
              name: "iPhone",
              checked: false,
            },
            {
              id: 4,
              name: "Android",
              checked: false,
            },
          ],
        },
        {
          id: 5,
          name: "Laptops",
          checked: false,
          children: [
            {
              id: 6,
              name: "MacBook",
              checked: false,
            },
            {
              id: 7,
              name: "Surface Pro",
              checked: false,
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Books",
      checked: false,
      children: [
        {
          id: 9,
          name: "Fiction",
          checked: false,
        },
        {
          id: 10,
          name: "Non-fiction",
          checked: false,
        },
      ],
    },
    {
      id: 11,
      name: "Toys",
      checked: false,
    },
  ]);

  const updateChecksRecursively = (data, res, keyName) => {
    return data.map((item) => {
      return {
        ...item,
        checked: keyName == item.name || keyName == "all" ? res : item.checked,
        children: item?.children?.length
          ? updateChecksRecursively(
              item.children,
              res,
              keyName == item.name ? "all" : keyName
            )
          : [],
      };
    });
  };

  const uncheckParent = (data, curr, res, keyName) => {
    if (data.some((item) => item.name == keyName)) {
      return res;
    }
    return curr.checked;
  };

  const handleChecks = (res, keyName) => {
    setCheckboxesData((prev) =>
      prev.map((item) => {
        return {
          ...item,
          checked:
            keyName == item.name
              ? res
              : uncheckParent(item?.children || [], item, res, keyName),
          children: item?.children?.length
            ? updateChecksRecursively(
                item.children,
                res,
                keyName == item.name ? "all" : keyName
              )
            : [],
        };
      })
    );
  };

  const RenderCheckbox = ({ data }) => {
    return (
      <>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <input
            type={"checkbox"}
            style={{ height: "16px", width: "16px" }}
            checked={data.checked}
            onChange={(e) => handleChecks(e.target.checked, data.name)}
          />
          {data.name}
        </div>
        {data.children?.length
          ? data.children.map((item) => {
              return (
                <div style={{ marginLeft: "50px" }}>
                  <RenderCheckbox data={item} />
                </div>
              );
            })
          : null}
      </>
    );
  };

  return (
    <div>
      <h1>Hello StackBlitz! 10:05</h1>
      <p>Start editing to see some magic happen :)</p>
      {checkboxesData?.map((item) => {
        return <RenderCheckbox data={item} />;
      })}
    </div>
  );
}
