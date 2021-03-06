import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css';
import { Link } from "react-router-dom";


const Post = (props) => {
    const { userId, title, body, id } = props.post;

//console.log(id);
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });

    const classes = useStyles();
    return (
        <div style={{margin:"60px 600px"}}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           {body}
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
               
                <Link to={`/post/${id}`}>  <Button color="primary"> See more... </Button>   </Link>


                </CardActions>
              
                
            </Card>
           
               

        </div>
    );
};

export default Post;