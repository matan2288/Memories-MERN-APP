import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./MemoryCardStyle.css";

import { GlobalDataHolder } from "../Context/MemoryContext.js";

const useStyles = makeStyles({
  root: {
    maxWidth: 265,
    width: 240,
    backgroundColor: "#E4E4E4",
  },
  media: {
    height: 200,
    marginBottom: 20,
  },
});

const MemoryCard = ({ thisNoteID, img, title, date }) => {
  const { deleteMemory } = useContext(GlobalDataHolder);

  const classes = useStyles();

  return (
    <div className="CARD-MAIN-DIV">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h3"
              className="typographyTitle"
            >
              {title}
            </Typography>
            <Typography
              variant="body4"
              color="textSecondary"
              component="p"
              className="typographyDate"
            >
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            style={{ marginLeft: "30%" }}
            variant="contained"
            size="small"
            onClick={() => deleteMemory(thisNoteID)}
            id="deletebtn"
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MemoryCard;
