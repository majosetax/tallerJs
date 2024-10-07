document.addEventListener('DOMContentLoaded', () => {
  const itemContainer = document.getElementById('item-container');
  const priceDisplay = document.getElementById('price-display');
  const payButton = document.getElementById('pay');
  let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

  refreshCart();

  document.querySelectorAll('.add-to-basket').forEach(button => {
      button.addEventListener('click', () => {
          const itemName = button.dataset.product;
          const itemCost = parseFloat(button.dataset.cost);
          addItemToCart(itemName, itemCost);
      });
  });

  function addItemToCart(productName, productCost) {
      const existingItem = shoppingCart.find(item => item.product === productName);
      if (existingItem) {
          existingItem.count++;
      } else {
          shoppingCart.push({ product: productName, cost: productCost, count: 1 });
      }
      refreshCart();
  }

  function removeItemFromCart(productName) {
      const itemIndex = shoppingCart.findIndex(item => item.product === productName);
      if (itemIndex !== -1) {
          shoppingCart[itemIndex].count > 1 ? shoppingCart[itemIndex].count-- : shoppingCart.splice(itemIndex, 1);
      }
      refreshCart();
  }

  function refreshCart() {
      itemContainer.innerHTML = '';
      let totalAmount = 0;

      if (shoppingCart.length === 0) {
          itemContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
          payButton.style.display = 'none';
      } else {
          shoppingCart.forEach(item => {
              const cartElement = document.createElement('div');
              cartElement.className = 'basket-item';
              cartElement.innerHTML = `
                  <p>${item.product} x${item.count} - $${(item.cost * item.count).toFixed(3)}</p>
                  <button class="delete-btn">Eliminar 1</button>
              `;
              cartElement.querySelector('.delete-btn').addEventListener('click', () => removeItemFromCart(item.product));
              itemContainer.appendChild(cartElement);
              totalAmount += item.cost * item.count;
          });
          payButton.style.display = 'block';
      }

      priceDisplay.textContent = totalAmount.toFixed(3);
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }

  payButton.addEventListener('click', () => {
      if (shoppingCart.length === 0) {
          alert("Tu carrito está vacío.");
      } else {
          alert("¡Gracias por tu compra!");
          shoppingCart = [];
          refreshCart();
          localStorage.removeItem('shoppingCart');
      }
  });
});
