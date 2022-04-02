const bagDataBase = (id) =>{
      let bagCart = {}
      const storeCart = localStorage.getItem('BagCart')
      if(storeCart){
            bagCart = JSON.parse(storeCart)
      }
      const quantity = storeCart[id]
      if(quantity){
            const newQuantity = quantity + 1
            bagCart[id] = newQuantity
      }
      else{
            bagCart[id] = 1
      }
      
      localStorage.setItem('BagCart' , JSON.stringify(bagCart))
      return bagCart
}

const getStoreCart = () =>{
      let bagCart = {}
      const storeCart = localStorage.getItem('BagCart')
      if(storeCart){
            bagCart = JSON.parse(storeCart)
      }
      return bagCart
}

export {bagDataBase , getStoreCart}