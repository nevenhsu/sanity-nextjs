import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  draftMode().disable()
  return NextResponse.redirect(new URL('/', request.url))
}
