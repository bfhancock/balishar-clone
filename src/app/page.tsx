import Card from "./components/card";
import { swiftStrike } from "./cards/cards";

const Home = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gray-900">
      <Card card={swiftStrike} />
    </div>
  );
}

export default Home
