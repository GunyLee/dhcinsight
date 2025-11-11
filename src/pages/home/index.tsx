import { fetcher } from "@/src/lib/fetcher";
import { Box, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

export const ARTICLE_CATEGORIES = [
    { id: 'all', value: 'all', label: '전체' },
    { id: 'life', value: 'life', label: '라이프' },
    { id: 'health', value: 'health', label: '건강' },
    { id: 'tech', value: 'tech', label: '기술' },
    { id: 'insurance', value: 'insurance', label: '보험' },
];

export function getCategoryLabel(value: string): string {
    const found = ARTICLE_CATEGORIES.find((c) => c.value === value);
    return found ? found.label : value; // 없으면 원래 값 반환
}

export default function HomePage() {
    const [category, setCategory] = useState<string>(ARTICLE_CATEGORIES[0].value);
    const { data, error, isLoading } = useSWR("/api/notion/articles", fetcher);
    console.log(data?.results)
    return <>
        <Box sx={{
            pt: '158px',
            "@media (max-width: 639px)": {
                pt: '110px',
            },
        }}></Box>
        {/* 섹션 */}
        <Box sx={{
            position: 'relative',
            width: '100%',
            p: '40px 0',
            "@media (max-width: 639px)": {
                p: '140px 0 100px',
            },
        }}>
            {/* 공통 컨테이너 */}
            <Box sx={{
                maxWidth: '1140px',
                margin: '0 auto',
                width: '100%',
                minHeight: '100vh',
            }}>
                {/* 컨테이너 */}
                <Box sx={{
                    width: '92%',
                    margin: '0 auto',
                    maxWidth: `calc(100% - var(--padding-container-base))`,
                }}>
                    {/* 카테고리 */}
                    <Box sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        scrollbarWidth: 'none',
                        mb: 7.5,
                        "@media (max-width: 639px)": {
                            mb: 5,
                        },
                    }}>
                        {ARTICLE_CATEGORIES.map((cat) => {
                            return <CategoryItem
                                key={cat.id}
                                onClick={() => setCategory(cat.value)}
                                selected={category === cat.value}
                                label={cat.label} />
                        })}
                    </Box>
                    {/* 아티클 리스트 */}
                    <Box sx={{
                        mb: 11,
                        "@media (max-width: 639px)": {
                            mb: 5,
                        },
                    }}>
                        {data?.results && data.results.map((item: any, index: any) => {
                            return <ArticleItem key={index} item={item} />
                        })}
                    </Box>
                </Box>
            </Box>
        </Box >
    </>
}

function CategoryItem({ selected, label, onClick }: { selected: boolean, label: string, onClick: () => void }) {
    return <ButtonBase
        onClick={onClick}
        sx={{
            fontSize: '32px',
            mr: 3.75,
            fontWeight: 600,
            lineHeight: 1.4,
            color: selected ? `var(--adaptiveGrey800)` : `var(--adaptiveGrey300)`,
            "@media (max-width: 639px)": {
                fontSize: '22px',
                mr: 2.5,
            },
        }}>
        {label}
    </ButtonBase >
}

function ArticleItem({ item }: { item: any }) {
    return <Link href={`/article/${item.id}`} passHref legacyBehavior>
        <ButtonBase
            disableRipple
            sx={{
                display: 'block',
                width: '100%',
                mt: 5,
                "&:hover .title": {
                    color: "var(--adaptiveBlue500)",
                },
                "img": {
                    transition: "all 0.2s ease-in-out 0s",
                },
                "&:hover img": {
                    transform: "scale(1.08)"
                },
            }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Box sx={{
                    alignItems: "flex-start",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "100%",
                    mr: "100px", // margin-right
                    overflowWrap: "anywhere",
                    "@media (max-width: 767px)": {
                        mr: 2.5,
                    },
                }}>
                    <Typography sx={{
                        fontSize: 15,
                        fontWeight: 400,
                        lineHeight: 1.4,
                        color: "var(--adaptiveGrey500)",
                        mb: "10px", // margin-bottom
                        "@media (max-width: 767px)": {
                            fontSize: 13,
                        },
                        "@media (max-width: 639px)": {
                            mb: '6px'
                        }
                    }}>
                        {getCategoryLabel(item.category)}
                    </Typography>
                    <Typography
                        className="title"
                        sx={{
                            fontSize: "24px",
                            fontWeight: 600,
                            lineHeight: 1.4,
                            color: "var(--adaptiveGrey800)",
                            mb: "10px",
                            transition: "all 0.2s ease-in-out 0s",
                            "@media (max-width: 767px)": {
                                fontSize: 16,
                                fontWeight: 500,
                            }
                        }}>
                        {item.title}
                    </Typography>
                    <Typography
                        sx={{
                            width: "100%",
                            color: "var(--adaptiveGrey700)",
                            fontSize: "17px",
                            fontWeight: 300,
                            lineHeight: "27px",
                            mb: "10px",
                            "@media (max-width: 767px)": {
                                display: 'none'
                            }
                        }}
                    >
                        {item.subtitle}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "15px",
                            fontWeight: 400,
                            lineHeight: 1.4,
                            color: "var(--adaptiveGrey500)",
                            "@media (max-width: 767px)": {
                                fontSize: 13,
                            }
                        }}
                    >
                        {item.createdAt.replaceAll('-', '.')}
                    </Typography>
                </Box>
                <Box sx={{
                    minWidth: '270px',
                    "@media (max-width: 767px)": {
                        minWidth: '100px',
                    }
                }}>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: 0,
                            pt: "67.5%",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <Box
                                className='img'
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    transform: "translateZ(0)",
                                    transition: "all 0.2s ease-in-out 0s",
                                    "@media (max-width: 767px)": {
                                        borderRadius: '12px'
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transform: "translateZ(0)",
                                        transition: 'all 0.2s ease 0s',
                                    }}
                                />
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
                                        m: 0,
                                        p: 0,
                                        position: "absolute",
                                        inset: 0,
                                    }}
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt="이미지"
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
                </Box>
            </Box>
        </ButtonBase></Link >
}