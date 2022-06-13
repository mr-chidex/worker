import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  website?: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  image?: string;
}

const WorkerCard: FC<Props> = ({
  id,
  name,
  age,
  gender,
  phone,
  email,
  image,
}) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent style={{ cursor: "pointer" }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone: {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Age: {age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {gender}
        </Typography>
      </CardContent>
      <CardActions
        className="card-actions"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button variant="contained" size="small">
          Add To Order
        </Button>
        <Button
          onClick={() => navigate(`/${id}`)}
          variant="contained"
          size="small"
        >
          More
        </Button>
      </CardActions>
    </Card>
  );
};

export default WorkerCard;
