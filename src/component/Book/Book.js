import React, { useEffect, useState } from 'react';
import { ringDataBase } from '../../RingDatabase/RingDatabase';
import { bagDataBase, getStoreCart } from '../BagDataBase/BagDataBase';
import ShowCard from '../ShowCard/ShowCard';
import SingleShow from '../SingleShow/SingleShow';
import './Book.css'

const Jwellary = () => {
      const [shows , setShow] = useState([])
      useEffect(()=>{
            fetch('show.json')
            .then(res => res.json())
            .then(data => setShow(data))
      },[])

      const [carts , setCart] = useState([])

      useEffect(()=>{
            const storeCart = getStoreCart()
            const saveCard = []
            for(const id in storeCart){
                const addedCart = shows.find(show => show.id === id)
                if(addedCart){
                    const quantity = storeCart[id]
                    addedCart.quantity = quantity
                    saveCard.push(addedCart)
                }
            }
            setCart(saveCard)
            
        },[shows])
      const addToCard = (selectProdect) =>{
            // let newCart = []
            // const exists = carts.find(cart => cart.id === selectProdect.id)
            // if(!exists){
            //       selectProdect.quantity = 1
            //       newCart = [...carts ,selectProdect]
            // }
            // else{
            //       const rest = carts.filter(cart => cart.id !== selectProdect.id)
            //       exists.quantity = exists.quantity + 1 
            //       newCart = [...rest , exists]
            // }
            
            const newCart = [...carts , selectProdect]
            setCart(newCart)
      //      ringDataBase(selectProdect.id)
            bagDataBase(selectProdect.id)
             
      }
      




      return (
            <div className='t-shart'>
                  <div className="row">
                        <div className="col-lg-8">
                              <div className="show-container">
                                    {
                                          shows.map(show => <SingleShow  show={show} key={show.id} addToCard={addToCard}></SingleShow> )
                                    }

                              </div>


                        </div>
                        <div className="col-lg-4">
                        <div className="cart-container">
                                         <h3 className='text-center mb-3'>Your Selected Card</h3>
                                         <hr />
                                         <p>Total Selected: {carts.length}</p>
                                         <div>
                                              <ShowCard carts={carts}> </ShowCard>
                                         </div>
                                   </div>

                        </div>
                  </div>
                  
            </div>
      )}

export default Jwellary;