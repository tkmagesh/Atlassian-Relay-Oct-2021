import { useState } from 'react';
import App from './App'
const Root = () => {
    const [showApp, setShowApp] = useState(true);
    const toggleApp = () => {
        setShowApp(!showApp);
    };
    return (
        <div>
        <button onClick={toggleApp}>
            {showApp ? 'Hide App' : 'Show App'}
        </button>
        {showApp && <App />}
        </div>
    );
}

export default Root;