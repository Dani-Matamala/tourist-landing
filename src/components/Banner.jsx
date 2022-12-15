import React from 'react'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import banner from '../images/banner.png'
import logo from '../images/logo.png'
import StartsIcon from '@material-ui/icons/Stars'

export const Banner = () => {
  const classes = useStyles()
  return (
    <>
        <Paper variant='outlined' square elevation={0} className={classes.root}>
          <div className={classes.titleContainer}>
            <Typography variant="h4" className={classes.title}>
              Reset your Event in <span style={{color: "#ea59343"}}>BCN</span>
            </Typography>
            <img src={logo} alt="logo" className={classes.logo} />
          </div>
          <div className={classes.subTitleContainer}>
              <Typography variant="h6" color="initial" className={classes.subTitle}>
                  Organiza your meeting in a ...
                  <br />
                  100% certified eco-resort
                  <StartsIcon  className={classes.icon} fontSize="small"/>
                  best-in-class-speed-connection
                  <StartsIcon  className={classes.icon} fontSize="small"/>
                  sorround by nature
                  <StartsIcon  className={classes.icon} fontSize="small"/>
                  20 min from barcelona 
              </Typography>
          </div>
        </Paper>
    </>
  )
}

const useStyles = makeStyles(( theme ) => ({
  root: {
    width: "inherit",
    height: "55vh",
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    color: "#fff",
    fontWeight: "bold",
    position: "relative"
  },
  titleContainer:{
    background: "#000",
    opacity: 0.8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  logo:{
    width: "10rem",
    height: "auto",
    padding: theme.spacing(3)
  },
  title:{
    padding: theme.spacing(2)
  },
  subTitleContainer:{
    background: "#000",
    opacity: 0.9,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  subTitle: {
    color: "#ea5933",
    fontWeight: "bold",
    padding: theme.spacing(3),
    height: "auto",
    textAlign: "center",
  },
  icon:{
    verticalAlign: "middle",
    margin: theme.spacing(0,1)
  },
  [theme.breakpoints.down("sm")]:{
    title:{
      fontSize: "1.5rem",
    },
    logo:{
      width: "7rem",
    },
    subTitle: {
      fontSize: "1rem"
    },
  },
  [theme.breakpoints.down("xs")]:{
    subTitle: {
      fontSize: "0,8rem"
    },
  },
  [theme.breakpoints.down("xxs")]:{
    subTitle: {
      display: "none"
    },
  }
}))







