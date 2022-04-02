import React, { useEffect, useState } from 'react';
import { createSearchParams } from 'react-router-dom';
import { getStoreCart, ringDataBase } from '../../RingDatabase/RingDatabase';
import RingCard from '../RingCard/RingCard';
import SingleRing from '../SingleRing/SingleRing';
import './Ring.css'

const Ring = () => {
      const [rings , setRing] = useState([])
      useEffect(()=>{
            fetch('ring.json')
            .then(res => res.json())
            .then(data => setRing(data))
      },[])

      const [carts , setCart] = useState([])
      // useEffect(()=>{
      //       const getStore = getStoreCart()
      //       const saveCart = []
           
      //      for(const id in getStore){
      //            const addedCart = rings.find(ring => ring.id === id)
                
                 
      //            if(addedCart){
      //                  const quantity =  getStore[id]
      //                  addToCard.quantity = quantity
      //                  saveCart.psuh(addedCart)
      //            }
      //            console.log(saveCart);
      //      }
      //      setCart(saveCart)
      //      console.log(saveCart);
     

      // },[])
      useEffect(()=>{
            const storeCart = getStoreCart()
            const saveCard = []
            for(const id in storeCart){
                const addedCart = rings.find(ring => ring.id === id)
                if(addedCart){
                    const quantity = storeCart[id]
                    addedCart.quantity = quantity
                    saveCard.push(addedCart)
                }
            }
            setCart(saveCard)
            console.log(saveCard);
        },[rings])


      // add to card 
      const addToCard = (selectProdect) =>{
            
            const newCart = [...carts , selectProdect]
            setCart(newCart)
           ringDataBase(selectProdect.id)
             
      }
      // add cart calculation 
      return (
           
                  <div className="ring">
                       <div className="row">
                             <div className="col-lg-8">
                          <div className="ring-container bg-light">
                          {
                              rings.map(ring => <SingleRing 
                                    ring={ring} 
                                    key={ring.id}
                                    addToCard={addToCard}
                                    ></SingleRing>)
                        }
                          </div>
                             </div>
                             <div className="col-lg-4">
                                   {/* cart  */}
                                   <div className="cart-container bg-light">
                                         <h3 className='text-center mb-3'>Your Selected Card</h3>
                                         <hr />
                                         <p>Total Selected: {carts.length}</p>
                                         <div>
                                              <RingCard carts={carts}></RingCard>
                                         </div>
                                   </div>
                             </div>
                       </div>

                  </div>
            
      );
};

export default Ring;