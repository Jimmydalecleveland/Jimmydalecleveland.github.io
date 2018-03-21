import React, { Component } from 'react';
import Link from 'gatsby-link';
import Footer from '../components/Footer';

import introImage from './../assets/images/portfolio/shopify-intro.jpg';
import {
  productActions,
  productsReducer,
  xSellActions,
  xSellsReducer,
  productsList,
} from './../utils/cross-sells-snippets';

import './../assets/css/project.css';
import './../vendor/prism.js';
import './../vendor/prism.css';

class Project extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
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
              <img src={introImage} alt="" />
              <p>
                When the Shopify port of{' '}
                <a href="https://www.littlegiantladder.com/">
                  littlegiantladder.com
                </a>{' '}
                was launched, it was lacking the ability to show dynamic
                cross-sells based on the products in the cart. My team knew from
                experience that this was a big loss in conversion from many
                previous tests and available data online. I knew we could edit
                each product's metafield data through the{' '}
                <a href="https://help.shopify.com/api/reference/metafield">
                  Shopify Metafield API
                </a>{' '}
                but there were some unique challenges to this task that weren't
                fullfilled by the existing apps on the Shopify App Store.
              </p>
              <p>
                Shopify's metafield structure is more intended for attributes
                that a product will only have one value per key, and I needed
                one to many values per key. I also wanted an interface that was
                clean and designed around the intended use for the other members
                of my company to easily use maintain over a long period.
              </p>
              <p>
                I was coming up on a holidy break, and I decided to use the long
                weekend to learn Redux more fully, a skill I'd been intending to
                polish for awhile but had been too busy. In the Shopify docs
                there was a reference to 'shopify-node-app', a starter template
                using Node, React, Redux, and Shopify's React styled components
                library: Polaris. Perfect, exactly what I was looking for as a
                starting point.
              </p>
              <p>
                After I gone through several Redux guides as a refresher, and
                combed through the templates code for any practices I didn't
                know, I decided to strip out all of the starter Redux code and
                write my own for a better understanding of what was going on.
              </p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="row">
            <div className="twelve columns">
              <h3>Let's get to the code!</h3>

              <p className="pre-code-explanation">
                It makes the most sense to start with the actions controller and
                moving to it's associated reducer to me. Here is the final
                product actions file. If you are unfamiliar with using{' '}
                <span className="short-code">dispatch</span> within a{' '}
                <span className="short-code">dispatch</span>, it is the syntax
                for using thunk middleware. A thunk wraps an expression to delay
                it, particularly useful during an api request in which you need
                to update your state when it completes.{' '}
                <a href="https://github.com/gaearon/redux-thunk#composition">
                  Here
                </a>{' '}
                is a good explanation from the Github source.
              </p>
              <p>
                It took me a good while to get my head around the concept
                originally. I had a difficult time finding examples of Redux API
                fetches (crazy, I know) so when I learned this was a common
                practice for it I decided to give it a whirl.
              </p>
              <pre className="language-jsx">
                <code className="language-jsx">{productActions}</code>
              </pre>

              <p className="pre-code-explanation">
                And here is the{' '}
                <span className="short-code">productsReducer</span>. Everything
                is pretty standard here.
              </p>
              <pre className="language-jsx">
                <code className="language-jsx">{productsReducer}</code>
              </pre>

              <p className="pre-code-explanation">
                The <span className="short-code">xSellsActions</span> is a bit
                more involved. I start by making an object of the fetch options
                so I don't have to repeat them in every function (just need to
                changed the method value appropriately). I create the following
                functions: get cross-sells for a single product, get every
                product's cross-sells, post a new cross-sell to a product, and
                remove a cross-sell from a product.
              </p>
              <p>
                <span className="short-code">Promise.all</span> came in very
                handy in the <span className="short-code">fetchAllXSells</span>{' '}
                function. In this function I'm mapping over all the product Ids
                and calling the <span className="short-code">getContent</span>{' '}
                function for each one.{' '}
                <span className="short-code">getContent</span> performs a fetch,
                checks if we got any back (simple adding blank values
                otherwise), and stuffs the selected data into a giant object
                full of every product's cross-sells. When every fetch is
                finished, we can send off our dispatch so the reducer can update
                our state with current{' '}
                <span className="short-code">xSells</span> Object, and tell our
                app it's done fetching.
              </p>
              <p>
                I've also abstracted some functions to stringify/parse data,
                update the fetch options, and return the appropriate fetch
                promise.
              </p>
              <pre className="language-jsx">
                <code className="language-jsx">{xSellActions}</code>
              </pre>

              <p className="pre-code-explanation">
                This is the <span className="short-code">xSellsReducer</span>.
                My <span className="short-code">xSells</span> Object contains
                the <span className="short-code">xSell</span> Metafield for
                every product in the store. When the app sends an update to the
                Shopify API, it re-fetches the data and updates the{' '}
                <span className="short-code">xSells</span> Object to stay
                consistent.
              </p>
              <p>
                I ran into a snag with their API because I needed multiple
                values for one metafield key, and they only accept primitives
                for values. I ended up stringifying an object before sending it
                to Shopify, which required me to be creative with how I'd render
                that through liquid on the website. At this point I realized
                this was not going to be the simple, standard app I had
                imagined.
              </p>
              <p>
                Another silly detail: I could not think of how to use a variable
                in an object I'm declaring. By just using a name with no
                quotations, you are adding that name as a key to the object, but
                I wanted the computed value. I finally came across the simple
                solution online to enclose the variable in brackets to compute
                it. Simple enough. I've commented out the excess cases, as they
                are simple value flips and stores.
              </p>
              <pre className="language-jsx">
                <code className="language-jsx">{xSellsReducer}</code>
              </pre>

              <p className="pre-code-explanation">
                On to the components. The{' '}
                <span className="short-code">ProductsList</span> is topmost in
                this App. It is responsible for dispatching the first fetch for
                products, and then fetching every cross-sell after it updates.
                In truth, I struggled to find the best practice for achieving
                this. It works, but I'm not sure if using the didUpdate
                lifecycle method is the best way.
              </p>
              <p>
                There isn't much else to this component, other than looping over
                each product to render a{' '}
                <span className="short-code">ProductCard</span>, and passing it
                a narrowed down Object for building the{' '}
                <span className="short-code">select</span>.
              </p>
              <pre className="language-jsx">
                <code className="language-jsx">{productsList}</code>
              </pre>

              <h3 className="closing-para">In closing...</h3>
              <p>
                There were many more additions, and alterations I wanted to make
                to this project, but I had deadline and I was needed for another
                project after it was production ready. It was a great learning
                experience overall, and my supervisor was really excited for me
                to share my learnings of Redux and Polaris, as he'd been wanting
                to learn them himself for awhile. In the time since working on
                this, I have learned some better ways of doing things, but I'm
                always open to suggestions. If you see any flaws, feel free to
                email me the improvements you would make.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Project;
