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
import { PhotoCamera } from "@material-ui/icons"; //imports camera icon
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=> ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    icon: {
        marginRight: '20px'
    },
    buttons:{
        marginTop:'40px'
    },
    cardGrid:{
        padding:'20px 0px'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection:'column' 
    },
    cardMedia:{
        paddingTop:'56.25%',
    },
    cardContent:{
        flexGrow:1, 
    },
    
}))

export default function Main() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" />
      <Toolbar>
        <PhotoCamera className={classes.icon}/> 
        <Typography variant="h6">Photo Album</Typography>
      </Toolbar>
      <main>
        <div className={classes.container}> 
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
            <div className={classes.buttons}>
            <Grid container spacing={2} justify="center">
                <Grid item>
                    <Button variant="contained" color="primary" >
                        See my photos
                    </Button>
                </Grid> 
                <Grid item>
                    <Button variant="outlined" color="primary">
                        Secondary action
                    </Button>
                </Grid>
            </Grid>
            </div> 
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title"/>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5">
                                Heading
                            </Typography>
                            <Typography>
                                This is a media card. You can use this section to describe the content. 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
      </main>
    </>
  );
}
