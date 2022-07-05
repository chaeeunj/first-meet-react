import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: '김민수',
    comment: '안녕하세요, 민수입니다.',
  },
  {
    name: '윤지민',
    comment: '지금은 2022년 입니다.',
  },
  {
    name: '박영철',
    comment: '날씨가 더워요.',
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
