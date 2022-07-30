import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button
} from "@material-ui/core"; //any text element
import { BurstMode, PhotoCamera } from "@material-ui/icons"; //imports camera icon

export default function Main() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" />
      <Toolbar>
        <PhotoCamera />
        <Typography variant="h6">Photo Album</Typography>
      </Toolbar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone. This is a photo album. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Typography>
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <Button variant="contained" color="primary">
                        See my photos
                    </Button>
                </Grid>
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}
