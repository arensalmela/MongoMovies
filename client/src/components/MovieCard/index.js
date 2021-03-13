import React, { useContext } from 'react'
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
import { useLocation } from 'react-router';
import API from '../../utils/API';
import UserContext from '../../utils/UserContext';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345
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
    }
}));

export default function MovieCard({ movie, updateUsers }) {
    const classes = useStyles();
    const location = useLocation();
    const user = useContext(UserContext);

    const handleAddMovie = () => {
        API.addMovie(movie, user.email)
            .then(({ data }) => console.log("success!", data.nModified, " modified"))
    }

    const toggleWatched = (isWatched) => {
        API.toggleWatched(user.email, movie.title, isWatched)
            .then(() => updateUsers())
    }

    return (
        <Grid item xs={location.pathname === '/collections' ? 12 : 6}>
            <Card className={classes.root}>
                <CardHeader title={movie.title} subheader={"Release Date: " + movie.release_date} />
                <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    title="Movie poster"
                />
                <CardContent>
                    <details>
                        <summary>Overview</summary>
                        {movie.overview}
                    </details>
                </CardContent>
                <CardActions disableSpacing>
                    {
                        location.pathname === '/collections' ?
                            <IconButton aria-label="add to favorites" onClick={() => toggleWatched(!movie.watched)}>
                                {
                                    !movie.watched && <VisibilityOffIcon />
                                }
                                {
                                    movie.watched && <VisibilityIcon />
                                }
                            </IconButton>
                            :
                            <IconButton aria-label="share" onClick={handleAddMovie}>
                                <AddIcon />
                                <span className={classes.text}> Add to Collections</span>
                            </IconButton>
                    }
                </CardActions>
            </Card>
        </Grid>
    )
}
