import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div style={{ padding: "1%" }}>
        <h1>Welcome to the Disaster Feed Dashboard!</h1>
        <br />
        <h2>What is the Live Feed?</h2>
        <p>
          The Live Feed page displays a live feed of all individual posts. These
          posts can be filtered by problem type and priority level.
        </p>
        <br />
        <h2>What is the Analytics?</h2>
        <p>
          The Analytics page contains a table displaying the number of posts
          under a give category. Categories include the four problem types
          (fire, flood, power, and medical) and the four priority levels (low,
          medium, high, and critical). This table also includes totals for each
          row or column.
        </p>
      </div>
    );
  }
}

export default Home;
