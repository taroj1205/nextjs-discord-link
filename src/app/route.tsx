import "./image.css";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const url = searchParams.get("url") || "https://example.com/";

	console.log(url);
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 14,
					display: "flex",
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
					fontFamily: "GG Sans",
					color: "rgb(0, 128, 255)",
					whiteSpace: "nowrap",
				}}>
				{url}
			</div>
		),
		{
			height: 20,
			width: url && url.length > 0 ? url.length * 10 : 100,
		}
	);
}
