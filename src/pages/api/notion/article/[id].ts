// pages/api/notion/article/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";

const TOKEN = process.env.NOTION_API_KEY!;
const NOTION_VERSION = "2022-06-28";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (!id || typeof id !== "string") {
        return res.status(400).json({ error: "Missing id" });
    }

    try {
        // 1) 페이지 메타데이터
        const pageRes = await fetch(`https://api.notion.com/v1/pages/${id}`, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                "Notion-Version": NOTION_VERSION,
            },
        });
        const pageData = await pageRes.json();

        // 2) 페이지 본문 블록
        const blocksRes = await fetch(
            `https://api.notion.com/v1/blocks/${id}/children?page_size=100`,
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    "Notion-Version": NOTION_VERSION,
                },
            }
        );
        const blocksData = await blocksRes.json();

        res.status(200).json({
            id,
            properties: pageData.properties,
            blocks: blocksData.results ?? [],
        });
    } catch (error: any) {
        console.error("❌ Notion Fetch Error:", error);
        res.status(500).json({ error: error.message });
    }
}
