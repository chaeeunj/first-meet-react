import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  return (
    <div>
      <Comment name={'김민수'} comment={'안녕하세요, 민수입니다.'} />
      <Comment name={'윤지민'} comment={'안녕하세요, 지민입니다.'} />
    </div>
  );
}

export default CommentList;
