import React, { useContext, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { CardContent } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import { useLocation } from 'react-router';
import API from '../../utils/API';
import UserContext from '../../utils/UserContext';

// labels for ⭐ rating
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        boxShadow: ".1rem .1rem .25rem black"
    },
    media: {
        height: "300px",
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    text: {
        fontSize: "1rem"
    },
    rating: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
        marginLeft: "auto"
    }
}));

export default function MovieCard(props) {
    const classes = useStyles();
    const location = useLocation();
    const user = useContext(UserContext);

    // const [value, setValue] = useState(0);
    // index of value when user hovers
    const [hover, setHover] = useState(-1);

    const handleAddMovie = () => {
        API.addMovie(props.movie, user.email)
            .then(({ data }) => console.log("success!", data.nModified, " modified"))
    }

    const toggleWatched = (isWatched) => {
        API.toggleWatched(user.email, props.movie.title, isWatched)
            .then(() => props.updateUsers())
    }

    const updateRating = (event) => {
        API.setRating(user.email, props.movie.title, event.target.value)
            .then(() => props.updateUsers())
    }

    return (
        <Grid item xs={location.pathname === '/collections' ? 12 : 6}>
            <Card className={classes.root} style={{ marginLeft: "auto", marginRight: "auto" }}>
                <CardHeader title={props.movie.title} subheader={"Release Date: " + props.movie.release_date} />
                <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
                    title="Movie poster"
                />
                <CardContent>
                    <details>
                        <summary>Overview</summary>
                        {props.movie.overview}
                    </details>
                </CardContent>
                <CardActions disableSpacing>
                    {
                        location.pathname === '/collections' ? (
                            <>
                                <IconButton aria-label="add to favorites" onClick={() => toggleWatched(!props.movie.watched)}>
                                    {
                                        !props.movie.watched && <VisibilityOffIcon />
                                    }
                                    {
                                        props.movie.watched && <VisibilityIcon />
                                    }
                                </IconButton>
                                {
                                    props.movie.watched && <div className={classes.rating}>
                                        <Rating
                                            name={props.movie.title}
                                            value={props.movie.rating}
                                            defaultValue={0}
                                            precision={0.5}
                                            onChange={(event, newValue) => {
                                                updateRating(event)
                                            }}
                                            onChangeActive={(event, newHover) => {
                                                setHover(newHover);
                                            }}
                                        />
                                    </div>
                                }
                            </>
                        ) : (
                            <IconButton aria-label="share" onClick={handleAddMovie}>
                                <AddIcon />
                                <span className={classes.text}> Add to Collections</span>
                            </IconButton>
                        )
                    }
                </CardActions>
            </Card>
        </Grid>
    )
}
