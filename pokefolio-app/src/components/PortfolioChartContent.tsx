import { View } from "react-native";
import { CartesianChart, Line } from "victory-native";

const data = [
  { day: 1, value: 1900 },
  { day: 2, value: 1950 },
  { day: 3, value: 1880 },
  { day: 4, value: 2050 },
  { day: 5, value: 2150 },
  { day: 6, value: 2438 },
];

export default function PortfolioChartContent() {
  return (
    <View style={{ height: 220 }}>
      <CartesianChart
        data={data}
        xKey="day"
        yKeys={["value"]}
      >
        {({ points }) => (
          <Line
            points={points.value}
            color="black"
            strokeWidth={3}
          />
        )}
      </CartesianChart>
    </View>
  );
}