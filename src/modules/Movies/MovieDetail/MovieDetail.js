import { getSelectedMovie } from '../../../redux/features/movie';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './MovieDetail.scss';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

function MovieDetail() {
  const movie = useSelector(getSelectedMovie);
  return (
    <div className={'container'}>
      <div class='movie-card'>
        <div class='container'>
          <a href='#'>
            <img
              src={movie.image}
              alt='cover'
              class='cover'
              style={{ width: '350px', height: '250px' }}
            />
          </a>

          <div class='hero'>
            <div class='details'>
              <div class='title1'>{movie.title}</div>
              <span class='likes'>109 likes</span>
            </div>
          </div>

          <div class='description'>
            <div class='column1'>
              {movie.genreList.map((g) => {
                return <span class='tag'>{g.value}</span>;
              })}
            </div>

            <div class='column2'>
              <p>{movie.plot}</p>

              <div class='avatars'>
                {movie.stars.split(',').map((s, i) => {
                  return (
                    <a href='#' data-tooltip={s} data-placement='top'>
                      <img
                        src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png'
                        alt='s'
                      />
                      <span>{s}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
