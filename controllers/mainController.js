export const home = (req, res) => {
  res.render('index');
}

export const search = async (req, res) => {
  const movieTitle = req.body.movieTitle;
  try {
    const response = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=7d00dba4`);
    const movie = await response.json();
    console.log(movie);
    res.render('results', {movie});
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
};