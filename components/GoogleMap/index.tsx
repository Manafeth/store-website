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
        disableDefaultUI: false,
      }));
    }
  }, [ref, map, center, zoom]);

  React.useEffect(() => {
    if (map) {
      if (onClick)
        map.addListener('click', onClick);

      let locationButton;
      if (document.getElementsByClassName("custom-map-control-button").length < 1)
        locationButton = document.createElement("button");

      let infoWindow: google.maps.InfoWindow;
      if (locationButton) {
        locationButton.classList.add("custom-map-control-button");
        locationButton.textContent = "Current Location";
        locationButton.style.background = 'white';
        locationButton.style.border = 'none';
        locationButton.style.cursor = 'pointer';
        locationButton.style.boxShadow = '0px 0px 5px #c0bdbd';
        locationButton.style.padding = '12px';
        locationButton.style.borderRadius = '3px';
        locationButton.style.marginTop = '10px';

        map?.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);


        locationButton?.addEventListener("click", () => {
          // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position: GeolocationPosition) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };

                infoWindow?.setPosition(pos);
                infoWindow?.setContent("Location found.");
                infoWindow?.open(map);
                map?.setCenter(pos);
              },
              () => {
                handleLocationError(true, infoWindow, map?.getCenter()!);
              }
            );
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map?.getCenter()!);
          }
        });
        // }
      }

    }
  }, [map, onClick]);

  function handleLocationError(
    browserHasGeolocation: boolean,
    infoWindow: google.maps.InfoWindow,
    pos: google.maps.LatLng
  ) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }

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
