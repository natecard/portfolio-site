import { client } from '@/tina/__generated__/client';
export async function GET() {
	const postsResponse = await client.queries.postConnection();
	const data = postsResponse;

	return Response.json(data);
}
