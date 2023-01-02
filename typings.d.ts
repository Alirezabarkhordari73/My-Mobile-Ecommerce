interface Category {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "category";
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
}
interface Image {
  _key: string;
  _type: "image";
  asset: {
    url: string;
  };
}
interface Product {
  _id: string;
  details: string;
  name: string;
  price: number;
  _createdAt: string;
  _updatedAt: string;
  slug: {
    _type: "slug";
    current: string;
  };
  image: Image[];
  category: {
    _type: "reference";
    _ref: string;
  };
}
interface ICartProducts {
  quantity: number;
  product: Product;
}
