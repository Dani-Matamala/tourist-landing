import { List, ListItem, ListSubheader, makeStyles, ListItemIcon,ListItemText } from '@material-ui/core'
import React from 'react'
import data from "../data/list_data"

const ListComponent = () => {
    const classes = useStyles()
    return (
        <List component="nav" aria-labelledby='nested-list-subheader'
            subheader={
                <ListSubheader component="div" id='nested-list-subheader'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </ListSubheader>
            } className={classes.listRoot}>
            {
                data.map(item => {
                    return <ListItem key={item.text}>
                        <ListItemIcon className={classes.icon}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                })
            }
        </List>
    )
}

export default ListComponent

const useStyles = makeStyles((theme) => ({
    listRoot: {
    },
    icon:{
        color: "#ae5933"
    }
}))