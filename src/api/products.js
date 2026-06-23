export async function getGroceries() {
  const resopnse = await fetch(
    'https://dummyjson.com/products/category/groceries'
  );
  const data = await resopnse.json();
  return data.products;
}
