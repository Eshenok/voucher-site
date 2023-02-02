import { useState } from "react";
import Order from "./Order/Order";

export default function Vouchers({ customersData, onSelectCustomer, customerOrders }) {

  const [currentOrder, setCurrentOrder] = useState('');

  const customerClasses = ['vouchers__customer']

  function handleSelectCustomer(id) {
   onSelectCustomer(id);
   customerClasses.push('voucher__customer_checked')
  }

  return (
    <section className="vouchers">
      <form className="vouchers__form">
        <fieldset className="vouchers__filed">
          <input className="input input_place_vouchers" placeholder="Фильтр по наименованию..."/>
          <button type={"reset"} className="button button_icon_close button_place_vouchers" />
        </fieldset>

        <div className="vouchers__customers">
          {
            customersData.map((customer) =>
              <h2 onClick={(e) => {handleSelectCustomer(customer.customer_id)}} key={customer.customer_id} className={customerClasses.join(' ')}>{customer.customer_name}</h2>
            )
          }
        </div>
      </form>
      {
        customerOrders.length > 0 ?
          <div className="vouchers__orders">
            {
              customerOrders.map((order) =>
                <Order type="radio" value={order.order_id} key={order.order_id} id={order.order_id} onChange={(e) => {setCurrentOrder(e.target.value)}} description={order.order_name}/>
              )
            }
          </div>
          : <></>
      }
    </section>
  )
}
