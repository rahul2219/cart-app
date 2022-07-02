import React from 'react';
import Cart from './Cart.js'
import Navbar from './Navbar.js';
import firebase from 'firebase/app';



class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products:[],
      loading:true
    }
    this.db=firebase.firestore();
  }

  handleIncreaseQuantity=(product) =>{
      const {products}=this.state;
      const index = products.indexOf(product);
      const docRef = this.db.collection('products').doc(products[index].id);
      docRef.update({
        qty:products[index].qty+1
      })
      .then(()=>{
        console.log("Updated Successfully")
      })
      .catch((error)=>{
        console.log("Error: ",error)
      })
      
  }


  componentDidMount () {
    this.db
     .collection('products')
     .onSnapshot((snapshot) =>{
        const products = snapshot.docs.map((doc) => {
          const data=doc.data();
          
          data['id'] = doc.id
          return data;
    
        })
        this.setState({
          products,
          loading:false
        })
      })
   }

  handleDecreaseQuantity=(product) =>{
    const {products}=this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection('products').doc(products[index].id);
    if(products[index].qty === 0){
      return;
    }
    docRef.update({
      qty:products[index].qty-1
    })
    .then(()=>{
      console.log("Updated Successfully")
    })
    .catch((error)=>{
      console.log("Error: ",error)
    })
  }

  handleDeleteProduct=(id)=>{

    const docRef = this.db.collection('products').doc(id);
    docRef.delete().then(()=>{
      console.log("Deleted Successfully")
    }).catch((error)=>{
      console.log("Error: ",error)
    })
  }

  getCount =()=>{
    const{products}=this.state;
    let count =0;
    products.forEach((product)=> {
      count += product.qty;
    })
    return count;
  }
  TotalPrice=() =>{
    const{products}=this.state;
    let total =0;
    products.forEach((product)=> {
      total += product.price*product.qty;
    })
    return total;
  }

  addProduct=()=>{
    this.db.collection('products').add({
      img:'https://n4.sdlcdn.com/imgs/i/z/i/HMTe-HM-9072-Metal-Analog-SDL494827480-1-db8fc.jpg',
      price:999,
      qty:2,
      title:'Watch'
    })
    .then((docRef)=>{
      console.log("Product has been added",docRef)
    })
    .catch((error)=>{
      console.log("Error",error)
    })
  }

  render(){
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCount()}/>
        <button type="button" style={{ borderRadius:10,padding:10,marginTop:20 ,marginLeft:20,background:'black', color:'white',cursor:'pointer'}} onClick={this.addProduct} >Add Product</button>
        <Cart
              products={products} 
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              handleDeleteProduct={this.handleDeleteProduct}/>
        {loading && <h1>Loading Products...</h1>}
        <div style={{fontSize:20,padding:10}}>TOTAL:{this.TotalPrice()}</div>
      </div>
    );
  }
}

export default App;
