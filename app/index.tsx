import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent(App);

const root = () => {
    return (
        <App />
    )
}

export default root;

// import { registerRootComponent } from 'expo';
// import App from './App';

// // Ensure createRoot is only called once
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);

// // Register the app for Expo Go and native environments
// registerRootComponent(App);