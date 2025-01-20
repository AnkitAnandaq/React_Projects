import Accordian from "./components/accordian"
import Carousel from "./components/image_slider";
const App = () => {
  return (
    <div>
      <Accordian/>
      <Carousel url={"https://picsum.photos/v2/list"} page={"10"} limit={"5"} />
    </div>
  );
};

export default App;
