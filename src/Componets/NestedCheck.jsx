import { useCallback, useMemo, useState } from "react";
import RenderCheckbox from "./RenderCheckbox";

export default function NestedCheck() {
  const [list, setList] = useState([
    {
      title: "Frontend Development",
      id: "frontend",
      childrens: [
        {
          title: "React",
          id: "react",
          childrens: [
            {
              title: "Hooks",
              id: "hooks",
              childrens: [
                {
                  title: "useState",
                  id: "use_state",
                  childrens: [],
                  isChecked: false,
                },
                {
                  title: "useEffect",
                  id: "use_effect",
                  childrens: [],
                  isChecked: false,
                },
                {
                  title: "Custom Hooks",
                  id: "custom_hooks",
                  childrens: [],
                  isChecked: false,
                },
              ],
              isChecked: false,
            },
            {
              title: "State Management",
              id: "state_management",
              childrens: [
                {
                  title: "Redux",
                  id: "redux",
                  childrens: [],
                  isChecked: false,
                },
                {
                  title: "Context API",
                  id: "context_api",
                  childrens: [],
                  isChecked: false,
                },
              ],
              isChecked: false,
            },
          ],
          isChecked: false,
        },
        {
          title: "TypeScript",
          id: "typescript",
          childrens: [
            {
              title: "Interfaces",
              id: "interfaces",
              childrens: [],
              isChecked: false,
            },
            { title: "Types", id: "types", childrens: [], isChecked: false },
          ],
          isChecked: false,
        },
      ],
      isChecked: false,
    },
    {
      title: "Backend Development",
      id: "backend",
      childrens: [
        {
          title: "Node.js",
          id: "nodejs",
          childrens: [
            {
              title: "Express.js",
              id: "express",
              childrens: [],
              isChecked: false,
            },
            { title: "NestJS", id: "nestjs", childrens: [], isChecked: false },
          ],
          isChecked: false,
        },
        {
          title: "Databases",
          id: "databases",
          childrens: [
            { title: "SQL", id: "sql", childrens: [], isChecked: false },
            { title: "NoSQL", id: "nosql", childrens: [], isChecked: false },
          ],
          isChecked: false,
        },
      ],
      isChecked: false,
    },
  ]);

  const syncAllChilds = (data, res) => {
    return data.map((item) => {
      return {
        ...item,
        isChecked: res,
        childrens: item?.childrens?.length
          ? syncAllChilds(item?.childrens, res)
          : [],
      };
    });
  };

  const isChecked = (item, id, res) => {
    if (item.id == id) {
      return res;
    } else if (item.isChecked) {
      const hasChild = item?.childrens?.some((child) => child.id == id);
      if (hasChild) return res;
      else return item.isChecked;
    } else if (item?.childrens?.length) {
      const immediateChildCheck = item?.childrens?.every(
        (child) => child.id == id && res
      );
      if (immediateChildCheck) return immediateChildCheck;
      return false;
    }
    return item.isChecked;
  };

  const recursiveUpdate = (data, id, res) => {
    return data.map((item) => {
      return {
        ...item,
        isChecked: isChecked(item, id, res),
        childrens:
          item?.childrens?.length && item.id == id
            ? syncAllChilds(item?.childrens, res)
            : recursiveUpdate(item?.childrens, id, res),
      };
    });
  };

  const updateCheck = (id, res) => {
    setList((prev) => recursiveUpdate(prev, id, res));
  };

  return (
    <div style={{ padding: "48px" }}>
      {list.map((item) => {
        return (
          <RenderCheckbox
            data={item}
            updateCheck={updateCheck}
            key={item.title}
          />
        );
      })}
    </div>
  );
}
