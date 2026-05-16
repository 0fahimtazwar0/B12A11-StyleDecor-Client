import { GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import bangladeshBoundary from "../../data/geoBoundaries-BGD-ADM2_simplified.json";
import serviceCoverage from "../../data/serviceCoverage.json";
import L from "leaflet";
import { renderToString } from "react-dom/server";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FiMinus, FiPlus, FiZoomIn } from "react-icons/fi";
import { RiZoomInFill } from "react-icons/ri";
import { TbRefresh, TbZoomFilled } from "react-icons/tb";

const bangladeshCoords = [23.6943117, 90.344352];
const bangladeshMask = bangladeshBoundary.features.flatMap((feature) => {
  const { type, coordinates } = feature.geometry;

  if (type === "MultiPolygon") {
    return coordinates.map((polygon) => polygon[0]);
  } else if (type === "Polygon") {
    return [coordinates[0]];
  }
  return [];
});

const ServiceCoverage = () => {
  const bangladeshBounds = L.latLngBounds([20.5, 88.0], [26.7, 92.7]).pad(0.2);

  const worldMask = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        // whole world
        [
          [-180, -90],
          [180, -90],
          [180, 90],
          [-180, 90],
          [-180, -90],
        ],

        // bangladesh hole
        ...bangladeshMask,
      ],
    },
  };

  const [zoom, setZoom] = useState(window.innerWidth < 768 ? 7 : 8);

  useEffect(() => {
    const handleResize = () => {
      setZoom(window.innerWidth < 768 ? 7 : 8);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [theme, setTheme] = useState("light");
  const observer = new MutationObserver(() => {
    setTheme(document.documentElement.getAttribute("data-theme"));
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  const iconHTML = renderToString(
    <div className='relative'>
      <div className='absolute inset-0 bg-white opacity-20 blur-sm -z-40'></div>
      <MdLocationPin size={30} className='text-primary' />
    </div>,
  );

  const customIcon = L.divIcon({
    html: iconHTML,
    className: "",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -29],
  });

  const mapRef = useRef(null);

  const LocationZoom = (center) => {
    mapRef.current.closePopup();

    mapRef.current.flyTo(
      [center.latitude, center.longitude], // lat lng
      15, // zoom
      {
        duration: 2,
      },
    );
  };

  function MapControls() {
    const map = useMap();

    const zoomIn = () => {
      map.zoomIn();
    };

    const zoomOut = () => {
      map.zoomOut();
    };

    const resetMap = () => {
      map.flyTo(
        bangladeshCoords, // default center
        zoom, // default zoom
        {
          duration: 1.5,
        },
      );
    };

    const controlsRef = useRef(null);

    useEffect(() => {
      if (controlsRef.current) {
        L.DomEvent.disableClickPropagation(controlsRef.current);
        L.DomEvent.disableScrollPropagation(controlsRef.current);
      }
    }, []);

    return (
      <div className='absolute top-4 left-4 z-400' ref={controlsRef}>
        <div className='join join-vertical shadow-lg'>
          <button
            onClick={zoomIn}
            className='join-item btn btn-sm text-base bg-base-100 hover:bg-base-300 active:bg-base-300 transition-transform border-primary'
          >
            <FiPlus size={18} />
          </button>

          <button
            onClick={zoomOut}
            className='join-item btn btn-sm text-base bg-base-100 hover:bg-base-300 active:bg-base-300 transition-transform border-primary'
          >
            <FiMinus size={18} />
          </button>

          <button
            onClick={resetMap}
            className='join-item btn btn-sm text-base bg-base-100 hover:bg-base-300 active:bg-base-300 transition-transform border-primary'
          >
            <TbRefresh size={18} />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className='section-heading'>Service Coverage Map</h1>

      <div className='flex'>
        <MapContainer
          center={bangladeshCoords}
          zoom={zoom}
          minZoom={zoom - 1}
          scrollWheelZoom={false}
          maxBounds={bangladeshBounds}
          className='w-full h-150 md:h-200 rounded-2xl border-4 border-primary'
          // maxBoundsViscosity={1}
          ref={mapRef}
        >
          <TileLayer
            url={
              theme == "light"
                ? "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg"
                : "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg"
            }
          />
          <GeoJSON
            data={worldMask}
            style={{
              fillColor: "black",
              fillOpacity: 0.5,
              stroke: false,
            }}
          />
          {serviceCoverage.map((center, index) => (
            <Marker
              key={index}
              position={[center.latitude, center.longitude]}
              icon={customIcon}
            >
              <Popup closeButton={false}>
                <div className='flex flex-col gap-2 max-w-[30vw] max-sm:text-[10px]'>
                  <div className='flex justify-between'>
                    <div className='flex items-center gap-2'>
                      {center.status == "active" ? (
                        <div
                          aria-label='success'
                          className='status status-success'
                        ></div>
                      ) : (
                        <div
                          aria-label='error'
                          className='status status-error'
                        ></div>
                      )}
                      <span>{center.district}</span>
                    </div>
                    <button
                      className='btn btn-xs sm:btn-sm btn-circle btn-primary text-sm sm:text-base'
                      onClick={() => LocationZoom(center)}
                    >
                      <TbZoomFilled className='text-white' />
                    </button>
                  </div>
                  <div className='flex flex-col text-center'>
                    <b>Covered Areas:</b>
                    {center.covered_area.join(", ")}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
          <MapControls />
        </MapContainer>
      </div>
    </div>
  );
};

export default ServiceCoverage;
