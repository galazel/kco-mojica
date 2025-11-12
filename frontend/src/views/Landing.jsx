import Home from "@/views/layout/Home";
import React, {useState} from "react";
import {products} from "@/constant";
import {Button} from "@/components/ui/button";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, getQuantity} from "@/features/cart/cartSlicer";

export default function Landing() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.cart.items);

    const findItem = (item) => {
        const cartItem = data.find(cart => cart.name === item.name);
        return cartItem ? <span className="text-sm text-gray-500">Quantity: {cartItem.quantity}</span> : ''
    }

    const menu = (
        <section className="grid grid-rows-[3rem_1fr] justify-center gap-10 h-full w-full py-20 ">
            <h1 className="text-5xl font-bold">Products</h1>
            <div className="grid grid-cols-3 gap-10 w-[75vw]">
                {products.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col overflow-hidden shadow-2xl rounded-2xl pb-10"
                        >
                            <div className="bg-gray-300 h-[50vh]">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover "
                                />
                            </div>
                            <div className="flex flex-col p-3 h-[10vh] ">
                                <p className="font-bold text-lg">{item.name}</p>
                                <p className="text-sm text-gray-600">${item.price}</p>
                                <p className="text-xs text-gray-500">In Stock: {item.stocks}</p>
                                {
                                    findItem(item)
                                }
                            </div>
                            <div className="px-3">
                                <Button
                                    className="w-full mt-3 cursor-pointer bg-green-950 h-12 hover:bg-green-700"
                                    onClick={() => {
                                        dispatch(addToCart({...item, quantity: 1}))
                                    }
                                    }
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
    return <Home>{menu}</Home>;
}
