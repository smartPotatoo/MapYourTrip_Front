import { Container as NaverMap, Marker, useNavermaps } from 'react-naver-maps'

const MapComponent = () => {
  const navermaps = useNavermaps();

  return (
    <div>
      <h1>네이버지도</h1>
      <NaverMap
        defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
        defaultZoom={15}
      >
        <Marker
          defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
        />
      </NaverMap>
    </div>
  );
};

export default MapComponent;
