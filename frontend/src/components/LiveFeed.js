import React from "react";
import { Table, Form } from "react-bootstrap";

class LiveFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePriority: ["Low", "Medium", "High", "Critical"],
      activeProblem: ["Fire", "Flood", "Power", "Medical"],

      problemFire: true,
      problemFlood: true,
      problemPower: true,
      problemMedical: true,

      priorityLow: true,
      priorityMedium: true,
      priorityHigh: true,
      priorityCritical: true,
    };
  }

  // Toggles the problem checkbox and changes activeProblem to match state
  toggleProblem(element) {
    // Toggles checkbox state
    if (element === "Fire") {
      this.setState({ problemFire: !this.state.problemFire });
    } else if (element === "Flood") {
      this.setState({ problemFlood: !this.state.problemFlood });
    } else if (element === "Power") {
      this.setState({ problemPower: !this.state.problemPower });
    } else if (element === "Medical") {
      this.setState({ problemMedical: !this.state.problemMedical });
    }

    // Remove or add element to activeProblem array
    if (this.state.activeProblem.includes(element)) {
      // Remove element from activeProblem array
      let index = this.state.activeProblem.indexOf(element);
      this.state.activeProblem.splice(index, 1);
    } else {
      // Add element to activeProblem array
      this.state.activeProblem.push(element);
    }
  }

  // Toggles the priority checkbox and changes activePriority to match state
  togglePriority(element) {
    // Toggles checkbox state
    if (element === "Low") {
      this.setState({ priorityLow: !this.state.priorityLow });
    } else if (element === "Medium") {
      this.setState({ priorityMedium: !this.state.priorityMedium });
    } else if (element === "High") {
      this.setState({ priorityHigh: !this.state.priorityHigh });
    } else if (element === "Critical") {
      this.setState({ priorityCritical: !this.state.priorityCritical });
    }

    // Remove or add element to activePriority array
    if (this.state.activePriority.includes(element)) {
      // Remove element from activePriority array
      let index = this.state.activePriority.indexOf(element);
      this.state.activePriority.splice(index, 1);
    } else {
      // Add element to activePriority array
      this.state.activePriority.push(element);
    }
  }

  render() {
    return (
      <div style={{ padding: "1%" }}>
        <h1>Live Feed</h1>
        {/* Filter Options */}
        <Table borderless>
          <tbody>
            <tr>
              <th style={{ width: "100px" }}>Problem</th>
              <td style={{ width: "100px" }}>
                <Form.Check
                  type="checkbox"
                  label="Fire"
                  checked={this.state.problemFire}
                  onChange={this.toggleProblem.bind(this, "Fire")}
                />
              </td>
              <td style={{ width: "100px" }}>
                <Form.Check
                  type="checkbox"
                  label="Flood"
                  checked={this.state.problemFlood}
                  onChange={this.toggleProblem.bind(this, "Flood")}
                />
              </td>
              <td style={{ width: "100px" }}>
                <Form.Check
                  type="checkbox"
                  label="Power"
                  checked={this.state.problemPower}
                  onChange={this.toggleProblem.bind(this, "Power")}
                />
              </td>
              <td style={{ width: "100px" }}>
                <Form.Check
                  type="checkbox"
                  label="Medical"
                  checked={this.state.problemMedical}
                  onChange={this.toggleProblem.bind(this, "Medical")}
                />
              </td>
            </tr>
            <tr>
              <th>Priority</th>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Low"
                  checked={this.state.priorityLow}
                  onChange={this.togglePriority.bind(this, "Low")}
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Medium"
                  checked={this.state.priorityMedium}
                  onChange={this.togglePriority.bind(this, "Medium")}
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="High"
                  checked={this.state.priorityHigh}
                  onChange={this.togglePriority.bind(this, "High")}
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Critical"
                  checked={this.state.priorityCritical}
                  onChange={this.togglePriority.bind(this, "Critical")}
                />
              </td>
            </tr>
          </tbody>
        </Table>

        {/* Posts */}
        {this.props.posts.map(
          ({ name, image, content, problem, priority, id }) =>
            this.state.activePriority.includes(priority) &&
            this.state.activeProblem.includes(problem) && (
              <div key={id}>
                <Table>
                  <tbody>
                    <tr>
                      <td rowSpan="3" style={{ width: "200px" }}>
                        <img
                          src={image}
                          alt="{name}"
                          style={{ width: "200px" }}
                        />
                      </td>
                      <td colSpan="2">
                        <b>{name}</b>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "200px" }}>Problem: {problem}</td>
                      <td>Priority: {priority}</td>
                    </tr>
                    <tr>
                      <td colSpan="2">{content}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )
        )}
      </div>
    );
  }
}

export default LiveFeed;
