import './App.css';
import '@shopify/polaris/build/esm/styles.css';
import MainRoutes from './routes';
import {AppProvider} from '@shopify/polaris';


function App() {
  return (
    <AppProvider>
      <MainRoutes />
    </AppProvider>
  );
}

export default App;
