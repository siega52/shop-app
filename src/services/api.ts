import type { Product } from '../types/product';

const mockProducts: Product[] = [
  {
    id: 1,
    title: "Apple iPhone 17 PRO 256Gb",
    price: 99690,
    category: "Гаджеты",
    image: "https://pitergsm.ru/upload/iblock/97e/x3bjr3aqxmn3xtuwiio9x8q98evfepla.jpg",
    description: "Новый iPhone 17 Pro eSim — это не просто обновление, это полностью переработанное устройство. В его основе — цельный корпус из алюминиевого сплава."
  },
  {
    id: 2,
    title: "Apple AirPods 4 (MXP63)",
    price: 11890,
    category: "Аудио",
    image: "https://pitergsm.ru/upload/resize_cache/iblock/89a/510_510_1/a9ekt5la7pow3ba985vuhbj3v5k55ecf.jpg",
    description: "Наушники Apple AirPods 4 предлагают совершенно новый уровень звучания. Они создают пространственный звук с отслеживанием положения головы, что позволяет воспринимать звук с разных сторон и наслаждаться объемным звучанием."
  },
  {
    id: 3,
    title: "Apple MacBook Pro 16",
    price: 120990,
    category: "Электроника",
    image: "https://pitergsm.ru/upload/resize_cache/iblock/f97/510_510_1/v19e93djyrgqwiuu6f6ipkvlfzyxtt6p.jpg",
    description: "Apple MacBook Pro 16 (2021) — самый мощный MacBook Pro в истории, который базируется на высокотехнологичном чипе M1 Pro."
  },
    {
    id: 4,
    title: "Apple iPhone 17 PRO 256Gb",
    price: 99690,
    category: "Гаджеты",
    image: "https://pitergsm.ru/upload/iblock/97e/x3bjr3aqxmn3xtuwiio9x8q98evfepla.jpg",
    description: "Новый iPhone 17 Pro eSim — это не просто обновление, это полностью переработанное устройство. В его основе — цельный корпус из алюминиевого сплава."
  },
  {
    id: 5,
    title: "Apple AirPods 4 (MXP63)",
    price: 11890,
    category: "Аудио",
    image: "https://pitergsm.ru/upload/resize_cache/iblock/89a/510_510_1/a9ekt5la7pow3ba985vuhbj3v5k55ecf.jpg",
    description: "Наушники Apple AirPods 4 предлагают совершенно новый уровень звучания. Они создают пространственный звук с отслеживанием положения головы, что позволяет воспринимать звук с разных сторон и наслаждаться объемным звучанием."
  },
  {
    id: 6,
    title: "Apple MacBook Pro 16",
    price: 120990,
    category: "Электроника",
    image: "https://pitergsm.ru/upload/resize_cache/iblock/f97/510_510_1/v19e93djyrgqwiuu6f6ipkvlfzyxtt6p.jpg",
    description: "Apple MacBook Pro 16 (2021) — самый мощный MacBook Pro в истории, который базируется на высокотехнологичном чипе M1 Pro."
  },
    {
    id: 7,
    title: "Apple iPhone 17 PRO 256Gb",
    price: 99690,
    category: "Гаджеты",
    image: "https://pitergsm.ru/upload/iblock/97e/x3bjr3aqxmn3xtuwiio9x8q98evfepla.jpg",
    description: "Новый iPhone 17 Pro eSim — это не просто обновление, это полностью переработанное устройство. В его основе — цельный корпус из алюминиевого сплава."
  },
  {
    id: 8,
    title: "Apple AirPods 4 (MXP63)",
    price: 11890,
    category: "Аудио",
    image: "https://pitergsm.ru/upload/resize_cache/iblock/89a/510_510_1/a9ekt5la7pow3ba985vuhbj3v5k55ecf.jpg",
    description: "Наушники Apple AirPods 4 предлагают совершенно новый уровень звучания. Они создают пространственный звук с отслеживанием положения головы, что позволяет воспринимать звук с разных сторон и наслаждаться объемным звучанием."
  },
  {
    id: 9,
    title: "Apple MacBook Pro 16",
    price: 120990,
    category: "Электроника",
    image: "https://pitergsm.ru/upload/resize_cache/iblock/f97/510_510_1/v19e93djyrgqwiuu6f6ipkvlfzyxtt6p.jpg",
    description: "Apple MacBook Pro 16 (2021) — самый мощный MacBook Pro в истории, который базируется на высокотехнологичном чипе M1 Pro."
  },
    {
    id: 10,
    title: "Apple iPhone 17 PRO 256Gb",
    price: 99690,
    category: "Гаджеты",
    image: "https://pitergsm.ru/upload/iblock/97e/x3bjr3aqxmn3xtuwiio9x8q98evfepla.jpg",
    description: "Новый iPhone 17 Pro eSim — это не просто обновление, это полностью переработанное устройство. В его основе — цельный корпус из алюминиевого сплава."
  },
  {
    id: 11,
    title: "Apple AirPods 4 (MXP63)",
    price: 11890,
    category: "Аудио",
    image: "https://pitergsm.ru/upload/resize_cache/iblock/89a/510_510_1/a9ekt5la7pow3ba985vuhbj3v5k55ecf.jpg",
    description: "Наушники Apple AirPods 4 предлагают совершенно новый уровень звучания. Они создают пространственный звук с отслеживанием положения головы, что позволяет воспринимать звук с разных сторон и наслаждаться объемным звучанием."
  },
  {
    id: 12,
    title: "Apple MacBook Pro 16",
    price: 120990,
    category: "Электроника",
    image: "https://pitergsm.ru/upload/resize_cache/iblock/f97/510_510_1/v19e93djyrgqwiuu6f6ipkvlfzyxtt6p.jpg",
    description: "Apple MacBook Pro 16 (2021) — самый мощный MacBook Pro в истории, который базируется на высокотехнологичном чипе M1 Pro."
  },
];

export const fetchProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockProducts), 300);
  });
};