import React, { useState, useEffect } from "react";

export default function NestedComment() {
  const [showInput, setShowInput] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "This is the first comment.",
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment.",
          replies: [{ id: 4, text: "Reply to the nested reply", replies: [] }],
        },
        { id: 3, text: "Another reply to the first comment", replies: [] },
      ],
    },
    {
      id: 5,
      text: "This is the second comment.",
      replies: [],
    },
  ]);

  const Comment = ({ data, parentId }) => {
    // console.log(data,parentId)
    const [inputVal, setInputVal] = useState("");
    const handleSubmit = (id) => {
      const newReply = {
        id: data.id + "1",
        text: inputVal,
        replies: [],
      };

      //   const addReply = (comments) => {
      //     return comments.map((comment) => {
      //       if (comment.id == id) {
      //         return {
      //           ...comment,
      //           replies: [...comment.replies, newReply],
      //         };
      //       }
      //       if (comment.replies.length > 0) {
      //         return {
      //           ...comment,
      //           replies: addReply(comment.replies),
      //         };
      //       }
      //       return comment;
      //     });
      //   };

      const objRoute = id.split("-");
      const addReply = (comments, objRoute) => {
        return comments.map((item) => {
          if (item.id == objRoute[0] && objRoute.length == 1) {
            return {
              ...item,
              replies: [...item.replies, newReply],
            };
          }

          if (item.id == objRoute[0] && objRoute.length > 1) {
            return {
              ...item,
              replies: addReply(item.replies, objRoute.slice(1)),
            };
          }

          return item;
        });
      };

      setComments(addReply(comments, objRoute));
      setInputVal("");
      setShowInput("");
    };

    return (
      <div
        style={{ border: "1px solid black", padding: "8px 8px 8px 16px" }}
        key={data.id}
      >
        <div style={{ display: "flex", gap: "12px", padding: "12px" }}>
          <p> {data.text} </p>
          <button onClick={() => setShowInput(data.id)}> reply </button>
        </div>
        {data.id == showInput ? (
          <div style={{ display: "flex" }}>
            <input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button onClick={() => handleSubmit(parentId ? parentId : data.id)}>
              submit
            </button>
          </div>
        ) : null}

        {data.replies.map((item) => {
          return (
            <Comment
              data={item}
              parentId={parentId ? parentId + "-" + item.id : item.id}
            />
          );
        })}
      </div>
    );
  };

  console.log(comments);
  return (
    <div>
      <h1>Comment Section</h1>
      {comments.map((data) => {
        return <Comment data={data} key={data.id} parentId={data.id} />;
      })}
    </div>
  );
}
