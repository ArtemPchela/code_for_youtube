import { useQuery } from "react-query";
import { useState } from "react";
import { CardsConfig } from "../types/types.ts";
import Modal from "./Modal.tsx";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response not ok");
  }

  return response.json();
};

const CardsModalReusable = () => {
  const [selectedItem, setSelectedItem] = useState<CardsConfig | null>(null);
  const { data, error, isLoading } = useQuery<CardsConfig[]>(
    "users",
    fetchUsers,
  );

  const openModal = (item: CardsConfig) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="wrapper">
      {data?.map((item) => (
        <div key={item.id} className="card">
          <h2>{item.name}</h2>
          <div className="modal-btn" onClick={() => openModal(item)}>
            More info
          </div>
        </div>
      ))}
      <Modal item={selectedItem} isOpen={!!selectedItem} onClose={closeModal} />
    </div>
  );
};

export default CardsModalReusable;
