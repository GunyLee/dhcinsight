import { Box, Typography, ButtonBase } from "@mui/material";

export default function InAppPage() {
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "var(--adaptiveBackground)",
        p: 2,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "var(--adaptiveLayeredBackground)",
          borderRadius: { xs: 0, md: 2 },
          boxShadow: { md: "0 4px 20px rgba(0, 0, 0, 0.08)" },
          width: "100%",
          maxWidth: { xs: 375, md: 471 },
          p: { xs: 3, md: 5 },
          textAlign: "center",
          transition: "background-color 0.3s ease",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px", // 1.5rem → px
            lineHeight: "32px", // 2rem → px
            fontWeight: 700,
            color: "var(--adaptiveTextPrimary)", // ✅ 표준 컬러 변수
            mb: 2,
            transition: "color 0.3s ease",
          }}
        >
          ⚠️ Google 로그인을 위해
          <br />
          Chrome 또는 Safari에서 열어주세요
        </Typography>

        <Typography
          sx={{
            fontSize: "14px", // 0.875rem → px
            lineHeight: "20px", // 1.25rem → px
            color: "var(--adaptiveTextSecondary)", // ✅ 표준 컬러 변수
            mb: 4,
            transition: "color 0.3s ease",
          }}
        >
          오른쪽 상단 메뉴 →{" "}
          <b style={{ color: "var(--adaptiveTextPrimary)" }}>
            "다른 브라우저로 열기"
          </b>{" "}
          를 선택하면 정상 이용이 가능합니다.
        </Typography>

        <ButtonBase
          onClick={() =>
          (window.location.href =
            "intent://" +
            currentUrl.replace(/^https?:\/\//, "") +
            "#Intent;scheme=https;package=com.android.chrome;end")
          }
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            p: "14px 13px",
            border: "1px solid var(--adaptiveDivider)", // ✅ 표준화
            borderRadius: "4px",
            backgroundColor: "var(--adaptiveFloatBackground)",
            transition: "background-color 0.3s ease, color 0.3s ease",
            "&:hover": {
              backgroundColor: "var(--adaptiveGrey100)",
              opacity: 0.9,
            },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "var(--adaptiveTextPrimary)", // ✅ 표준 컬러 변수
              fontSize: "16px", // 1rem → px
              fontWeight: 700,
              letterSpacing: "-0.24px",
              transition: "color 0.3s ease",
            }}
          >
            Chrome으로 열기
          </Typography>
        </ButtonBase>
      </Box>
    </Box>
  );
}
