import './App.css';

function App() {

  const number = [1,2,3,4,5,9]
  const sum = number.reduce((acc,cum)=>{  console.log(acc);
  console.log('cum',cum)
   return acc+cum},0)
  return (
    <div className="App">
      <header className="App-header">
       <h1>{sum}</h1>
      </header>
    </div>
  );
}

export default App;
