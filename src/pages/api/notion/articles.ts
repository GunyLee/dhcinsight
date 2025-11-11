// pages/api/notion/articles.ts
import type { NextApiRequest, NextApiResponse } from "next";

const TOKEN = process.env.NOTION_API_KEY!;
const DATABASE_ID = process.env.NOTION_ARTICLE_DB_ID!;
const NOTION_VERSION = "2022-06-28";

// ✅ 컬럼 매핑
const FIELD_MAP: Record<string, string> = {
  "title": "title",
  "category": "category",
  "created_at": "createdAt",
  "editor": "editor",
  "subtitle": "subtitle",
  "thumbnail": "thumbnail",
};

async function queryNotionDatabase() {
  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      "Notion-Version": NOTION_VERSION,
    },
    body: JSON.stringify({
      page_size: 20,
      sorts: [{ property: "created_at", direction: "descending" }],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("❌ Notion API Error:", text);
    throw new Error(`Notion API failed: ${res.status}`);
  }

  return res.json();
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await queryNotionDatabase();

    const items = (data.results ?? []).map((page: any) => {
      const props = page.properties ?? {};
      const parsed: Record<string, any> = {};

      for (const [kor, vRaw] of Object.entries(props)) {
        const v: any = vRaw;
        const key = FIELD_MAP[kor] ?? kor;
        let value: any = "";

        switch (v.type) {
          case "title":
            value = v.title?.map((t: any) => t.plain_text).join("") ?? "";
            break;
          case "rich_text":
            value = v.rich_text?.map((t: any) => t.plain_text).join("") ?? "";
            break;
          case "select":
            value = v.select?.name ?? "";
            break;
          case "date":
            value = v.date?.start ?? "";
            break;
          case "files":
            value = v.files?.[0]?.file?.url || v.files?.[0]?.external?.url || "";
            break;
          default:
            value = "";
        }

        parsed[key] = value;
      }

      return {
        id: page.id,
        url: page.url,
        ...parsed,
      };
    });

    res.status(200).json({ results: items });
  } catch (err: any) {
    console.error("❌ Error:", err);
    res.status(500).json({ error: err.message });
  }
}
