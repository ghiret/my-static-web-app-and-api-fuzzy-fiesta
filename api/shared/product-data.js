const data = {
  products: [
    {
      id: 10,
      name: 'Strawberries',
      description: '16oz package of fresh organic strawberries',
      quantity: '1',
    },
    {
      id: 20,
      name: 'Sliced bread',
      description: 'Loaf of fresh sliced wheat bread',
      quantity: 1,
    },
    {
      id: 30,
      name: 'Apples',
      description: 'Bag of 7 fresh McIntosh apples',
      quantity: 1,
    },
    {
      id: 40,
      name: 'Milk',
      description: '1 gallon of organic whole milk',
      quantity: 1,
    },
    {
      id: 50,
      name: 'Eggs',
      description: 'Carton of 12 organic eggs',
      quantity: 1,
    },
    {
      id: 60,
      name: 'Cheese',
      description: '8oz package of cheddar cheese',
      quantity: 1,
    },
    {
      id: 70,
      name: 'Butter',
      description: '1lb package of unsalted butter',
      quantity: 1,
    },
    {
      id: 80,
      name: 'Yogurt',
      description: '32oz container of plain yogurt',
      quantity: 1,
    },
    {
      id: 90,
      name: 'Orange Juice',
      description: '64oz bottle of orange juice',
      quantity: 1,
    },
    {
      id: 100,
      name: 'Coffee',
      description: '1lb bag of ground coffee',
      quantity: 1,
    }
  ],
};

const getRandomInt = () => {
  const max = 1000;
  const min = 100;
  return Math.floor(Math.random() * Math.floor(max) + min);
};

const addProduct = (product) => {
  product.id = getRandomInt();
  data.products.push(product);
  return product;
};

const updateProduct = (product) => {
  const index = data.products.findIndex((v) => v.id === product.id);
  console.log(product);
  data.products.splice(index, 1, product);
  return product;
};

const deleteProduct = (id) => {
  const value = parseInt(id, 10);
  data.products = data.products.filter((v) => v.id !== value);
  return true;
};

const getProducts = () => {
  return data.products;
};

module.exports = { addProduct, updateProduct, deleteProduct, getProducts };
