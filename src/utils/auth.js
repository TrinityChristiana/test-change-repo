'use server';

import fs from 'fs';
import path from 'path';

const USERS_FILE = path.join(process.cwd(), 'src', 'utils', 'sample-data', 'users.json');

export async function getUsers() {
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  return JSON.parse(data);
}

export async function getUserByCode(code) {
  const users = await getUsers();
  return users[code] || null;
}
