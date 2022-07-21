import { Button } from './stories/Button'
import { Header } from './stories/Header'

function App() {
  return (
    <div className="App">
      <Header
        onCreateAccount={() => { }}
        onLogin={function noRefCheck() { }}
        onLogout={function noRefCheck() { }}
        user={{
          name: 'Nawed Ali'
        }}
      />
      <Button
        label="Submit"
        onClick={() => { }}
        primary
      />
    </div>
  );
}

export default App;
