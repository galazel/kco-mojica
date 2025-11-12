import Home from "@/views/layout/Home";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addQuantity, reduceQuantity} from "@/features/cart/cartSlicer.js";
import {Button} from "@/components/ui/button.jsx";

export default function Checkout() {
    const data = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    let subtotal = 0
    let shipping = 50;

    const compute = () => {
        data.forEach((item) => {
            subtotal += (item.price * item.quantity);
        })
    }
    compute()
    const checkoutContent = (
        <section className="h-full flex justify-center p-10">
            <div className="bg-white border-2 w-[90vw] grid grid-cols-[1fr_40%] p-10">
                <div>
                    <h1 className="text-center">Your Cart</h1>
                    <div className="flex flex-col gap-10 m-5  items-center ">{
                        data.length === 0 ? <><img src="/empty-cart.png" alt="sdaff"/> <h2>Cart is empty, add kangkong products please.
                           </h2></> : data.map((item, index) => {
                            return <div key={index}
                                        className="bg-gray-400 w-[80%] flex gap-5 rounded-md overflow-hidden">
                                <div className="w-[40%]">
                                    <img src={item.image} alt="" className="w-full"/>
                                </div>
                                <div className="flex flex-col gap-2 py-10 px-5">
                                    <p>{item.name}</p>
                                    <p>Price: {item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <div className="flex gap-5">
                                        <Button onClick={() => dispatch(reduceQuantity(index))}>-</Button>
                                        <Button onClick={() => dispatch(addQuantity(index))}>+</Button>
                                    </div>
                                </div>
                            </div>;
                        })
                    }</div>
                </div>
                <div>
                    <h1 className="text-center">Total</h1>
                    <div className="flex flex-col gap-5 m-5 bg-gray-400 h-[20vh] rounded-md p-10">
                        <table>
                            <tbody>
                            <tr>
                                <td>Subtotal:</td>
                                <td>{subtotal} </td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>Shipping Fee:</td>
                                <td>{data.length === 0 ? 0 : shipping} </td>
                            </tr>
                            </tbody>
                            <tbody>
                            <tr>
                                <td>Total:</td>
                                <td>{data.length === 0 ? 0 : subtotal + shipping} </td>
                            </tr>
                            </tbody>
                        </table>
                        <Button className="cursor-pointer p-5">Proceed to payment</Button>
                    </div>
                </div>
            </div>
        </section>
    );
    return <Home>{checkoutContent}</Home>;
}
