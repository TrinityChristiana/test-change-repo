import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'utils', 'sample-data', 'products.json');

export function getAllProducts() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

export function getProductsByType(type) {
  return getAllProducts().filter((p) => p.type === type);
}

export function getProductById(id) {
  return getAllProducts().find((p) => p.id === id);
}
