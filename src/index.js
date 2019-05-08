import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import './App.scss';
import Item from './Item';



// Bootstrap classes: badge, badge-info, text-muted

class ItemList extends React.Component {
  render() {
    const items = [
      {
        name: 'Cereales con chocolate',
        description: 'Cereales rellenos de chocolate',
        quantity: 2,
        category: 'Cereales',
        price: 5,
      },
      {
        name: 'Hamburguesa con queso',
        description: 'Hamburguesa rica y saludable',
        quantity: 1,
        category: 'Fast-food',
        price: 15,
      },
      {
        name: 'Agua mineral',
        description: 'Agua de un charco del Himalaya',
        quantity: 2,
        category: 'Bebida',
        price: 5,
      },
    ];

    return (
      <ul className="item-list">
        
        const items2 = items.map(element=><li>element</li>);
      </ul>
    );
  }
}

ReactDOM.render(
  <ItemList items={items2}/>,
  document.getElementById('root')
);
