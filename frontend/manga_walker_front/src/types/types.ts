export type CARD_COVER_CONTENT_PROPS = {
  id: string;
  title: string;
  cover_img: string
  created_at: string;
}

export type CONTENT_PROPS = {
  id: string | number | undefined;
  title: string;
  category: string | number | undefined;
  url: string;
  stored_at: string;
}

export type CONTENT_ATOM_PROPS = {
  title: string;
  category: string | number;
  url: string;
}

export interface BOOK_COMPONENT_UPLOAD_PROPS {
  title: string;
  componentRef?: (instance: HTMLInputElement | null) => void;
  photos: File[];
  setPhotos: (files: File[]) => void;
}


export type Inputs = {
  title: string;
};

export type InputsContent = {
  title: string;
  category: string;
  url: string;
}