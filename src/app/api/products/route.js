/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import { getAllProducts } from '@/utils/products';

export async function GET() {
  // const filePath = path.join(process.cwd(), 'sample-data', 'products.json');
  // const file = fs.readFileSync(filePath, 'utf-8');
  console.log('asdasdas');

  const products = await getAllProducts();
  console.log(products);

  return NextResponse.json(products);
}
