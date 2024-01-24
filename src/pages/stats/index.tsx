import { defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./index.css";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.font = {
  size: 20,
};
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

// Dummy NBA data for the charts
const nbaPlayerData = [
  { label: "LeBron James", points: 25, assists: 7, rebounds: 10 },
  { label: "Kevin Durant", points: 30, assists: 5, rebounds: 8 },
  { label: "Stephen Curry", points: 28, assists: 6, rebounds: 5 },
  { label: "Giannis Antetokounmpo", points: 27, assists: 4, rebounds: 12 },
  { label: "Luka Dončić", points: 26, assists: 8, rebounds: 7 },
];

const sourceData = [
  {
    label: "Ads",
    value: 32,
  },
  {
    label: "Subscriptions",
    value: 45,
  },
  {
    label: "Sponsorships",
    value: 23,
  },
];

const StatsPage = () => {
  return (
    <div className="body">
      <div className="dataCard playerStatsCard">
        <Line
          data={{
            labels: nbaPlayerData.map((data) => data.label),
            datasets: [
              {
                label: "Points",
                data: nbaPlayerData.map((data) => data.points),
                backgroundColor: "#FFD700",
                borderColor: "#FFD700",
              },
              {
                label: "Assists",
                data: nbaPlayerData.map((data) => data.assists),
                backgroundColor: "#32CD32",
                borderColor: "#32CD32",
              },
              {
                label: "Rebounds",
                data: nbaPlayerData.map((data) => data.rebounds),
                backgroundColor: "#6495ED",
                borderColor: "#6495ED",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "NBA Player Stats",
              },
            },
          }}
        />
      </div>

      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
          }}
        />
      </div>

      <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Sources",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default StatsPage;
