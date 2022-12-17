import React from 'react'
import { Button, Divider, makeStyles, Paper, Typography } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'

const Emoji = (props) => {
  return <span
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}>
    {props.symbol}
  </span>
}

export const Explanation = () => {
  const classes = useStyles()
  return (
    <Paper variant='outlined' elevation={0} square className={classes.explanation}>
      <Typography variant="subtitle2" paragraph gutterBottom>
        Lorem ipsum, dolor sit <Emoji symbol="✌️" label="victory" /> amet consectetur adipisicing elit.
      </Typography>
      <Divider />
      <Typography variant="subtitle1" paragraph gutterBottom>
        Lorem ipsum dolor sit amet consectetur <strong>adipisicing</strong> elit. Ex hic porro quisquam voluptates nam aliquam excepturi iste eum officiis et<Emoji symbol="🌲" label="árbol perennifolio" />
      </Typography>
      <Typography variant="subtitle1" paragraph gutterBottom
        style={{ margin: "1rem 1.5rem" }}>
        <Emoji symbol="👉" label="reverso de la mano con el índice apuntando hacia la derecha" />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus impedit omnis deleniti hic accusamus <strong>perferendis</strong> accusantium quae porro, id consequatur
      </Typography>
      <Typography variant="subtitle1" paragraph gutterBottom style={{ margin: "1rem 1.5rem" }}>
        <Emoji symbol="👉" label="reverso de la mano con el índice apuntando hacia la derecha" />voluptatum alias exercitationem debitis harum magnam odit nulla molestias blanditiis.
      </Typography>
      <Typography variant="subtitle1" paragraph gutterBottom>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea explicabo qui obcaecati eaque voluptate eligendi ipsam. Fugit ut officiis obcaecati aliquid voluptatibus animi <strong>maxime</strong> enim ipsam! Illo, fugit exercitationem!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quaerat explicabo necessitatibus, cupiditate autem laborum praesentium laboriosam quidem ipsa nemo commodi <Emoji symbol="😊" label="cara sonriente con ojos sonrientes" />dolore velit omnis dolor rem et vitae vero voluptas?
      </Typography>
      <div className={classes.action}>
        <Button variant='contained' startIcon={<EmailIcon />} style={{ backgroundColor: "#ea5933", color: "#ffe" }}>
          <a href="mailto:direccion@correo.com" className={classes.link}>
            Send me an email
            <span className={classes.extendText}> to learn more...</span>
          </a>
        </Button>
        <br />
        <Typography variant="h6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </div>
    </Paper>
  )
}

const useStyles = makeStyles((theme) => ({
  explanation: {
    width: "inherit",
    height: "auto",
    padding: theme.spacing(2)
  },
  action: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& button:hover": {
      backgroundColor: "#ccc !important",
      color: "#000"
    }
  },
  link:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:"1rem",
    fontStyle:"italic",
    textDecoration: "none"
  },
  [theme.breakpoints.down("md")]: {
    extendText: {
      display: "none"
    }
  }
}))
