import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function InAppGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(false);
    const [isInApp, setIsInApp] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();
        const inApp = /kakaotalk|instagram|fbav|line|naver|daum/i.test(ua);
        setIsInApp(inApp);
        setIsChecked(true);

        if (inApp) {
            // ✅ 인앱이면 /inapp 페이지로 리다이렉트
            router.replace("/auth/inapp");
        }
    }, [router]);

    // 아직 체크 전이면 아무것도 렌더링 안 함 (깜빡임 방지)
    if (!isChecked) return null;

    // 인앱이 아니면 원래 콘텐츠 보여줌
    if (!isInApp) return <>{children}</>;

    // 리다이렉트 직전엔 아무것도 안 보여줌
    return null;
}
