import Box from '@mui/material/Box';
import React, { ReactElement } from 'react';

// eslint-disable-next-line no-undef
interface MapProps extends google.maps.MapOptions {
  sx: { [key: string]: string };
  children?: ReactElement;
// eslint-disable-next-line no-undef
  center: google.maps.LatLngLiteral;
  zoom: number;
// eslint-disable-next-line no-unused-vars,no-undef
  onClick?: (e: google.maps.MapMouseEvent) => void;
}

const GoogleMap: React.FC<MapProps> = ({
  children,
  sx,
  center,
  zoom,
  onClick,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  // eslint-disable-next-line no-undef
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center,
        zoom,
        disableDefaultUI: true,
        styles: [
          {
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }],
          },
          {
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#f5f5f5' }],
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#bdbdbd' }],
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }],
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#dadada' }],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }],
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }],
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }],
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#c9c9c9' }],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }],
          },
        ],
      }));
    }
  }, [ref, map, center, zoom]);

  React.useEffect(() => {
    if (map) {
      if (onClick)
        map.addListener('click', onClick);
    }
  }, [map, onClick]);

  return (
    <>
      <Box ref={ref} sx={sx} id="map" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
        // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
        return null;
      })}
    </>
  );
};

export default GoogleMap;
