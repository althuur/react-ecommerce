import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../Context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
import Title from './Title';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const{modalOpen, closeModal} = value;
                    const{img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }else{
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mc-auto col-md-6 py-2 col-lg-4 text-center text-capitalize">
                                            <h5>Item Added to the cart</h5>
                                            <img src={img} className="img-fluid" alt="product"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : Rp.{price}</h5>
                                            <Link to="/" className="mr-2">
                                                <ButtonContainer onClick={()=> closeModal()}>
                                                    Continue Shoping
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={()=> closeModal()}>
                                                    Go to Cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default Modal;

const ModalContainer = styled.div`
    position : fixed;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    background : rgba(0,0,0,0.3);
    display : flex;
    align-items : center;
    justify-content : center;
    #modal{
        background : var(--mainWhite);
    }


`;