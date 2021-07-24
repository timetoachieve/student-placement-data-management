import { RouterConfig } from 'navigation/RouterConfig';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <RouterConfig />
            </div>
        </BrowserRouter>
    );
}

export default App;
