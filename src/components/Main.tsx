import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core"; //any text element
import { PhotoCamera } from "@material-ui/icons"; //imports camera icon

export default function Main() {
  return (
    <>
        <CssBaseline/>
        <AppBar position="relative"/>
        <Toolbar> 
            <PhotoCamera/> 
            <Typography variant="h6">
                Photo Album
            </Typography>
        </Toolbar>
        <main>
            <div>
                <Container maxWidth="sm"> 
                    <Typography variant="h2" align="center" ></Typography>
                </Container>
            </div>
        </main>
    </>
  );
}
