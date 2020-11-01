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

      // Array of Totals
      // danger = danger type
      // levelTotals = [Total Low, Total Medium, Total High, Total Critical]
      data: [
        { danger: "Fire", levelTotals: [0, 0, 0, 0] },
        { danger: "Flood", levelTotals: [0, 0, 0, 0] },
        { danger: "Power", levelTotals: [0, 0, 0, 0] },
        { danger: "Medical", levelTotals: [0, 0, 0, 0] },
      ],
    };
  }

  getLevelTotal(level) {
    let total = 0;
    for (let i = 0; i < this.state.data.length; i++) {
      total += this.state.data[i].levelTotals[level];
    }
    return total;
  }

  getDangerTotal(danger) {
    let total = 0;
    for (let i = 0; i < this.state.data.length; i++) {
      total += this.state.data[danger].levelTotals[i];
    }
    return total;
  }

  render() {
    // Levels Total Column Values
    let lowRowTotal = this.getLevelTotal(0);
    let mediumRowTotal = this.getLevelTotal(1);
    let highRowTotal = this.getLevelTotal(2);
    let criticalRowTotal = this.getLevelTotal(3);

    // Danger Total Row Values
    let fireColTotal = this.getDangerTotal(0);
    let floodColTotal = this.getDangerTotal(1);
    let powerColTotal = this.getDangerTotal(2);
    let medicalColTotal = this.getDangerTotal(3);

    return (
      <div style={{ padding: "1%" }}>
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
              <td>{this.state.data[0].levelTotals[0]}</td>
              <td>{this.state.data[1].levelTotals[0]}</td>
              <td>{this.state.data[2].levelTotals[0]}</td>
              <td>{this.state.data[3].levelTotals[0]}</td>
              <td>{lowRowTotal}</td>
            </tr>
            <tr>
              <th>Medium</th>
              <td>{this.state.data[0].levelTotals[0]}</td>
              <td>{this.state.data[1].levelTotals[0]}</td>
              <td>{this.state.data[2].levelTotals[0]}</td>
              <td>{this.state.data[3].levelTotals[0]}</td>
              <td>{mediumRowTotal}</td>
            </tr>
            <tr>
              <th>High</th>
              <td>{this.state.data[0].levelTotals[0]}</td>
              <td>{this.state.data[1].levelTotals[0]}</td>
              <td>{this.state.data[2].levelTotals[0]}</td>
              <td>{this.state.data[3].levelTotals[0]}</td>
              <td>{highRowTotal}</td>
            </tr>
            <tr>
              <th>Critical</th>
              <td>{this.state.data[0].levelTotals[0]}</td>
              <td>{this.state.data[1].levelTotals[0]}</td>
              <td>{this.state.data[2].levelTotals[0]}</td>
              <td>{this.state.data[3].levelTotals[0]}</td>
              <td>{criticalRowTotal}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{fireColTotal}</td>
              <td>{floodColTotal}</td>
              <td>{powerColTotal}</td>
              <td>{medicalColTotal}</td>
              <td>
                {fireColTotal + floodColTotal + powerColTotal + medicalColTotal}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Analytics;
