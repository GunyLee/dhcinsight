import { Box, ButtonBase, Menu, MenuItem, Typography } from "@mui/material"
import { grey } from "@mui/material/colors";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function User() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const loading = status === "loading";
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        handleCloseMenu();
        console.log("로그아웃 실행");
        signOut({ callbackUrl: "/auth/login" })
    };
    return <>
        <ButtonBase
            disableRipple
            onClick={handleOpenMenu}
            sx={{
                alignItems: 'center',
                p: 1,
                "@media (max-width: 639px)": {
                    p: 0.75
                }
            }}>
            {/* 썸네일 */}
            <Box
                sx={{
                    position: 'relative',
                    borderRadius: 40,
                    width: 24,
                    height: 24,
                    overflow: 'hidden',
                    bgcolor: grey[100]
                }}>
                <Box>
                    {session?.user?.image && session?.user?.image !== "" ?
                        <Image
                            src={session?.user?.image ? `${session?.user?.image}` : ""}
                            alt=""
                            width={20}
                            height={20}
                            unoptimized
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                        : <></>
                    }
                </Box>
            </Box>
        </ButtonBase>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            onClick={handleCloseMenu}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            sx={{
                '.MuiPaper-root': {
                    borderRadius: 1,
                    ' .MuiList-root': {
                        pt: 1,
                        pb: 1,
                    }
                }
            }}
        >
            <MenuItem onClick={handleLogout} sx={{
                borderRadius: 1,
                height: `32px !important`,
                minHeight: `32px !important`,
            }}>
                <Typography sx={{
                    fontSize: 14,
                    lineHeight: '20px',
                }}>로그아웃</Typography>
            </MenuItem>
        </Menu>
    </>
}