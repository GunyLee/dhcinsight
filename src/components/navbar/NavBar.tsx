import { useRouter } from "next/router";
import User from "../common/User";
import { Box, ButtonBase, Typography, Slide, LinearProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeToggleContext } from "@/src/components/common/ThemeToggleProvider";

export default function NavBar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { themeMode, toggleTheme } = useContext(ThemeToggleContext);

  const isArticlePage = router.pathname.startsWith("/article/");

  // 👇 추가된 부분
  const [ready, setReady] = useState(false);

useEffect(() => {
  let lastY = 0;

  const handleScroll = () => {
    const y = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (y / Math.max(docHeight, 1)) * 100;

    // ✅ 모든 페이지에서 border/background 전환용
    setScrolled(y > 0);

    // ✅ 상세페이지일 때만 showHeader / progress 계산
    if (isArticlePage) {
      setScrollProgress(progress);

      if (y < 50) {
        setShowHeader(false);
      } else if (y > lastY) {
        setShowHeader(true);
      }
      lastY = y;

      if (!ready) setReady(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [isArticlePage, ready]);


  // 기존 홈, 로그인 화면에서는 표시 안함
  if (router.pathname === "/" || router.pathname.startsWith("/auth")) return null;

  const HeaderContent = (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        borderBottom: scrolled
          ? "1px solid var(--adaptiveDivider)"
          : "1px solid transparent",
        backgroundColor: scrolled
          ? "var(--adaptiveBackground)"
          : "transparent",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
        zIndex: 9999,
        height: 60,
        backdropFilter: isArticlePage ? "blur(10px)" : "none",
      }}
    >
      {/* 헤더 컨테이너 */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          m: "auto",
          maxWidth: "1140px",
        }}
      >
        <Box
          sx={{
            width: "92%",
            height: "100%",
            display: "flex",
            mx: "auto",
            maxWidth: `calc(100% - var(--padding-container-base, 32px))`,
          }}
        >
          {/* 로고 */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 3,
              minHeight: 60,
            }}
          >
            <Link href="/home" passHref legacyBehavior>
              <ButtonBase
                disableRipple
                component="a"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "var(--adaptiveTextPrimary)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    lineHeight: "20px",
                    fontWeight: 700,
                    fontFamily: `'Kakao', 'Pretendard', sans-serif`,
                    color: "var(--adaptiveTextPrimary)",
                    "& span": {
                      fontWeight: 400,
                      ml: 0.5,
                      color: "var(--adaptiveTextSecondary)",
                    },
                  }}
                >
                  DHC<span>INSIGHT</span>
                </Typography>
              </ButtonBase>
            </Link>
          </Box>

          {/* 우측 메뉴 */}
          <Box sx={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 1,
                "@media (max-width: 639px)": {
                  px: 0,
                  mr: -1,
                },
              }}
            >
              <ButtonBase
                onClick={() => alert("검색 미구현")}
                sx={{
                  height: "100%",
                  p: 1,
                  color:
                    themeMode === "light"
                      ? "var(--adaptiveGrey600)"
                      : "var(--adaptiveGrey300)",
                }}
              >
                <SearchIcon sx={{ width: 24, height: 24 }} />
              </ButtonBase>

              <ButtonBase
                onClick={toggleTheme}
                sx={{
                  height: "100%",
                  p: 1,
                  color:
                    themeMode === "light"
                      ? "var(--adaptiveGrey700)"
                      : "var(--adaptiveGrey300)",
                }}
              >
                {themeMode === "light" ? (
                  <LightModeIcon sx={{ width: 24, height: 24 }} />
                ) : (
                  <DarkModeIcon sx={{ width: 24, height: 24 }} />
                )}
              </ButtonBase>

              <User />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* 스크롤 진행 인디케이터 */}
      {isArticlePage && (
        <LinearProgress
          variant="determinate"
          value={scrollProgress}
          sx={{
            height: 2,
            backgroundColor: "transparent",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "var(--adaptiveGrey900) !important",
              transition: 'none'
            },
            zIndex: 9999,
          }}
        />
      )}
    </Box>
  );

  // 📍 상세페이지면 Slide 애니메이션으로 show/hide
  return isArticlePage ? (
    <Slide appear={false} direction="down" in={ready && showHeader}
      timeout={{ enter: 300, exit: 300 }}
    >
      {HeaderContent}
    </Slide>
  ) : (
    HeaderContent
  );
}
