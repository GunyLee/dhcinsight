import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), "data/news.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const {
      q = "",
      category,
      sort = "latest",
      page = "1",
      pageSize = "10",
    } = req.query;

    const query = (q as string).toLowerCase();

    // ✅ 검색 필터
    let filtered = data.filter((item: any) =>
      item.title.toLowerCase().includes(query)
    );

    // ✅ 카테고리 필터
    if (category && category !== "") {
      filtered = filtered.filter((item: any) => item.category === category);
    }

    // ✅ 정렬 (published_date 기준)
    if (sort === "latest") {
      filtered.sort(
        (a: any, b: any) =>
          new Date(b.published_date).getTime() -
          new Date(a.published_date).getTime()
      );
    } else if (sort === "oldest") {
      filtered.sort(
        (a: any, b: any) =>
          new Date(a.published_date).getTime() -
          new Date(b.published_date).getTime()
      );
    }

    // ✅ 페이지네이션
    const start = (Number(page) - 1) * Number(pageSize);
    const paginated = filtered.slice(start, start + Number(pageSize));

    res.status(200).json({
      total: filtered.length,
      page: Number(page),
      pageSize: Number(pageSize),
      items: paginated,
      hasMore: start + Number(pageSize) < filtered.length,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load JSON data" });
  }
}
