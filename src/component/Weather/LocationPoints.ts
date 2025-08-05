export const getLocationPoints = async () => {
  if (navigator.geolocation) {
    const promise = new Promise<{ lat: number; long: number }>((res) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          res({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    });
    const { lat, long } = await promise;

    return { lat, long };
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};
