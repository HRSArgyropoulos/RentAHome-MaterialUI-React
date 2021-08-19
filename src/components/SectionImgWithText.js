import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  sectionImg: {
    width: '70%',
  },
  sectionImgWithText: {
    width: '85%',
    margin: '2rem auto 8rem auto',
  },
  textContent: {
    textAlign: 'left',
    '& h2': {
      marginBottom: '2.5rem',
    },
  },
});

const SectionImgWithText = (props) => {
  const { imgLocation, children: text, imgSrc, title } = props;
  const classes = useStyles({ imgLocation, text });
  return (
    <section className={classes.sectionImgWithText}>
      <Grid
        container
        direction={imgLocation === 'left' ? 'row' : 'row-reverse'}
        alignItems="center"
        spacing={5}>
        <Grid item sm={12} md={4}>
          <img
            src={process.env.PUBLIC_URL + `img/` + imgSrc + '.jpg'}
            alt={imgSrc}
            className={classes.sectionImg}
          />
        </Grid>
        <Grid item sm={12} md={8}>
          <div className={classes.textContent}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default SectionImgWithText;
