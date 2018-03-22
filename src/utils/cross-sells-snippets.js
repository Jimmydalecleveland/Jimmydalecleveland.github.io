export const reducerIndex = `
import { combineReducers } from 'redux';
import products from './productsReducer';
import xSells from './xSellsReducer';

export default combineReducers({
  products,
  xSells,
});
`;

export const productsReducer = `
const initState = {
  products: [],
  fetching: false,
  error: null
}

export default function(state = initState, action) {
  switch(action.type) {
    case 'FETCH_PRODUCTS_START':
      return {
        ...state,
        fetching: true,
        error: null
      }
    case 'FETCH_PRODUCTS_COMPLETE':
      return {
        ...state,
        fetching: false,
        error: null,
        products: [...action.payload.products]
      }
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}
`;

export const xSellsReducer = `
const initState = {
  xSells: {},
  fetching: false,
  error: null,
}

export default function(state = initState, action) {
  switch(action.type) {
    case 'FETCH_XSELLS_START':
      return {
        ...state,
        fetching: true,
        error: null,
      }
    case 'FETCH_XSELLS_COMPLETE':
      const product = action.payload.productId;
      const data = action.payload.xSells.metafields[0];

      // parse the value we get back and create a new xSell object
      const xSells = { metaId: data.id, value: JSON.parse(data.value) }

      // [product] is needed to compute the value rather than
      // the word, for the object key
      return {
        ...state,
        fetching: false,
        error: null,
        xSells: {...state.xSells, [product]: xSells},
      }
    case 'FETCH_ALL_XSELLS_START':
      // ...
    case 'FETCH_ALL_XSELLS_COMPLETE':
      // ...
    case 'FETCH_XSELLS_ERROR':
      // ...
    case 'POST_XSELL_START':
      // ...
    case 'POST_XSELL_COMPLETE':
      return {
        ...state,
        fetching: false,
        error: null,
        xSells: {
          ...state.xSells,
          [action.payload.productId]: [action.payload.xSells.metafield]
        },
      }
    case 'POST_XSELL_ERROR':
      // ...
    default:
      return state;
  }
};
`;

export const productActions = `
export function fetchProducts() {
  const fetchOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  }

  return (dispatch) => {
    dispatch({ type: 'FETCH_PRODUCTS_START' });

    fetch('/api/products.json', fetchOptions)
      .then((res) => res.json())
      .then((json) => dispatch({ type: 'FETCH_PRODUCTS_COMPLETE', payload: json }))
      .catch((error) => dispatch({ type: 'FETCH_PRODUCTS_ERROR', payload: error }))
    ;
  }
}
`;

export const xSellActions = `
/* Fetch Option Object
-------------------------------------------------- */
const fetchOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  credentials: 'include',
}


/* Exported Functions
-------------------------------------------------- */

//==  Fetch Cross-sells for a single product  ==
export function fetchXSells(productId) {
  fetchOptions.method = 'GET';
  fetchOptions.body = null;

  return function(dispatch) {
    // Fetch begins, set 'fetching' to true and reset 'error' to null
    dispatch({ type: 'FETCH_XSELLS_START' });

    fetch(\`/api/products/\${productId}/metafields.json?namespace=xsells\`, fetchOptions)
      .then((res) => res.json())
      .then((json) => dispatch({ 
        type: 'FETCH_XSELLS_COMPLETE',
        payload: { productId: productId, xSells: json }
      }))
      .catch((error) => dispatch({ type: 'FETCH_XSELLS_ERROR', payload: error}))
    ;
  }
}

//==  Fetch Cross-sells for all products  ==
export function fetchAllXSells(productIds) {
  fetchOptions.method = 'GET';
  fetchOptions.body = null;

  // All variables inside this function in order to access 'dispatch'
  return function(dispatch) {
    const allXSells = {};

    // callback function Promise.all maps over to build a fresh xSells Object
    const getContent = (productId) => {
      return fetch(\`/api/products/\${productId}/metafields.json?namespace=xsells\`, fetchOptions)
        .then((res) => res.json())
        .then((json) => {
          // no metafields for 'xsells' namespace
          let xSells = { metaId: '', value: [] };
          if (json.metafields.length) {
            // 'xsells' namespace fetch ensures it is the only data returned
            const data = json.metafields[0];
            xSells.metaId = data.id;
            xSells.value = JSON.parse(data.value);
          }
          allXSells[productId] = xSells;
        })
        .catch((error) => dispatch({ type: 'FETCH_XSELLS_ERROR', payload: error}))
      ;
    }

    // Fetch begins, set 'fetching' to true and reset 'error' to null
    dispatch({ type: 'FETCH_ALL_XSELLS_START' });

    // Queue up all fetches and fire a single dispatch with the completed
    // xSells Object
    Promise.all(productIds.map(getContent))
      .then(() => dispatch({ type: 'FETCH_ALL_XSELLS_COMPLETE', payload: allXSells }))
    ;
  }
}

//==  POST a new Cross-sell for a product  ==
export function postXSell(productId, selectValue) {
  return function(dispatch) {
    dispatch({ type: 'POST_XSELL_START' });

    postRequest(productId, selectValue).then(() => {
      dispatch(fetchXSells(productId));
    })
    .catch((err) => {
      dispatch({ type: 'POST_XSELL_ERROR', payload: error });
    });
  }
}

//==  Delete a single Cross-sell for a product by the Cross-sell ID  ==
export function deleteXSell(productId, newData, metaId) {
  return function(dispatch) {
    dispatch({ type: 'DELETE_XSELL_START' });

    putRequest(productId, newData, metaId).then(() => {
      dispatch(fetchXSells(productId));
    })
    .catch((err) => {
      dispatch({ type: 'DELETE_XSELL_ERROR', payload: error })
    });
  }
}


/* Abstracted Request Functions
-------------------------------------------------- */

// POST request
function postRequest(productId, selectValue) {
  const stringedValue = JSON.stringify(selectValue);

  fetchOptions.method = 'POST';
  fetchOptions.body = JSON.stringify({
    metafield: {
      namespace: "xsells",
      key: "products",
      value: stringedValue,
      value_type: "string"
    }
  }, null, 2);

  return fetch(\`/api/products/\${productId}/metafields.json\`, fetchOptions);
}

// DELETE request
function deleteRequest(productId, metaId) {
  fetchOptions.method = 'DELETE';

  return fetch(\`/api/products/\${productId}/metafields/\${metaId}.json\`, fetchOptions);
}

// PUT request
function putRequest(productId, newData, metaId) {
  const stringedValue = JSON.stringify(newData);

  fetchOptions.method = 'PUT';
  fetchOptions.body = JSON.stringify({
    metafield: {
      id: metaId,
      value: stringedValue,
      value_type: "string"
    }
  }, null, 2);

  return fetch(\`/api/products/\${productId}/metafields/\${metaId}.json\`, fetchOptions);
}
`;

