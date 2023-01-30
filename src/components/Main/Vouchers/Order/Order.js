export default function Order(props) {
  return (
    <>
      <input {...props} className="order" name="customer-order" id={`customer-order${props.id}`} />
      <label htmlFor={`customer-order${props.id}`} className="order__fake">{props.description}</label>
    </>
  )
}
