import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import './App.scss';

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <h5 className="quantity">{ this.props.quantity }</h5>
        <div>
          <h5>{ this.props.name }</h5>
          <h6 className="text-muted">{ this.props.description }</h6>
        </div>
        <div className="badge badge-info">{ this.props.category }</div>
        <h5 className="price">{ this.props.price }€</h5>
      </div>
    );
  }
}

// Bootstrap classes: badge, badge-info, text-muted

class ItemList extends React.Component {
  render() {
    return (
      <ul className="item-list">
        <li>
          <Item 
            name="Cereales con chocolate" 
            description="Cereales rellenos de chocolate" 
            quantity={2}
            category="Cereales" 
            price={5} 
          />
        </li>
        <li>
          <Item 
            name="Hamburguesa con queso" 
            description="Hamburguesa rica y saludable" 
            quantity={1}
            category="Fast-food" 
            price={15}
          />
        </li>
        <li>
          <Item 
            name="Agua mineral" 
            description="Agua de un charco del Himalaya" 
            quantity={2}
            category="Bebida" 
            price={5}
          />
        </li>
        <li>
          <Item 
            name="Pollo con patatas" 
            description="Pollo y patatas" 
            quantity={2}
            category="Pollo" 
            price={5} 
          />
        </li>
      </ul>
    );
  }
}

ReactDOM.render(
  <ItemList />,
  document.getElementById('root')
);
