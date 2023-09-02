import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';
import Input from './components/input/Input';
import Product from './components/product/Product';

function App() {
  return (
    <Provider store={store}>
      <Input/>
      <Product/>
    </Provider>
  );
}

export default App;
