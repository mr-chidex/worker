import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const WorkerCard: FC = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          James Ken
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: email@gmail.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: email@gmail.com
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: email@gmail.com
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Order
        </Button>
        <Button variant="contained" size="small">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default WorkerCard;
