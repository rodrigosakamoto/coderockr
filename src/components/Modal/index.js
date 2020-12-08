import { useCallback, useRef } from 'react';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useModal } from '../../hooks/modal';
import getValidationErros from '../../utils/getValidationErrors';

import Close from '../../assets/close.svg';
import Send from '../../assets/send.svg';

import InputBlock from '../InputBlock';
import TextAreaBlock from '../TextAreaBlock';

import { Container, Content } from './styles';

function Modal() {
  const formRef = useRef(null);

  const { visible, handleModal } = useModal();

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().email().required('E-mail obrigatório'),
        phone: Yup.number()
          .typeError('Apenas números')
          .required('Telefone obrigatório'),
        post: Yup.string().required('Post obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      toast.success('Contato cadastrado com sucesso');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErros(err);

        formRef.current.setErrors(errors);
      }

      toast.error('Ocorreu um erro ao fazer o cadastro, tente novamente');
    }
  }, []);

  return (
    <Container visible={visible}>
      <Content>
        <button type="button" onClick={handleModal}>
          <img src={Close} alt="close" />
        </button>
        <Form onSubmit={handleSubmit} ref={formRef}>
          <h2>Contact</h2>
          <InputBlock
            name="name"
            label="Nome"
            placeholder="Fill your full name"
          />
          <InputBlock
            name="email"
            label="E-mail"
            type="email"
            placeholder="Fill a valid e-mail"
          />
          <InputBlock
            name="phone"
            label="Phone"
            placeholder="Fill your phone"
          />
          <TextAreaBlock name="post" label="Post" placeholder="Hello..." />
          <button type="submit">
            <img src={Send} alt="send" />
            Submit
          </button>
        </Form>
      </Content>
    </Container>
  );
}

export default Modal;
