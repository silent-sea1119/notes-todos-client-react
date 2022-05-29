export interface selectionTypes {
  title: string;
  counter: number;
  isActive: boolean;
  setActive: (value: string) => void;
}

export interface modalTypes {
  showModal: boolean;
  toggleModal: () => void;
}
