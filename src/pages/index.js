import React from "react"

export default function Home() {
  return (
    <div>
      Hello world!
      <div>
        <button
          className="snipcart-add-item"
          data-item-id="starry-night"
          data-item-price="35.99"
          data-item-url="/"
          data-item-description="High-quality Men Shoe, lustrous Shine"
          data-item-image="https://cdn.shopify.com/s/files/1/0104/5757/9583/products/OSCO-Men-Dress-Shoes-Men-Formal-Shoes-Leather-Luxury-Fashion-Wedding-Shoes-Men-Business-Casual-Oxford.jpg?v=1575045878"
          data-item-name="Men Black Shoe"
          data-item-custom1-name="Size"
          data-item-custom1-options="9|10[+2]|11[+4]|12[+6]"
          data-item-custom2-name="Polish"
          data-item-custom2-type="checkbox"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
