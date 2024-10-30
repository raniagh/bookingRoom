import Heading from "../components/Heading";
import RoomCard from "../components/RoomCard";
import getAllRooms from "./actions/getAllRooms";

export default async function Home() {
  const rooms = await getAllRooms();
  return (
    <>
      <Heading title='Available Rooms' />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} key={room.$id} />)
      ) : (
        <h2>No rooms available at the moment</h2>
      )}
    </>
  );
}
