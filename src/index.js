import React from 'react';
import ReactDOM from 'react-dom';
import ProductTable from './ProductTable';
import * as serviceWorker from './serviceWorker';

const products = [
	{category:"Clothes",price:50,name:"Coats"},
	{category:"Electronics",price:150,name:"Arduino"},
	{category:"Electronics",price:200,name:"Raspberry Pi"},
	{category:"Clothes",price:300,name:"Gucci Belt"},
	{category:"Electronics",price:400,name:"Smart Phone"}
];

ReactDOM.render(
  <React.StrictMode>
    <ProductTable products={products}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
