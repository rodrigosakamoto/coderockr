import { useState, useCallback } from 'react';

import newPost from '../../assets/newPost.png';
import pencil from '../../assets/pencil.svg';

import InputBlock from '../../components/InputBlock';

import api from '../../services/api';

import { Container, NewPostContent } from './styles';

function NewPost() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [post, setPost] = useState('');

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      const data = {
        title,
        author,
        image,
        post,
      };

      api.post('/articles', data);
    },

    [title, author, image, post],
  );

  return (
    <Container>
      <NewPostContent>
        <form onSubmit={handleSubmit}>
          <img src={newPost} alt="new post" />
          <h2>New Post</h2>
          <InputBlock>
            <label>Title</label>
            <input
              placeholder="Fill the title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </InputBlock>

          <InputBlock>
            <label>Author</label>
            <input
              placeholder="Fill the author name"
              value={author}
              onChange={e => setAuthor(e.target.value)}
              required
            />
          </InputBlock>

          <InputBlock>
            <label>Image URL</label>
            <input
              placeholder="Fill the image URL"
              value={image}
              onChange={e => setImage(e.target.value)}
              required
            />
          </InputBlock>

          <InputBlock>
            <label>Post</label>
            <textarea
              placeholder="Post..."
              value={post}
              onChange={e => setPost(e.target.value)}
              required
            />
          </InputBlock>

          <button type="submit">
            <img src={pencil} alt="pencil" />
            Create Post
          </button>
        </form>
      </NewPostContent>
    </Container>
  );
}

export default NewPost;
