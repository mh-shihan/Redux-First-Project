function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="flex items-center gap-6 border-3 border-purple-300 rounded-md p-10 bg-slate-50 shadow-lg">
        <button className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white cursor-pointer">
          Increment
        </button>

        <h1 className="text-6xl m-10">0</h1>

        <button className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white cursor-pointer">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
