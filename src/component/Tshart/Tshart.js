import React, { useEffect, useState } from 'react';
import { ringDataBase } from '../../RingDatabase/RingDatabase';
import SingleTshart from '../SingleTshart/SingleTshart';
import TshartCard from '../TshartCard/TshartCard';
import './Tshart.css'

const Tshart = () => {
      const [tsharts , setTshart] = useState([])
      useEffect(()=>{
            fetch('products.json')
            .then(res => res.json())
            .then(data => setTshart(data))
      },[])

      const [carts , setCart] = useState([])
      const addToCard = (selectProdect) =>{
            
            const newCart = [...carts , selectProdect]
            setCart(newCart)
           ringDataBase(selectProdect.id)
             
      }




      return (
            <div className='t-shart'>
                  <div className="row">
                        <div className="col-lg-8 col-12">
                              <div className="tshast-container">
                                    {
                                          tsharts.map(tshart => <SingleTshart  tshart={tshart} key={tshart.id} addToCard={addToCard}></SingleTshart> )
                                    }

                              </div>


                        </div>
                        <div className="col-lg-4 col-12">
                        <div className="cart-container">
                                         <h3 className='text-center mb-3'>Your Selected Card</h3>
                                         <hr />
                                         <p>Total Selected: {carts.length}</p>
                                         <div>
                                              <TshartCard carts={carts}></TshartCard>
                                         </div>
                                   </div>

                        </div>
                  </div>
                  
            </div>
      );
};

export default Tshart;