import React from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import { NavermapsProvider } from 'react-naver-maps';

const Map = () => {
  const navermaps = useNavermaps();

  return (
    <NaverMap
      defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
      defaultZoom={15}
    >
      <Marker
        defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
      />
    </NaverMap>
  );
};

const MapComponent = () => {
  return (
    <MapDiv
      style={{
        width: '100%',
        height: '911px',
      }}
    >
      <Map />
    </MapDiv>
  );
};

const WrappedMap = () => {
  return (
    <NavermapsProvider ncpClientId={process.env.REACT_APP_NAVER_MAP_CLIENT_ID}>
      <MapComponent />
    </NavermapsProvider>
  );
};

export default WrappedMap;
