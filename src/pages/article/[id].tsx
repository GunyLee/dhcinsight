// pages/article/[id].tsx
import { useRouter } from "next/router";
import useSWR from "swr";
import { Box, Typography, CircularProgress } from "@mui/material";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EditIcon from '@mui/icons-material/Edit';
import CategoryIcon from '@mui/icons-material/Category';
import { getCategoryLabel } from "../home";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ArticleDetailPage() {
    const router = useRouter();
    const { id } = router.query;

    const { data, error, isLoading } = useSWR(
        id ? `/api/notion/article/${id}` : null,
        fetcher
    );

    if (error) return <Typography>❌ 데이터를 불러오는 중 오류가 발생했어요.</Typography>;
    if (isLoading || !data)
        return (
            <Box display="flex" justifyContent="center" mt={10}>
                <CircularProgress />
            </Box>
        );

    const props = data.properties ?? {};
    const title =
        props.title?.title?.[0]?.plain_text ?? "(제목 없음)";
    const subtitle =
        props.subtitle?.rich_text?.[0]?.plain_text ?? "";
    const category =
        props.category?.rich_text?.[0]?.plain_text ?? "";
    const createdAt =
        props.created_at?.date?.start ?? "";
    const editor =
        props.editor?.rich_text?.[0]?.plain_text ?? "";
    const thumbnail =
        props.thumbnail?.files?.[0]?.file?.url ||
        props.thumbnail?.files?.[0]?.external?.url ||
        "";

    const blocks = data.blocks ?? [];
    console.log(data)
    return (
        <>
            {/* 헤더 */}
            <Box sx={{
                position: "relative",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                width: "100%",
                height: "calc(100vh - 100px)",
                mb: "120px",
                "@media (max-width: 639px)": {
                    height: 'auto',
                    mb: '52px'
                }
            }}>
                {/* 이미지 */}
                <Box sx={{
                    position: 'relative',
                    width: '100vw',
                    height: '100%',
                    "@media (max-width: 639px)": {
                        height: '260px'
                    }
                }}>
                    <Box sx={{ width: '100%', height: '100%' }}>
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transform: 'translateZ(0px)',
                        }}>
                            <Box
                                sx={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    overflow: "hidden",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: 0,
                                    m: 0, // margin
                                    p: 0, // padding
                                    position: "absolute",
                                    inset: 0,
                                }}
                            >
                                <img
                                    src={thumbnail}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        boxSizing: "border-box",
                                        padding: 0,
                                        border: "none",
                                        margin: "auto",
                                        display: "block",
                                        width: 0,
                                        height: 0,
                                        minWidth: "100%",
                                        maxWidth: "100%",
                                        minHeight: "100%",
                                        maxHeight: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* 텍스트 */}
                <Box
                    sx={{
                        maxWidth: "100%",
                        position: "absolute",
                        inset: 0,
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        pb: "40px",
                        color: "var(--adaptiveBackground)",
                        textShadow: "rgba(0, 0, 0, 0.1) 0px 0px 20px",
                        "@media (max-width: 639px)": {
                            textShadow: "none",
                            position: "static",
                            mt: "40px",
                            p: 0,
                        }
                    }}
                >
                    {/* 제목 */}
                    <Typography
                        sx={{
                            maxWidth: "100%",
                            fontSize: "56px",
                            fontWeight: 600,
                            lineHeight: 1.4,
                            color: "rgb(255, 255, 255)",
                            textAlign: "center",
                            mb: "20px",

                            "@media (max-width: 639px)": {
                                fontSize: "32px",
                                lineHeight: "43px",
                                color: "var(--adaptiveGrey900)",
                                m: "0 20px 40px",
                            },
                        }}>{title}</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "17px",
                            mb: "30px", // margin-bottom
                            gap: "4px",
                            color: "var(--adaptiveGrey900)",
                            "& > :not(:last-child)::after": {
                                content: '" ·"',
                            },
                            "@media (max-width: 639px)": {
                                color: "var(--adaptiveGrey600)", // 동일 색상 유지
                                gap: "14px",
                                flexDirection: "column",
                                mb: 0, // margin-bottom: 0px
                                "& > :not(:last-child)::after": {
                                    content: '""', // 모바일에서는 숨김 (또는 제거)
                                },
                            },
                        }}
                    >
                        {/* 시간 */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                                "@media (max-width: 639px)": {
                                    gap: "2px",
                                },
                            }}>
                            {/* 아이콘 */}
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "inline-flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    verticalAlign: "top",
                                }}
                            >
                                <AccessTimeFilledIcon sx={{
                                    width: 16,
                                    height: 16,
                                }} />
                            </Box>
                            <Typography sx={{
                                fontSize: 17,
                                color: "inherit"
                            }}>
                                {createdAt}
                            </Typography>
                        </Box>
                        {/* 작성자 */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                                "@media (max-width: 639px)": {
                                    gap: "2px",
                                },
                            }}>
                            {/* 아이콘 */}
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "inline-flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    verticalAlign: "top",
                                }}
                            >
                                <EditIcon sx={{
                                    width: 16,
                                    height: 16,
                                }} />
                            </Box>
                            <Typography sx={{
                                fontSize: 17,
                                color: "inherit",
                                borderBottom: '1px solid currentcolor',
                                "@media (max-width: 639px)": {
                                    pb: "2px",
                                    lineHeight: 1,
                                }
                            }}>
                                {editor}
                            </Typography>
                        </Box>
                        {/* 카테고리 */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                                "@media (max-width: 639px)": {
                                    gap: "2px",
                                },
                            }}>
                            {/* 아이콘 */}
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "inline-flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    verticalAlign: "top",
                                }}
                            >
                                <CategoryIcon sx={{
                                    width: 16,
                                    height: 16,
                                }} />
                            </Box>
                            <Typography sx={{
                                fontSize: 17,
                                color: "inherit"
                            }}>
                                {getCategoryLabel(category)}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box >
            {/* 본문 */}
            <Box sx={{
                maxWidth: "700px",
                mx: "auto",
                pb: "100px",
                "@media (max-width: 767px)": {
                    pb: 5,
                }
            }}>
                <Box sx={{
                    position: "relative",
                }}>
                    <Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            flex: "0 0 auto",
                        }}>
                            {/* 블록 렌더링 */}
                            {blocks.map((b: any) => {
                                if (b.type === "paragraph") {
                                    return (
                                        <Typography key={b.id}
                                            component={'p'}
                                            sx={{
                                                fontSize: "20px",
                                                letterSpacing: "0em",
                                                wordBreak: "keep-all",
                                                lineHeight: 1.6,
                                                fontWeight: "normal",
                                                color: "var(--adaptiveGrey700)",
                                                m: "14px 24px 6px", // margin
                                            }}
                                        >
                                            {b.paragraph?.rich_text
                                                ?.map((t: any) => t.plain_text)
                                                .join("")}
                                        </Typography>
                                    );
                                }
                                if (b.type === "heading_3") {
                                    return (
                                        <Typography key={b.id}
                                            component={'h3'}
                                            sx={{
                                                fontSize: "27px",
                                                letterSpacing: "0em",
                                                lineHeight: 1.55,
                                                wordBreak: "keep-all",
                                                fontWeight: "bold",
                                                color: "var(--adaptiveGrey800)",
                                                m: "48px 24px 0px",
                                                whiteSpace: "pre-wrap",
                                            }}>
                                            {b.heading_3?.rich_text?.[0]?.plain_text}
                                        </Typography>
                                    );
                                }
                                if (b.type === "heading_2") {
                                    return (
                                        <Typography key={b.id} variant="h6" fontWeight={600} mt={4} mb={1}>
                                            {b.heading_2?.rich_text?.[0]?.plain_text}
                                        </Typography>
                                    );
                                }
                                if (b.type === "image") {
                                    const src =
                                        b.image?.file?.url || b.image?.external?.url || "";
                                    return (
                                        <Box key={b.id} sx={{
                                            m: "14px 0px 6px",
                                            textAlign: "center",
                                        }}>
                                            <img
                                                src={src}
                                                alt=""
                                                style={{ maxWidth: "100%" }}
                                            />
                                        </Box>
                                    );
                                }
                                return null;
                            })}
                        </Box>
                    </Box>
                </Box>
            </Box >
        </>
    );
}