export const productsList = `
class ProductsList extends Component {
  componentWillMount() {
    const { dispatch } = this.props;

    // Fetch all products before mount
    dispatch(fetchProducts());
  }

  componentDidUpdate() {
    const { products } = this.props;

    // Does the store have any products to display?
    if (products.length) {
      this.getXSells(); // Obtains each product's Cross-sells
    }
  }

  getXSells() {
    const { products, dispatch } = this.props;

    const productIds = products.map((product) => product.id);
    dispatch(fetchAllXSells(productIds));
  }

  renderProducts() {
    const { products } = this.props;

    // Create a simplified Products array for the select dropdown
    const productsSelect = products.map((product) => {
      const newObj = {};
      newObj.label = product.title;
      newObj.value = product.id;
      return newObj;
    });

    return products.map((product) => (
      <ProductCard key={product.id} product={product} productsSelect={productsSelect} />
    ));
  }

  render() {
    if (this.props.fetching) {
      return <h1>Loading . . .</h1>;
    }
    
    return (
      <Layout>
        {this.renderProducts()}
      </Layout>
    );
  }
}


/* Redux State Mapping & Export
-------------------------------------------------- */

function mapStateToProps(state) {
  return {
    products: state.products.products,
    fetching: state.products.fetching,
  }
}

export default connect(mapStateToProps)(ProductsList);
`;

export const xSells = `
class XSells extends Component {
  constructor(props) {
    super(props);
    this.removeXSell = this.removeXSell.bind(this);
  }

  removeXSell(xSellId) {
    const { product, dispatch, xSells } = this.props;

    const metaId = xSells[product.id].metaId;
    const productXSells = xSells[product.id].value;
    const newData = _.filter(productXSells, (item) => item.id !== xSellId);

    dispatch(deleteXSell(product.id, newData, metaId));
  }

  findProductTitle(productId) {
    const { products } = this.props;
    const productObj = _.find(products, (product) => product.id === productId);
    return productObj.title;
  }

  findProductHandle(productId) {
    const { products } = this.props;
    const productObj = _.find(products, (product) => product.id === productId);
    return productObj.handle;
  }
  
  render() {
    const { fetching, xSells, product } = this.props;

    if (fetching) {
      return <Spinner size="small" color="teal" />
    } else {
      return (
        <Card>
          { xSells[product.id] && xSells[product.id].value.length ?
              xSells[product.id].value.map((xSell, i) => 
                <Card.Section key={i}>
                  <Stack >
                    <Stack.Item fill>
                      <p>{this.findProductTitle(xSell.id)}</p>
                      <Caption>ID: {xSell.id}</Caption>
                    </Stack.Item>
                    <Stack.Item>
                      <Button size="slim" icon="delete" destructive onClick={() => this.removeXSell(xSell.id)}>
                      </Button>
                    </Stack.Item>
                  </Stack>
                </Card.Section>)
              : 
              <p style={{padding: 10}}>No Cross-sells assigned to this product</p>
          }
          { xSells[product.id] && xSells[product.id].value.length > 3 &&
            <Banner
              title="Cross-sell limit exceeded"
              status="warning">
              <p>No more than 3 Cross-sells will show on the Cart page</p>
            </Banner>
          }
        </Card>
      )
    }
  }
}
`;
