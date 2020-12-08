import { useRef, useCallback } from 'react';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErros from '../../utils/getValidationErrors';

import newPost from '../../assets/newPost.png';
import pencil from '../../assets/pencil.svg';

import InputBlock from '../../components/InputBlock';

import api from '../../services/api';

import { Container, NewPostContent } from './styles';

function NewPost() {
  const formRef = useRef(null);

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().required('Titulo obrigatório'),
        author: Yup.string().required('Autor obrigatório'),
        image: Yup.string().required('Imagem obrigatória'),
        post: Yup.string().required('Post obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      toast.success('Cadastrado realizado com sucesso');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);

        formRef.current.setErrors(errors);
      }

      toast.error('Ocorreu um erro ao fazer o cadastro, tente novamente');
    }
  }, []);

  return (
    <Container>
      <NewPostContent>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <img src={newPost} alt="new post" />
          <h2>New Post</h2>
          <InputBlock placeholder="Fill the title" name="title" label="Title" />

          <InputBlock
            name="author"
            placeholder="Fill the author name"
            label="Author"
          />

          <InputBlock
            name="image"
            placeholder="Fill the image URL"
            label="Image URL"
          />

          <InputBlock name="post" placeholder="Post..." label="Post" />

          <button type="submit">
            <img src={pencil} alt="pencil" />
            Create Post
          </button>
        </Form>
      </NewPostContent>
    </Container>
  );
}

export default NewPost;
