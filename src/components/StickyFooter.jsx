import React from 'react'
import { Container, makeStyles, Typography, Link } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'

const Copyright= () => {
  return (
    <Typography variant='body2' color='textSecondary'>
      Copyright©️
      <Link color='inherit' href='https://google.com'
            target="_blank" rel="norereferrer">
            pagina-de-prueba.com</Link>
            {
              new Date().getFullYear()
            }
    </Typography>
  )
}

export const StickyFooter = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
          <Typography variant='body1'>
              Curate with <FavoriteIcon style={{color:"red"}}/>
              by the <span>
                <a href="https://google.com"
                    target="_blank"
                    rel="noreferrer">
                  Lorem ipsum dolor
                </a>
              </span>
          </Typography>
          <Copyright />
      </Container>
    </footer>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    textAlign: "center"
  }
}))