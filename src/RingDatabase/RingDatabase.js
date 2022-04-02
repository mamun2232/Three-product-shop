const ringDataBase = id =>{
      let shoppingCart = {}

      const storeCart = localStorage.getItem('shopping-cart')
      if(storeCart){
            shoppingCart = JSON.parse(storeCart)
            
      }
      // qunantity 
      const quantity = shoppingCart[id]
      if(quantity){
            const newQuantity = quantity + 1
            shoppingCart[id] = newQuantity
      }
      else{
            shoppingCart[id] = 1
      }



      localStorage.setItem('shopping-cart' , JSON.stringify(shoppingCart))
      console.log(quantity);
      return shoppingCart
}

const getStoreCart = () =>{
      let shoppingCart = {}

      const storeCart = localStorage.getItem('shopping-cart')
      if(storeCart){
            shoppingCart = JSON.parse(storeCart)
            
      }
      return shoppingCart
}

export {ringDataBase , getStoreCart}