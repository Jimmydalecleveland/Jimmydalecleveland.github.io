import React from 'react';
import Link from 'gatsby-link';
import Footer from '../components/Footer';

import './../assets/css/project.css';
import './../vendor/prism.js';
import './../vendor/prism.css';

const reducerIndex = `
import { combineReducers } from 'redux';
import products from './productsReducer';
import xSells from './xSellsReducer';

export default combineReducers({
  products,
  xSells,
});
`;

const productsReducer = `
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

const xSellsReducer = `
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

const productActions = `
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

const xSellActions = `
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

const Project = () => (
  <div>
    <div id="home" className="project-section project-section-top">
      <div className="row">
        <div className="twelve columns">
          <Link to="/">&lt; Back to Home</Link>
          <h1>Cross-sells App for Shopify</h1>
          <h2>
            Features:
            <span className="tag">React</span>
            <span className="tag">Redux</span>
            <span className="tag">Express</span>
            <span className="tag">Shopify Polaris</span>
            <span className="tag">Shopify Authentication</span>
            <span className="tag">Shopify Metafields API fetching</span>
          </h2>
          <p>
            When the Shopify port of{' '}
            <a href="https://www.littlegiantladder.com/">
              littlegiantladder.com
            </a>{' '}
            was launched, it was lacking the ability to show dynamic cross-sells
            based on the products in the cart. My team knew from experience that
            this was a big loss in conversion from many previous tests and
            available data online. I knew we could edit each product's metafield
            data through the{' '}
            <a href="https://help.shopify.com/api/reference/metafield">
              Shopify Metafield API
            </a>{' '}
            but there were some unique challenges to this task that weren't
            fullfilled by the existing apps Shopify App Store.
          </p>
          <p>
            Shopify's metafield structure is more intended for attributes that a
            product will only have one value per key, and I needed one to many
            values per key. I also wanted an interface that was clean and
            designed around the intended use for the other members of my company
            to easily use maintain over a long period.
          </p>
          <p>
            I was coming up on a holidy break, and I decided to use the long
            weekend to learn Redux more fully, a skill I'd been intending to
            polish for awhile but had been too busy. In the Shopify docs there
            was a reference to 'shopify-node-app', a starter template using
            Node, React, Redux, and Shopify's React styled components library:
            Polaris. Perfect, exactly what I was looking for as a starting
            point.
          </p>
          <p>
            After I gone through several Redux guides as a refresher, and combed
            through the templates code for any practices I didn't know, I
            decided to strip out all of the starter Redux code and write my own
            for a better understanding of what was going on.
          </p>
        </div>
      </div>
    </div>
    <div className="project-section">
      <div className="row">
        <div className="twelve columns">
          <h3>Let's get to the code!</h3>
          <p className="pre-code-explanation">
            I decided I wanted at least 2 reducers instead of the default
            single, so I added the typical{' '}
            <span className="short-code">combineReducers</span> setup from
            Redux.
          </p>
          <pre className="language-jsx">
            <code className="language-jsx">{reducerIndex}</code>
          </pre>

          <p className="pre-code-explanation">
            It makes the most sense to start with the actions controller and
            moving to it's associated reducer to me. Here is the final product
            actions file. If you are unfamiliar with using{' '}
            <span className="short-code">dispatch</span> within a
            <span className="short-code">dispatch</span>, it is the syntax for
            using thunk middleware. A thunk wraps an expression to delay it,
            particularly useful during an api request in which you need to
            update your state when it completes.{' '}
            <a href="https://github.com/gaearon/redux-thunk#composition">
              Here
            </a>{' '}
            is a good explanation from the Github source.
          </p>
          <p>
            It took me a good while to get my head around the concept
            originally. I had a difficult time finding examples of Redux API
            fetches (crazy, I know) so when I learned this was a common practice
            for it I decided to give it a whirl.
          </p>
          <pre className="language-jsx">
            <code className="language-jsx">{productActions}</code>
          </pre>

          <p className="pre-code-explanation">
            And here is the <span className="short-code">productsReducer</span>.
            Everything is pretty standard here.
          </p>
          <pre className="language-jsx">
            <code className="language-jsx">{productsReducer}</code>
          </pre>

          <p className="pre-code-explanation">
            And here is the <span className="short-code">xSellsReducer</span>{' '}
            ('crossSells' was becoming a bit tedious in longer variables so I
            refactored mid-way through). My{' '}
            <span className="short-code">xSells</span> Object contains the{' '}
            <span className="short-code">xSell</span> Metafield for every
            product in the store. When the app sends an update to the Shopify
            API, it re-fetches the data and updates the{' '}
            <span className="short-code">xSells</span> Object to stay
            consistent.
          </p>
          <p>
            I ran into a snag with their API because I needed multiple values
            for one metafield key, and they only accept primitives for values. I
            ended up stringifying an object before sending it to Shopify, which
            required me to be creative with how I'd render that through liquid
            on the website. At this point I realized this was not going to be
            the simple, standard app I had imagined.
          </p>
          <p>
            Another silly detail: I could not think of how to use a variable in
            an object I'm declaring. By just using a name with no quotations,
            you are adding that name as a key to the object, but I wanted the
            computed value. I finally came across the simple solution online to
            enclose the variable in brackets to compute it. Simple enough. I've
            commented out the excess cases, as they are simple value flips and
            stores.
          </p>
          <pre className="language-jsx">
            <code className="language-jsx">{xSellsReducer}</code>
          </pre>

          <p className="pre-code-explanation">
            <span className="short-code">xSellsActions</span>
          </p>
          <pre className="language-jsx">
            <code className="language-jsx">{xSellActions}</code>
          </pre>

          <h3 className="closing-para">In closing...</h3>
          <p>
            There were many more additions, and alterations I wanted to make to
            this project, but I had deadline and I was needed for another
            project after it was production ready. It was a great learning
            experience overall, and my supervisor was really excited for me to
            share my learnings of Redux and Polaris, as he'd been wanting to
            learn them himself for awhile.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Project;
