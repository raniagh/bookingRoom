import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
import rooms from "@/data/rooms.json";

export default function Home() {
  return (
    <>
      <Heading title='Available Rooms' />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} />)
      ) : (
        <h2>No rooms available at the moment</h2>
      )}
    </>
  );
}
