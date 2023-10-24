import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
    const publicDirectory = path.join(process.cwd(), 'public')
    const file = await fs.readFile(publicDirectory + '/recipes.json', 'utf8');
    const data = await JSON.parse(file);
    return NextResponse.json(data);
}
