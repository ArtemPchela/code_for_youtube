export type CardsConfig = {
  id: string;
  name: string;
  email: string;
};

export type ModalProps = {
  item: CardsConfig | null;
  isOpen: boolean;
  onClose: () => void;
};
