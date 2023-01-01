import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const TaskItem = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Learn Javascript
        </Typography>
        <Typography variant="h5" component="div"></Typography>

        <Typography variant="body2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam modi
          ut dolores impedit ducimus voluptatum nesciunt, quasi quo voluptate
          fuga, ea dicta esse pariatur odit dolore accusantium maiores quam! Qui
          exercitationem dicta temporibus error in eaque impedit nihil sunt
          provident!
        </Typography>
        <Typography
          variant="body2"
          color={"red"}
          sx={{
            paddingTop: 2,
          }}
        >
          Date:
          {new Date(Date.now()).toLocaleDateString("en-US")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
