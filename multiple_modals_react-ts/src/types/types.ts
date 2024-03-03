export type CardsConfig = {
  id: string;
  name: string;
  email: string;
};

export type ModalProps = {
  item: CardsConfig;
  isOpen: boolean;
  onClose: () => void;
};
