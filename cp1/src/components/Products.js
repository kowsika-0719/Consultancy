
import React from 'react';
import './Products.css';
import {Link} from 'react-router-dom';
function Product() {
    return (
        <>
            <div className='prod'>
                <p>YOUR SAFETY IS OUR PRIORITY</p>
                <h1>Superior Quality Products,</h1>
                 <h1><span style={{ color:' rgb(7, 154, 246)'}}> Fencing & Trading Solutions</span>  </h1>
                <h2>Products</h2>
                <div className='prodiv'>
                    <div>
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwEkQ_0HJBnJlggR-mroIFBoEjByGMr3f2JPS2y5Oc6wpo0xdh" alt="Chainlink Fencing" />
                        <figcaption>
                            <p>Chainlink Fencing</p>
                            {/* <a href="#"><h4>View Product</h4></a> */}
                            <Link className='links' to='/prod1'>view product &#8594;</Link>
                        </figcaption>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQktlWBQIfyvhff29BbgV9iueuUTrr7xNWzGR9u3gcfVXeGjOZZ"/>
                        <figcaption>
                            <p>Twisted Fence</p>
                            <Link className='links' to='/prod2'>view product &#8594;</Link>
                        </figcaption>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSuC8MuyJekMbcuByKTP9_nmNILsaeI9J2eSNBV1WeJRp59rDb_" alt="Chainlink Fencing" />
                        <figcaption>
                            <p>Pvc Chain link Fence</p>
                            <Link className='links' to='/prod3'>view product &#8594;</Link>
                        </figcaption>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRqZhKnABll1cO6o8VPQYqBVBjuARKKMxieb3zb0_xDEmx4UAF3" alt="Chainlink Fencing" />
                        <figcaption>
                            <p>Chicken Mesh</p>
                            <Link className='links' to='/prod4'>view product &#8594;</Link>
                        </figcaption>
                    </div>
                </div>
                <div className='prodiv1'>
                <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3q9mIJtC6Zf_mvgCFQHcrkrT-gTM0eM-TZb9llyBShYMr7iZx" alt="Chainlink Fencing" />
                        <figcaption>
                            <p>Poultry Side Mesh Fencing</p>
                          <Link className='links' to='/prod5'>view product &#8594;</Link>
                        </figcaption>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRv9h-v_sh2ZnWEQoeX14WOy99F0InDqmxaYBmQYDiVZehXOtuq" alt="Chainlink Fencing" />
                        <figcaption>
                            <p>Weld Mesh</p>
                            <Link className='links' to='/prod6'>view product &#8594;</Link>
                        </figcaption>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSznrHLNuH2VuHdAp0Zwt_D61-TzVSvMWcsmQ1NwD0XGuB41t_b" alt="Chainlink Fencing" />
                        <figcaption>
                            <p>Plastic Wire Mesh</p>
                            <Link className='links' to='/prod7'>view product &#8594;</Link>
                        </figcaption>
                    </div>
                    <div>
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqpq_i1amkyAo-L858G0_uFxEXpDm8v6uhRxnrtArl2FNloMAN" alt="Chainlink Fencing" />
                        <figcaption>
                            <p>Wire Mesh(GI + PVC)</p>
                            <Link className='links' to='/prod8'>view product &#8594;</Link>
                        </figcaption>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
