'use client'

import React, { useState, useCallback, useRef, useEffect } from "react";
import { LoadScript, GoogleMap, Marker, StandaloneSearchBox } from "@react-google-maps/api";

// Type for the props received from the parent component
type AddressInputProps = {
  setAddress: (address: string) => void; // Function to set the address in the parent component
};

const AddressInput: React.FC<AddressInputProps> = ({ setAddress }) => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [address, setAddressState] = useState<string>("");
  
  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null); // useRef for the search box

  // Handle when user selects an address from the autocomplete search box
  const handleSelect = useCallback((places: google.maps.places.PlaceResult[]) => {
    const place = places[0]; // We assume that the user selects the first result
    if (place.geometry) {
      // const { lat, lng } = place.geometry.location;
      // setLocation({ lat: lat(), lng: lng() });
      const selectedAddress = place.formatted_address || '';
      setAddressState(selectedAddress); // Update local address state
      setAddress(selectedAddress); // Pass address to parent
    }
  }, [setAddress]);

  // Handle when the user clicks on the map to set the marker
  const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();
    if (lat && lng) {
      setLocation({ lat, lng });

      // Use the lat/lng to get the address via reverse geocoding
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: { lat, lng } }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results?.[0]) {
          const selectedAddress = results[0].formatted_address || '';
          setAddressState(selectedAddress); // Update local address state
          setAddress(selectedAddress); // Pass address to parent
        }
      });
    }
  }, [setAddress]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!} libraries={["places"]}>
      <div className="w-[100%]  lg:w-[600px] h-[400px]">
        <GoogleMap
          id="address-map"
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={location || { lat: 47.8864, lng: 106.9057 }} // Default to San Francisco
          zoom={15}
          onClick={handleMapClick} // Handle map clicks to set the marker
        >
          {location && <Marker position={location} />} {/* Show marker at selected location */}
        </GoogleMap>
        <StandaloneSearchBox
          onLoad={(ref) => {
            searchBoxRef.current = ref; // Set the reference using useRef
          }}
          onPlacesChanged={() => handleSelect(searchBoxRef.current?.getPlaces() || [])} // Safely access getPlaces()
        >
          <input
            type="text"
            placeholder="Enter your delivery address"
            value={address}
            onChange={(e) => {
              setAddressState(e.target.value); // Update local address state
              setAddress(e.target.value); // Update address in parent
            }}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
            }}
          />
        </StandaloneSearchBox>
      </div>
    </LoadScript>
  );
};

export default AddressInput;
