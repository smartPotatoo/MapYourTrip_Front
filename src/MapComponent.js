import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'

const MapComponent = () => {
  const navermaps = useNavermaps();

  return (
    <div>
      <MapDiv style = {{width: '600px', height: '600px'}}>
        <NaverMap
          defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
          defaultZoom={15}
        >
          <Marker
            defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
          />
        </NaverMap>
      </MapDiv>
    </div>
  );
};

export default MapComponent;
