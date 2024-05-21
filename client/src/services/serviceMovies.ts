import movies from 'api/movies';

const onMovies = async () => {
  const result = await movies.list();
  return result
};

export default { onMovies };
