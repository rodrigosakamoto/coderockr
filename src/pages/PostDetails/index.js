import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { formatDateWithDate } from '../../utils/formatDate';

import api from '../../services/api';

import {
  Container,
  DetailsContainer,
  DetailsHeader,
  DetailsHeaderContent,
  DetailsContent,
} from './styles';

function PostDetails() {
  const params = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    api.get(`/articles/${params.id}`).then(response => {
      setArticle({
        ...response.data,
        article: response.data.article.replace(/<p>/gi, '').split(/<\/p>/),
        title: response.data.title.replace(/<img[^>]*>/g, ''),
        date: formatDateWithDate(response.data.date),
      });
    });
  }, [params.id]);

  return (
    <Container>
      <DetailsContainer>
        <DetailsHeader>
          <div>
            <img src={article.imageUrl} alt={article.id} />
          </div>
          <DetailsHeaderContent>
            <div>
              <span>{article.date}</span>
              <p>{article.author}</p>
              <h2>{article.title}</h2>
            </div>
          </DetailsHeaderContent>
        </DetailsHeader>
        <DetailsContent>
          <div>
            <p>{article.article}</p>
          </div>
        </DetailsContent>
      </DetailsContainer>
    </Container>
  );
}

export default PostDetails;
