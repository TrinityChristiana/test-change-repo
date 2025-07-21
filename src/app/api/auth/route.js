/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import { getUserByCode } from '../../../utils/auth';

export async function POST(req) {
  const { code } = await req.json();

  if (!code) {
    return NextResponse.json({ error: 'Code required' }, { status: 400 });
  }

  const user = await getUserByCode(code);

  if (!user) {
    return NextResponse.json({ error: 'Invalid code' }, { status: 401 });
  }

  return NextResponse.json({ user });
}
