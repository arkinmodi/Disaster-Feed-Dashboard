import React from "react";
import { Table } from "react-bootstrap";

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  updateData() {
    let data = this.state.data;
    let posts = this.props.posts;
    let levels = ["Low", "Medium", "High", "Critical"];

    // Loop through all danger types
    for (let danger = 0; danger < data.length; danger++) {
      // Loop through all levels
      for (let level = 0; level < data[danger].levelTotals.length; level++) {
        // Count number posts with each combination of danger type and level
        data[danger].levelTotals[level] = posts.filter(
          (post) =>
            post.problem === data[danger].danger &&
            post.priority === levels[level]
        ).length;
      }
    }
  }

  render() {
    // Refresh the data
    this.updateData();

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
              <td>{this.state.data[0].levelTotals[1]}</td>
              <td>{this.state.data[1].levelTotals[1]}</td>
              <td>{this.state.data[2].levelTotals[1]}</td>
              <td>{this.state.data[3].levelTotals[1]}</td>
              <td>{mediumRowTotal}</td>
            </tr>
            <tr>
              <th>High</th>
              <td>{this.state.data[0].levelTotals[2]}</td>
              <td>{this.state.data[1].levelTotals[2]}</td>
              <td>{this.state.data[2].levelTotals[2]}</td>
              <td>{this.state.data[3].levelTotals[2]}</td>
              <td>{highRowTotal}</td>
            </tr>
            <tr>
              <th>Critical</th>
              <td>{this.state.data[0].levelTotals[3]}</td>
              <td>{this.state.data[1].levelTotals[3]}</td>
              <td>{this.state.data[2].levelTotals[3]}</td>
              <td>{this.state.data[3].levelTotals[3]}</td>
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
