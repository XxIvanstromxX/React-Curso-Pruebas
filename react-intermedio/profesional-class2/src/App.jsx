import {
  DerivateStateGood,
  DerivateStateBad,
} from './components/errors/DerivateState';

function App() {
  return (
    <>
      <DerivateStateBad />
      <DerivateStateGood />
    </>
  );
}

export default App;
