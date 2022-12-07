import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김자바",
        comment: "안녕하세요",
    },
    {
        name: "아무개",
        comment: "Hi",
    },
    {
        name: "단호박",
        comment:"React"
    },
];

function CommentList(props) {
    return(
        <div>
            { comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;