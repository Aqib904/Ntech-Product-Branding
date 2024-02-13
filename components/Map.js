import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Col, Container, Row, Modal, ModalBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetMapVideos } from "../store/action/mapAction";
import { FaMapPin } from "react-icons/fa";
import { BiStar } from "react-icons/bi"; // Import a Bootstrap icon

const mapStyles = {
  width: "100%",
  height: "60vh",
};

const mapCenter = { lat: 0, lng: 0 };
const customMapOptions = {
  gestureHandling: "none", // Disables pan and zoom gestures
  zoomControl: false, // Hides the default zoom control
};

function YourMapComponent() {
  const { mapVideos } = useSelector((state) => state.map);
  const dispatch = useDispatch();
  const [selectedMarker, setSelectedMarker] = useState(null);
  console.log(mapVideos, "mapvideos");
  const faMapPinIcon = <FaMapPin />;
  const mapPinPath = faMapPinIcon.props.children;
  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const closeModal = () => {
    setSelectedMarker(null);
  };
  useEffect(() => {
    dispatch(GetMapVideos());
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <LoadScript googleMapsApiKey="AIzaSyCzY9tZOG_WWaevgILldDIPhwEeMfMY0zk">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={1}
              center={mapCenter}
              options={{ ...customMapOptions, mapTypeId: "satellite" }}
            >
              {mapVideos
                ?.filter((marker) => marker.UserDetail.Category === "Customers")
                ?.map((filteredMarker) => (
                  <Marker
                    key={filteredMarker.id}
                    position={filteredMarker.position}
                    onClick={() => handleMarkerClick(filteredMarker)}
                    icon={{
                      url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30" fill="none">
                        <circle cx="10" cy="10" r="9" fill="#F4E110" stroke="black" stroke-width="2"/>
                        <line x1="10" y1="19" x2="10" y2="30" stroke="black" stroke-width="2"/>
                        </svg>
                      `
                      )}`,
                    }}
                  />
                ))}
            </GoogleMap>
          </LoadScript>
        </Col>
      </Row>
      <Modal isOpen={selectedMarker !== null} toggle={closeModal}>
        <ModalBody>
          <iframe
            title="Video"
            width="100%"
            height="315"
            src={selectedMarker ? selectedMarker?.UserDetail?.VideoLink : ""}
            frameBorder="0"
            allowFullScreen
            className="video"
          ></iframe>
        </ModalBody>
      </Modal>
    </Container>
  );
}

export default YourMapComponent;
