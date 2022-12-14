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
        // @ts-ignore
          return React.cloneElement(child, { map });
        }
        return null;
      })}
    </>
  );
};

export default GoogleMap;
