import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    if (error.status === 404) {
        <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: '100px' }}>
        <Box>
          <Typography variant="h1" sx={{ color: 'var(--primary-color)', fontSize: '80px' }}>
            404
          </Typography>
          <Typography variant="h4" sx={{ marginBottom: '20px', color: 'var(--secondary-color)' }}>
            Oops! The page you are looking for doesn't exist.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '30px', color: 'var(--secondary-color)' }}>
            It seems like the page you’re trying to visit is either not available or the URL is incorrect.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'var(--primary-color)', color: 'var(--white-color)', marginRight: '15px' }}
            onClick={handleGoBack}
          >
            Go Back
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: 'var(--primary-color)', color: 'var(--white-color)' }}
            onClick={handleGoHome}
          >
            Go to Homepage
          </Button>
        </Box>
      </Container>
    } 
    return (
        <div>
            <h3>Oops! Something went wrong.</h3>
            <Link to='/'>Back to home</Link>
        </div>
    );
}

export default Error;