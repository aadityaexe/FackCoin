/* eslint-disable no-unused-vars */
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CircularProgress = () => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2", // "light1", "dark1", "dark2"
    title: {
      text: "Trip Expenses",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          { y: 20, label: "Bitcoin" },
          { y: 24, label: "DogeCoine" },
          { y: 20, label: "Duck Coin" },
          { y: 14, label: "Katana" },
          { y: 12, label: "fax coin" },
          { y: 10, label: "Miss coin" },
          { y: 17, label: "Mr coin" },
        ],
      },
    ],
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      <CanvasJSChart options={options} />
    </div>
  );
};

export default CircularProgress;
