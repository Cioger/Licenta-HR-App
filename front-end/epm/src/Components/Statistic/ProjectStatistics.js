import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectStatistics() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Average salary:
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
          Total salary:
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
          Average CO Days:
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
          Total CO Days:
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Generate</Button>
      </CardActions>
    </Card>
  );
}
