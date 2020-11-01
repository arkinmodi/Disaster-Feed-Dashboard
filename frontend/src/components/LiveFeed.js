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

  render() {
    return (
      <div style={{ padding: "1%" }}>
        {/* Filter Options */}
        <Table borderless>
          <thead>
            <tr>
              <th>Problem</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Fire"
                  checked={this.state.problemFire}
                  onChange={(event) =>
                    this.setState({ problemFire: !this.state.problemFire })
                  }
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Low"
                  checked={this.state.priorityLow}
                  onChange={(event) =>
                    this.setState({ priorityLow: !this.state.priorityLow })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Flood"
                  checked={this.state.problemFlood}
                  onChange={(event) =>
                    this.setState({ problemFlood: !this.state.problemFlood })
                  }
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Medium"
                  checked={this.state.priorityMedium}
                  onChange={(event) =>
                    this.setState({
                      priorityMedium: !this.state.priorityMedium,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Power"
                  checked={this.state.problemPower}
                  onChange={(event) =>
                    this.setState({ problemPower: !this.state.problemPower })
                  }
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="High"
                  checked={this.state.priorityHigh}
                  onChange={(event) =>
                    this.setState({ priorityHigh: !this.state.priorityHigh })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Medical"
                  checked={this.state.problemMedical}
                  onChange={(event) =>
                    this.setState({
                      problemMedical: !this.state.problemMedical,
                    })
                  }
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Critical"
                  checked={this.state.priorityCritical}
                  onChange={(event) =>
                    this.setState({ priorityLow: !this.state.priorityCritical })
                  }
                />
              </td>
            </tr>
          </tbody>
        </Table>

        {/* Posts */}
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
