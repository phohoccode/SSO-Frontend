import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";

function App() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.count)

    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;
