import { signIn, getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import InAppGuard from "@/src/components/common/InAppGuard";

export default function LoginPage() {
  const router = useRouter();
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      if (session) router.replace("/home");
    });
  }, [router]);

  const handleGoogleLogin = () => {
    if (isSigningIn) return;
    setIsSigningIn(true);

    const ua = navigator.userAgent.toLowerCase();
    const isInApp = /kakaotalk|instagram|fbav|line|naver|daum|whale/i.test(ua);
    const isAndroid = /android/i.test(ua);
    const isIOS = /iphone|ipad|ipod/i.test(ua);

    if (isInApp) {
      alert(
        "인앱 브라우저에서는 로그인이 원활하지 않습니다.\nSafari 또는 Chrome으로 다시 열어주세요."
      );
      if (isAndroid) {
        window.location.href =
          "intent://" +
          window.location.host +
          "/auth/login#Intent;scheme=https;package=com.android.chrome;end";
      } else if (isIOS) {
        window.location.href = "https://" + window.location.host + "/auth/login";
      }
      setIsSigningIn(false);
      return;
    }

    signIn("google", { callbackUrl: "/home" });
  };

  return (
    <InAppGuard>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // ✅ 오타 수정 (alignTtems → alignItems)
          justifyContent: "flex-start",
          bgcolor: "var(--adaptiveBackground)",
          color: "var(--adaptiveGrey900)",
          transition: "background-color 0.3s, color 0.3s",
        }}
      >
        {/* 배경 */}
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            width: "100vw",
            alignItems: "stretch",
            flexDirection: "column",
            bgcolor: "var(--adaptiveBackground)",
          }}
        />

        {/* 본문 */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "stretch",
            flexDirection: "column",
            position: "absolute",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flex: "1 1 0%",
              justifyContent: "unset",
              alignItems: "stretch",
              flexDirection: "column",
              "@media (min-width:1024px)": {
                justifyContent: "center",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "unset",
                alignItems: "stretch",
                flexDirection: "column",
                "@media (min-width:1024px)": {
                  height: "auto",
                  alignItems: "center",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  maxWidth: "100%",
                  ml: "auto",
                  mr: "auto",
                  mb: 2,
                  p: 2.5,
                  bgcolor: "var(--adaptiveLayeredBackground)",
                  borderRadius: 0,
                  "@media (min-width:640px)": {
                    maxWidth: 375,
                    p: 0,
                  },
                  "@media (min-width:1024px)": {
                    maxWidth: 471,
                    p: 5,
                    borderRadius: 2,
                  },
                  transition: "background-color 0.3s",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "stretch",
                    height: "100%",
                    gap: "28px",
                    pt: 0,
                    pb: 0,
                    "@media (min-width:1024px)": {
                      pt: 4,
                      pb: 4,
                    },
                  }}
                >
                  {/* 헤더 */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "stretch",
                      pt: 2.5,
                      "@media (min-width:1024px)": {
                        justifyContent: "flex-start",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: "25px",
                      }}
                    >
                      <span className="css-1v4yuwi"></span>
                    </Box>

                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "var(--adaptiveGrey900)",
                        WebkitTextFillColor: "var(--adaptiveGrey900)",
                        fontSize: "24px", // ✅ rem → px
                        lineHeight: "32px", // ✅ rem → px
                        letterSpacing: "-0.48px",
                        fontWeight: 700,
                        transition: "color 0.3s",
                      }}
                    >
                      로그인
                    </Typography>
                  </Box>

                  {/* 본문 */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                      gap: "28px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                        gap: "12px",
                      }}
                    >
                      {/* Google 로그인 버튼 */}
                      <ButtonBase
                        onClick={handleGoogleLogin}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          p: "14px 13px",
                          border: "1px solid var(--adaptiveGrey200)",
                          borderRadius: "4px",
                          backgroundColor: "var(--adaptiveFloatBackground)",
                          transition:
                            "opacity 200ms cubic-bezier(0.5, 1, 0.89, 1), background-color 0.3s",
                          "&:hover": {
                            opacity: 0.85,
                            backgroundColor: "var(--adaptiveGrey100)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <Image
                            src="/images/logo/google.png"
                            width={20}
                            height={20}
                            alt="Google logo"
                          />
                          <Typography
                            sx={{
                              color: "var(--adaptiveGrey900)",
                              fontSize: "16px", // ✅ rem → px
                              lineHeight: "20px",
                              fontWeight: 700,
                              letterSpacing: "-0.24px",
                            }}
                          >
                            Google 계정으로 로그인
                          </Typography>
                        </Box>
                      </ButtonBase>

                      {/* 안내문 */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mt: 3,
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "var(--adaptiveGrey600)",
                            WebkitTextFillColor: "var(--adaptiveGrey600)",
                            fontSize: "14px", // ✅ rem → px
                            lineHeight: "18px",
                            letterSpacing: "-0.168px",
                            fontWeight: 400,
                          }}
                        >
                          본 서비스는 @kakaohealthcare.com 계정만<br />
                          사용 가능합니다.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </InAppGuard>
  );
}
