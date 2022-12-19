import React from 'react'
import { makeStyles, Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core'
import tile_data from '../data/tile_data'

const GalleryComponent = () => {
    const classes = useStyles()
  return (
    <Paper variant='outlined' squere elevation={0} className={classes.galleryRoot}>
        <div className={classes.mosaic}>
            <GridList cellHeight={220} className={classes.gridList}>
                {
                    tile_data.map( tile => (
                        <GridListTile key={tile.title}>
                            <img src={tile.image} alt={tile.title} />
                            <GridListTileBar title={tile.title}/>
                        </GridListTile>
                    ))
                }
            </GridList>
        </div>
    </Paper>
  )
}

export default GalleryComponent

const useStyles = makeStyles( theme => ({
    galleryRoot:{
        height: "auto"
    },
    mosaic:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around" 
    },
    gridList:{
        width:"1000px",
        height:"550px",
        "&::-webkit-scrollbar":{
            display: "none"
        }
    }

}))