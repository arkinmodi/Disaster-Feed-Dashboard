import React from "react";

class LiveFeed extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map(
          ({ name, image, content, problem, priority, id }) => (
            <div key={id}>
              <img src={image} alt="{name}" /> <br />
              {name} <br />
              {problem} <br />
              {priority} <br />
              {content} <br /> <br /> <br /> <br />
            </div>
          )
        )}
      </div>
    );
  }
}

export default LiveFeed;
