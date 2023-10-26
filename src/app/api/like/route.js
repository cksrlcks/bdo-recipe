export async function PUT(req) {
    const data = await req.json();
    console.log(data);
}
