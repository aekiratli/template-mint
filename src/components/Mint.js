import { useState } from "react";

function Mint() {

    const [counter,setCounter] = useState(0)

    const increment =(value)=>{
        const newValue = value +1;
        setCounter(newValue);
    }

    const decrement =(value)=>{
        const newValue = value  - 1;
        setCounter(newValue);
    }
  return (
   	<div id="mint-form" className="slider-2">
		<div className="mint-container">
            <div className="mint-title">
            MINT ON ETHEREUM
            </div>
            <div className="price-container">
            
           <div className="quantity-price-holder">
           <div className="q-price">
                    <div>
                        Quntity
                    </div>
                    <div>
                        Price
                    </div>
            </div>
            <div className="input-group-container">

            <div className="input-group-toggle">
                                      <input type="button" onClick={()=>decrement(counter)} defaultValue="-" className="button-minus" data-field="quantity" />
                                      <input type="number" className="form-control" step="1" max="" defaultValue="1" value={counter} name="quantity" className="quantity-field" />
                                      <input type="button" onClick={()=>increment(counter)} defaultValue="+" className="button-plus" data-field="quantity" />
                                    </div>
                    <div className="q-price">
                        0.06 ETH
                    </div>
            </div>
           </div>
            <div>
            <button className="mint-button" >MINT NOW</button>
            </div>
            
            <div>
            782/5,000 MINTED
            </div>
            <div className="mt-3">
            <a  className="open-sea-button-link" href="#">Click here to view on opensea</a>

            </div>
            </div>
            {/* <div className="row">
                <div className="col-lg-12">
                    <h2 className="h2-heading">MINT</h2>
                    <p className="p-heading">Be part of the story and follow us on Twitter via <a href="#your-link">@name</a> and subscribe to the newsletter for news and updates about our workshops</p>
                </div> 
            </div>  */}
            
        </div>
    </div> 
  );
}

export default Mint;
