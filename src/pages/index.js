import SearchSidebar from '@/components/SearchSidebar';
import SearchPlaceSidebar from '@/components/searchPlaceSidebar';
import { styled } from 'styled-components';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import dynamic from 'next/dynamic';
import NavSidebar from '@/components/NavSidebar';
import { useRouter } from 'next/router';
const AuthModal = dynamic(() => import('@/components/AuthModal'), { ssr: false });
const MainMap = dynamic(()=> import('@/components/MainMap'), { ssr: false });

export default function Home() {
    const [AuthPopupShowing, setAuthPopupShowing] = useState(false);
    const isLogined = true;
    const r = useRouter();
    const here = r.route;
    
    return (
        <MainFlex>
            {AuthPopupShowing ? createPortal(<AuthModal setState={setAuthPopupShowing}/>,document.body) : null}
            {isLogined ? <NavSidebar/> : null}
            {here==='/' && <SearchSidebar/>}
            {here==='/search' && <SearchPlaceSidebar/>}
            <MainMap />
        </MainFlex>
    )
}
    
const MainFlex = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`