const CartItem = (item: any) => {
    console.log(item)

  return (
    <div className="flex">
      <div className="w-52">
        <img className="w-full rounded-lg" src={item?.thumbnail} alt={item?.title} />
      </div>
      <div>
          <h3>{item?.title}</h3>
      </div>
    </div>
  )
}

export default CartItem