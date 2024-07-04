// import React from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../api';

// const HotelDetail = () => {
//   const { id } = useParams();
//   const [hotel, setHotel] = React.useState(null);

//   React.useEffect(() => {
//     api.get(`/api/hotels/${id}/`)
//       .then(res => res.data)
//       .then(data => setHotel(data))
//       .catch(err => alert(err));
//   }, [id]);

//   if (!hotel) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{hotel.name}</h1>
//       <p>{hotel.description}</p>
//       <p>Rating: {hotel.rating}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// };

// export default HotelDetail;
