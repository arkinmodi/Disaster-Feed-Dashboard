import React from "react";
import { Table, Form } from "react-bootstrap";

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Levels
      levelLow: true,
      levelMedium: true,
      levelHigh: true,
      levelCritical: true,

      // Danger
      dangerFire: true,
      dangerFlood: true,
      dangerPower: true,
      dangerMedical: true,
    };
  }

  render() {
    return (
      <div>
        <h1>Analytics Page</h1>

        {/* Filter Options */}
        <Table borderless>
          <thead>
            <tr>
              <th>Danger</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Fire"
                  checked={this.state.dangerFire}
                  onChange={(event) =>
                    this.setState({ dangerFire: !this.state.dangerFire })
                  }
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Low"
                  checked={this.state.levelLow}
                  onChange={(event) =>
                    this.setState({ levelLow: !this.state.levelLow })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Flood"
                  checked={this.state.dangerFlood}
                  onChange={(event) =>
                    this.setState({ dangerFlood: !this.state.dangerFlood })
                  }
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Medium"
                  checked={this.state.levelMedium}
                  onChange={(event) =>
                    this.setState({ levelMedium: !this.state.levelMedium })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Power"
                  checked={this.state.dangerPower}
                  onChange={(event) =>
                    this.setState({ dangerPower: !this.state.dangerPower })
                  }
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="High"
                  checked={this.state.levelHigh}
                  onChange={(event) =>
                    this.setState({ levelHigh: !this.state.levelHigh })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Medical"
                  checked={this.state.dangerMedical}
                  onChange={(event) =>
                    this.setState({ dangerMedical: !this.state.dangerMedical })
                  }
                />
              </td>
              <td>
                <Form.Check
                  type="checkbox"
                  label="Critical"
                  checked={this.state.levelCritical}
                  onChange={(event) =>
                    this.setState({ levelLow: !this.state.levelCritical })
                  }
                />
              </td>
            </tr>
          </tbody>
        </Table>

        {/* Data Table */}
        <Table bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Fire</th>
              <th>Flood</th>
              <th>Power</th>
              <th>Medical</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Low</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>Medium</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>High</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>Critical</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th>Total</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Analytics;
