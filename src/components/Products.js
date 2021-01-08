import { Button, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useProductsContext } from '../context/ProductsContext';
import Chips from './Chips';
import Product from './Product';
import Spinner from './Spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f3f3',
    padding: theme.spacing(1, 12),
    /* margin: '0 auto', */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100%',
    gap: '0.75em',
  },
  button: {
    margin: theme.spacing(1),
  },
  chipContainer: {
    padding: theme.spacing(0),
  },
}));

// infinite scroll

const Products = () => {
  /* const [loading, setLoading] = useState(false); */
  const { products, loading } = useProductsContext();
  const classes = useStyles();

  /* const [productsToShow, setProductsToShow] = useState(products.slice(0, 5)); */

  /* const [next, setNext] = useState(5);
  const productsPerPage = 5;
  let arrayForHoldingProducts = [];

  const loopWithSlice = (start, end) => {
    const slicedPosts = products.slice(start, end);
    arrayForHoldingProducts = [...arrayForHoldingProducts, ...slicedPosts];
    setProductsToShow(arrayForHoldingProducts);
  };

  useEffect(() => {
    loopWithSlice(0, productsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + productsPerPage);
    setNext(next + productsPerPage);
  }; */

  /* let showProducts = products.slice(0, start); */

  /* const handleClick = () => {
    const newNumber =start += productsPerPage;
    showProducts = 

  }; */

  // filter components

  return (
    <Container maxWidth="lg" className={classes.container}>
      {/* <Filter /> */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Container classes={classes.chipContainer}>
            <Chips>Tere</Chips>
          </Container>

          <Grid container justify="center" spacing={4}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <Button
        variant="contained"
        color="primary" /* onClick={handleShowMorePosts} */
        aria-label="Show more"
        disabled={true}
      >
        Show More
      </Button>
    </Container>
  );
};

export default Products;
