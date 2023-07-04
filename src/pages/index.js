import { Inter } from 'next/font/google'
import { Map } from 'react-kakao-maps-sdk'
import useCurrentLocation from '@/hooks/useLatLng';
import SearchSidebar from '@/components/SearchSidebar';
import { styled } from 'styled-components';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const curLoc = useCurrentLocation()

  return (
    <MainFlex>
      <SearchSidebar/>
      <Map
        style={{width:"100%", height:"100vh"}}
        center={{ lat: curLoc.latitude, lng: curLoc.longitude }}
      />
    </MainFlex>
  )
}

const MainFlex = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`