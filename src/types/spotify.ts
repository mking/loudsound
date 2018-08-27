export interface Profile {
  display_name?: string;
}

export interface Icon {
  height?: number;
  width?: number;
  url?: string;
}

export interface Category {
  id?: string;
  name?: string;
  icon?: Icon;
}
