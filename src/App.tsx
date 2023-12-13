import {Counter} from "./components/Counter.tsx";
import {Input} from "./components/Input.tsx";
import {CounterDisplay} from "./components/CounterDisplay.tsx";

function App() {

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <CounterDisplay/>
        <Counter/>
        <Input/>
    </div>
  )
}

export default App
