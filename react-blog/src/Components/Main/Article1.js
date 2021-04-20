import React, { Component } from "react";

class Article1 extends Component {
  render() {
    return (
      <div>
        <h3 className="pb-4 mb-4 fst-italic border-bottom">
          From the Firehose
        </h3>

        <article className="blog-post">
          <h2 className="blog-post-title">Sample blog post</h2>
          <p className="blog-post-meta">
            January 1, 2014 by <a href="/">Mark</a>
          </p>

          <p>
            This blog post shows a few different types of content that’s
            supported and styled with Bootstrap. Basic typography, images, and
            code are all supported.
          </p>
          <hr />
          <p>
            Yeah, she dances to her own beat. Oh, no. You could've been the
            greatest. 'Cause, baby, <a href="/">you're a firework</a>. Maybe a
            reason why all the doors are closed. Open up your heart and just let
            it begin. So très chic, yeah, she's a classNameic.
          </p>
          <blockquote>
            <p>
              Bikinis, zucchinis, Martinis, no weenies. I know there will be
              sacrifice but that's the price.
              <strong>This is how we do it</strong>. I'm not sticking around to
              watch you go down. You think you're so rock and roll, but you're
              really just a joke. I know one spark will shock the world, yeah
              yeah. Can't replace you with a million rings.
            </p>
          </blockquote>
          <p>
            Trying to connect the dots, don't know what to tell my boss. Before
            you met me I was alright but things were kinda heavy. You just gotta
            ignite the light and let it shine. Glitter all over the room{" "}
            <em>pink flamingos</em> in the pool.
          </p>
          <h2>Heading</h2>
          <p>
            Suiting up for my crowning battle. If you only knew what the future
            holds. Bring the beat back. Peach-pink lips, yeah, everybody stares.
          </p>
          <h3>Sub-heading</h3>
          <p>
            You give a hundred reasons why, and you say you're really gonna try.
            Straight stuntin' yeah we do it like that. Calling out my name.
            ‘Cause I, I’m capable of anything.
          </p>
          <pre>
            <code>Example code block</code>
          </pre>
          <p>
            Before you met me I was alright but things were kinda heavy. You
            just gotta ignite the light and let it shine.
          </p>
          <h3>Sub-heading</h3>
          <p>
            You got the finest architecture. Passport stamps, she's
            cosmopolitan. Fine, fresh, fierce, we got it on lock. Never planned
            that one day I'd be losing you. She eats your heart out.
          </p>
          <ul>
            <li>Got a motel and built a fort out of sheets.</li>
            <li>Your kiss is cosmic, every move is magic.</li>
            <li>Suiting up for my crowning battle.</li>
          </ul>
          <p>
            Takes you miles high, so high, 'cause she’s got that one
            international smile.
          </p>
          <ol>
            <li>Scared to rock the boat and make a mess.</li>
            <li>I could have rewrite your addiction.</li>
            <li>I know you get me so I let my walls come down.</li>
          </ol>
          <p>After a hurricane comes a rainbow.</p>
        </article>
      </div>
    );
  }
}
export default Article1;
