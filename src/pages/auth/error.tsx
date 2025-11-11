import { useRouter } from "next/router";
import { Box, Typography, ButtonBase } from "@mui/material";
import InAppGuard from "@/src/components/common/InAppGuard";

export default function AuthErrorPage() {
  const router = useRouter();
  const reason = router.query.reason as string;

  const message =
    reason === "unauthorized_domain"
      ? "카카오헬스케어 이메일(@kakaohealthcare.com)만 로그인할 수 있습니다."
      : "로그인 중 오류가 발생했습니다.";

  return (
    <InAppGuard>
      <Box
        className="css-7smspc"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          bgcolor: "var(--adaptiveBackground)",
          color: "var(--adaptiveTextPrimary)",
          transition: "background-color 0.3s, color 0.3s",
        }}
      >
        {/* 배경 */}
        <Box
          className="css-1xquaou"
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
          className="css-6h2e1z"
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
            className="css-l0c4py"
            sx={{
              display: "flex",
              flex: "1 1 0%",
              justifyContent: "unset",
              alignItems: "stretch",
              flexDirection: "column",
              "@media screen and (min-width:1024px)": {
                justifyContent: "center",
              },
            }}
          >
            <Box
              className="css-12qspw8"
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "stretch",
                flexDirection: "column",
                "@media screen and (min-width:1024px)": {
                  height: "auto",
                  alignItems: "center",
                },
              }}
            >
              <Box
                className="css-txc7jv"
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
                  "@media screen and (min-width:640px)": {
                    maxWidth: 375,
                    p: 0,
                  },
                  "@media screen and (min-width:1024px)": {
                    maxWidth: 471,
                    p: 5,
                    borderRadius: 2,
                  },
                  transition: "background-color 0.3s",
                }}
              >
                <Box
                  className="css-1lzr97v"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "stretch",
                    position: "relative",
                    height: "100%",
                    gap: "28px",
                  }}
                >
                  {/* 헤더 */}
                  <Box
                    className="css-s3q66g"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      alignItems: "stretch",
                      pt: 2.5,
                      "@media screen and (min-width:1024px)": {
                        justifyContent: "flex-start",
                      },
                    }}
                  >
                    <Box
                      className="css-1902rht"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: "25px",
                      }}
                    >
                      <span className="css-1v4yuwi"></span>
                    </Box>
                    <Typography
                      className="css-uah1m1"
                      sx={{
                        textAlign: "center",
                        color: "var(--adaptiveTextPrimary)",
                        WebkitTextFillColor: "var(--adaptiveTextPrimary)",
                        fontSize: "24px", // 1.5rem → px
                        lineHeight: "32px", // 2rem → px
                        letterSpacing: "-0.48px",
                        fontWeight: 700,
                        transition: "color 0.3s",
                      }}
                    >
                      로그인 오류
                    </Typography>
                  </Box>

                  {/* 본문 (버튼 + 하단 안내) */}
                  <Box
                    className="css-u8vxgc"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                      gap: "28px",
                    }}
                  >
                    <Box
                      className="css-b0ku79"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                        gap: "12px",
                      }}
                    >
                      {/* 버튼 */}
                      <ButtonBase
                        onClick={() => router.push("/auth/login")}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          p: "14px 13px",
                          border: "1px solid var(--adaptiveDivider)",
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
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "var(--adaptiveTextPrimary)",
                            fontSize: "16px", // 1rem → px
                            fontWeight: 700,
                            letterSpacing: "-0.24px",
                            transition: "color 0.3s",
                          }}
                        >
                          로그인으로 돌아가기
                        </Typography>
                      </ButtonBase>

                      {/* 안내문 */}
                      <Box
                        className="css-f8u8ds"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          boxSizing: "border-box",
                          position: "relative",
                          flex: "0 1 0%",
                          mt: 3,
                        }}
                      >
                        <Typography
                          className="css-1o15h3i"
                          sx={{
                            textAlign: "center",
                            color: "var(--adaptiveTextSecondary)",
                            WebkitTextFillColor: "var(--adaptiveTextSecondary)",
                            fontSize: "14px", // 0.875rem → px
                            lineHeight: "18px", // 1.125rem → px
                            letterSpacing: "-0.168px",
                            fontWeight: 400,
                            transition: "color 0.3s",
                          }}
                        >
                          {message}
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
