import React, { Component } from "react";

class Article3 extends Component {
  render() {
    return (
      <article className="blog-post">
        <h2 className="blog-post-title">New feature</h2>
        <p className="blog-post-meta">
          December 14, 2013 by <a href="/">Chris</a>
        </p>

        <p>
          From Tokyo to Mexico, to Rio. Yeah, you take me to utopia. I'm walking
          on air. We'd make out in your Mustang to Radiohead. I mean the ones, I
          mean like she's the one. Sun-kissed skin so hot we'll melt your
          popsicle. Slow cooking pancakes for my boy, still up, still fresh as a
          Daisy.
        </p>
        <ul>
          <li>I hope you got a healthy appetite.</li>
          <li>You're never gonna be unsatisfied.</li>
          <li>Got a motel and built a fort out of sheets.</li>
        </ul>
        <p>
          Don't need apologies. Boy, you're an alien your touch so foreign, it's{" "}
          <em>supernatural</em>, extraterrestrial. Talk about our future like we
          had a clue. I can feel a phoenix inside of me.
        </p>
      </article>
    );
  }
}
export default Article3;
