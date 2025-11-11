import { createTheme } from "@mui/material";
import { alpha } from "@mui/material";

export const baseTheme = createTheme({
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: `'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
        button: {
            textTransform: "none",
            fontWeight: 500,
        },
    },
    components: {
        MuiIcon: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.icon.primary,
                }),
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: ({ theme }) => ({
                    wordBreak: "keep-all",
                    color: theme.palette.text.primary,
                }),
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: "transparent",
                    color: theme.palette.text.primary,
                }),
            },
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    textAlign: "left",
                    "& *": {
                        cursor: "pointer !important",
                    },
                },
            },
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: false,
            },
            styleOverrides: {
                root: {
                    maxWidth: 1200,
                    transition: "all 0.35s ease",
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderColor: theme.palette.divider,
                }),
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: alpha(theme.palette.common.black, 0.8),
                }),
            },
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    fontWeight: 700,
                    borderRadius: 8,
                    minHeight: 48,
                    fontSize: 14,
                    lineHeight: "20px",
                    color: theme.palette.text.primary,
                    "&.MuiButton-containedPrimary.Mui-disabled": {
                        backgroundColor: theme.palette.action.disabledBackground,
                        color: theme.palette.action.disabled,
                    },
                }),
            },
        },
        MuiChip: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: 8,
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.background.paper,
                }),
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    width: 56,
                    height: 56,
                    color: theme.palette.icon?.primary ?? theme.palette.text.primary,
                    "&:hover": {
                        backgroundColor: "transparent",
                        color: theme.palette.icon?.hover ?? theme.palette.text.secondary,
                    },
                }),
            },
        },
    },
});
