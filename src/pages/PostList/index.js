import { useEffect, useState, useCallback, Fragment } from 'react';

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
import Loading from '../../components/Loading';

function PostList() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function loadArticles() {
      const response = await api.get('/articles', {
        params: {
          _page: page,
        },
      });

      const data = response.data.map(article => ({
        ...article,
        article: article.article
          .substring(0, 80)
          .replace(/<p>/gi, '')
          .split(/<\/p>/),
        title: article.title.substring(0, 50).replace(/<img[^>]*>/g, ''),
      }));

      setArticles([...articles, ...data]);
      setLoading(false);
    }
    loadArticles();
  }, [page]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }

    setPage(page + 1);
  }, [page, loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Container>
      {articles.map((article, index) => (
        <Fragment key={index}>
          {(index + 1) % 3 !== 0 ? (
            <SmallCard to={`/post/${article.id}`}>
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
            <BigCard to={`/post/${article.id}`}>
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
        </Fragment>
      ))}
      {loading && <Loading />}
    </Container>
  );
}

export default PostList;
