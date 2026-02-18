export const createWhatsAppOrderLink = (product, phone) => {
  const message = `
Hello 👋

I would like to order:

Product: ${product.name}
Price: R${product.price.toLocaleString()}
Product ID: ${product.id}

Product Image:
${product.image}

Please confirm availability.
  `;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
