import { useState } from "react";
import Order from "./Order/Order";

export default function Vouchers({ customersData, onSelectCustomer, customerOrders }) {

  const [currentOrder, setCurrentOrder] = useState('');

  function handleSelectCustomer(e) {
   onSelectCustomer(e.target.value);
  }

  console.log(currentOrder);

  return (
    <section className="vouchers">
      <form className="vouchers__form">
        <label htmlFor="voucher_customer">Выберите контрагента</label>
        <select className="vouchers__select" name="voucher_customer" id="voucher_customer" onChange={handleSelectCustomer}>
          {
            customersData.map((customer, index) => <option key={index} value={customer.customer_id}>{customer.customer_name}</option> )
          }
        </select>
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
      </form>
    </section>
  )
}
