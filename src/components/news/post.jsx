import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  FLEX_COLUMN,
  RESET,
  BORDER_COLOR,
  FLEX_ROW_CENTER,
  FLEX_ROW
} from '../../const';

const PostBlock = styled.div`
  ${FLEX_COLUMN};
  width: 60rem;
  background-color: white;
  border: 1px solid ${BORDER_COLOR};
  margin-top: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const PostBlockTop = styled.div`
  ${FLEX_ROW_CENTER};
  height: 6rem;
  padding-left: 1.5rem;
`;

const PostBlockTopImg = styled.img`
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  margin-right: 1rem;
`;

const PostBlockTopGroup = styled.div`
  ${FLEX_COLUMN};
`;

const PostBlockTopProfileName = styled(Link)`
  font-size: 1.8rem;
  ${RESET};
  text-decoration: none;
  color: black;
`;

const PostBlockTopPlace = styled.h3`
  font-size: 1.3rem;
  ${RESET};
  padding-left: 1rem;
`;

const PostBlockImage = styled.img`
  max-width: 100%;
  max-height: 40rem;
`;

const PostMedia = styled.div`
  ${FLEX_ROW_CENTER};
  width: 100%;
  height: 4rem;
  padding-left: 1.5rem;
`;

const PostMediaIcon = styled.span`
  width: 3.5rem;
  height: 3.5rem;
  background-size: cover;
  margin-right: 0.7rem;
  cursor: pointer;
`;

const PostMediaIconLike = styled(PostMediaIcon)`
  background-image: url('https://png.icons8.com/metro/1600/like.png');
`;

const PostMediaIconComment = styled(PostMediaIcon)`
  background-image: url('https://cdn4.iconfinder.com/data/icons/vectory-basic/40/comment_2-512.png');
`;

const PostBlockLikes = styled.div`
  padding-left: 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const PostBlockCommentsField = styled.section`
  padding: 0 1.5rem;
  min-height: 20rem;
  width: 100%;
  box-sizing: border-box;
`;

const CommentBlock = styled.div`
  ${FLEX_ROW};
  width: 100%;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

const CommentProfileName = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  margin-right: 0.6rem;
`;

const CommnetText = styled.p`
  ${RESET};
  text-align: justify;
`;

// сделал только лайки и место!!!!
// доделать сервер, приходят не все данные
const Post = ({ likes, place }) => (
  <PostBlock>
    <PostBlockTop>
      <Link to="profile/naishuller">
        <PostBlockTopImg
          src="https://instagram.fhrk1-1.fna.fbcdn.net/vp/98b1325120ac84f43ba2fac6e43779b6/5C26246B/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/20687163_858709000973939_4386291314463866880_n.jpg"
          alt="profileNamePhoto"
        />
      </Link>
      <PostBlockTopGroup>
        <PostBlockTopProfileName to="profile/naishuller">
          ellerch_
        </PostBlockTopProfileName>
        <PostBlockTopPlace>• {place}</PostBlockTopPlace>
      </PostBlockTopGroup>
    </PostBlockTop>
    <PostBlockImage
      src="https://instagram.fhrk1-1.fna.fbcdn.net/vp/e6820c66e70a68ca5a0743e2963e06dd/5C200963/t51.2885-15/e35/40645315_291771558087710_176746173859018166_n.jpg"
      alt="postImage"
    />
    <PostMedia>
      <PostMediaIconLike />
      <PostMediaIconComment />
    </PostMedia>
    <PostBlockLikes>{likes} likes</PostBlockLikes>
    <PostBlockCommentsField>
      <CommentBlock>
        <CommnetText>
          <CommentProfileName to="/test">tewtewiu</CommentProfileName>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit,
          eaque perspiciatis magnam voluptatibus corrupti facere quisquam nisi
          iusto fugit aspernatur odit harum, minima ipsam consequuntur. Dolor ut
          facilis aliquam. Eaque quae ullam earum, nam quod deserunt nostrum, ut
          atque rem officiis quam praesentium ipsam quo quaerat consequatur
          reiciendis in possimus laboriosam laborum, harum pariatur id libero a.
          Non, delectus? Temporibus porro deleniti doloribus corrupti suscipit
          maxime, vitae odit sint natus quis, maiores possimus, exercitationem
          nam culpa quasi aspernatur cumque. Eveniet placeat cumque dolorum
          ratione voluptatum repellat dignissimos facere autem. Nesciunt dicta
          perferendis deserunt delectus, enim quisquam quo. Veritatis
          repudiandae tempora accusamus voluptatum sunt reprehenderit dolor
          provident obcaecati, sapiente quasi fugiat officiis maiores autem
          tempore velit rerum. Illum, incidunt accusamus! Inventore quasi
          facilis pariatur ipsum! Provident consequatur ab accusamus aut non
          similique
        </CommnetText>
      </CommentBlock>
      <CommentBlock>
        <CommnetText>
          <CommentProfileName to="/test">tewtewiu</CommentProfileName>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit,
          eaque perspiciatis magnam voluptatibus corrupti facere quisquam nisi
          iusto fugit aspernatur odit harum, minima ipsam consequuntur. Dolor ut
          facilis aliquam. Eaque quae ullam earum, nam quod deserunt nostrum, ut
          atque rem officiis quam praesentium ipsam quo quaerat consequatur
          reiciendis in possimus laboriosam laborum, harum pariatur id libero a.
          Non, delectus? Temporibus porro deleniti doloribus corrupti suscipit
          maxime, vitae odit sint natus quis, maiores possimus, exercitationem
          nam culpa quasi aspernatur cumque. Eveniet placeat cumque dolorum
          ratione voluptatum repellat dignissimos facere autem. Nesciunt dicta
          perferendis deserunt delectus, enim quisquam quo. Veritatis
          repudiandae tempora accusamus voluptatum sunt reprehenderit dolor
          provident obcaecati, sapiente quasi fugiat officiis maiores autem
          tempore velit rerum. Illum, incidunt accusamus! Inventore quasi
          facilis pariatur ipsum! Provident consequatur ab accusamus aut non
          similique
        </CommnetText>
      </CommentBlock>
    </PostBlockCommentsField>
  </PostBlock>
);

export default Post;
