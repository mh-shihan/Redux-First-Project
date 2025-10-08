import {
  decrement,
  increment,
  incrementByAmount,
} from './redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="flex items-center gap-6 border-3 border-purple-300 rounded-md p-10 bg-slate-50 shadow-lg">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white cursor-pointer"
        >
          Increment
        </button>

        <h1 className="text-6xl m-10">{count}</h1>

        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white cursor-pointer"
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-3 py-2 rounded-md bg-purple-500 text-xl font-semibold text-white cursor-pointer"
        >
          Increment By 5
        </button>
      </div>
    </div>
  );
}

export default App;
