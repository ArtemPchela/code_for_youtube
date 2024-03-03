import { useQuery } from "react-query";
import { Fragment, ReactNode, useState } from "react";
import { CardsConfig } from "../types/types.ts";
import Modal from "./Modal.tsx";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Network response not ok");
  }

  return response.json();
};

const Cards = () => {
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const { data, error, isLoading } = useQuery<CardsConfig[]>({
    queryFn: fetchUsers,
    queryKey: "users",
  });

  const openModal = (id: string) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error as ReactNode}</div>;

  return (
    <div className={"wrapper"}>
      {data?.map((item) => (
        <Fragment key={item.id}>
          <div className={"card"}>
            <h2>{item.name}</h2>
            <div className={"modal-btn"} onClick={() => openModal(item.id)}>
              More info
            </div>
          </div>

          <Modal
            item={item}
            isOpen={openModalId === item.id}
            onClose={closeModal}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Cards;
