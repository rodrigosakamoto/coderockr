import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import chevronRight from '../../assets/chevronRight.svg';

import {
  Container,
  SmallCard,
  SmallCardInfoContainer,
  SmallCardInfo,
  BigCard,
  BigCardInfoContainer,
  BigCardInfo,
} from './styles';

function PostList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      const response = api.get('/articles');

      const data = (await response).data.map(article => ({
        ...article,
        article: article.article.replace(/(<p[^>]+?>|<p>|<\/p>)/gim, ''),
        title: article.title.replace(/<img[^>]*>/g, ''),
      }));

      setArticles(data);
    }

    loadArticles();
  }, []);

  return (
    <Container>
      {articles.map((article, index) => (
        <>
          {(index + 1) % 3 !== 0 ? (
            <SmallCard key={article.id} to={`/post/${article.id}`}>
              <div className="image-container">
                <img src={article.imageUrl} alt={article.title} />
              </div>
              <SmallCardInfoContainer>
                <SmallCardInfo>
                  <p>{article.author}</p>
                  <h2>{article.title}</h2>
                  <p>{article.article}</p>
                </SmallCardInfo>
                <div className="icon">
                  <img src={chevronRight} alt="chevron right" />
                </div>
              </SmallCardInfoContainer>
            </SmallCard>
          ) : (
            <BigCard key={article.id} to={`/post/${article.id}`}>
              <div>
                <img src={article.imageUrl} alt={article.title} />
              </div>
              <BigCardInfoContainer>
                <BigCardInfo>
                  <p>{article.author}</p>
                  <h2>{article.title}</h2>
                  <p>{article.article}</p>
                </BigCardInfo>
                <div className="icon">
                  <img src={chevronRight} alt="chevron right" />
                </div>
              </BigCardInfoContainer>
            </BigCard>
          )}
        </>
      ))}
    </Container>
  );
}

export default PostList;
