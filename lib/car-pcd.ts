// Stud pattern (PCD) for popular cars in Rohtak, used by the "Select your car" alloy picker.
// Each entry was checked against wheel-size.com, cararac.com or Team-BHP owner reports (Nov 2026).
// Only list a car here once its PCD is verified — a wrong PCD means the wheel will not bolt on.
// Centre bore and offset still vary by car, so the store confirms fitment before fitting.

export type CarPcd = { slug: string; brand: string; model: string; pcd: string };

const c = (brand: string, model: string, pcd: string): CarPcd => ({
  slug: `${brand}-${model}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  brand,
  model,
  pcd,
});

export const CAR_PCDS: CarPcd[] = [
  c("Maruti Suzuki", "Swift", "4x100"),
  c("Maruti Suzuki", "Dzire", "4x100"),
  c("Maruti Suzuki", "Baleno", "4x100"),
  c("Maruti Suzuki", "Wagon R", "4x100"),
  c("Maruti Suzuki", "Fronx", "4x100"),
  c("Maruti Suzuki", "Ciaz", "4x100"),
  c("Maruti Suzuki", "Brezza / Vitara Brezza", "5x114.3"),
  c("Maruti Suzuki", "Ertiga", "5x114.3"),
  c("Maruti Suzuki", "XL6", "5x114.3"),
  c("Maruti Suzuki", "Grand Vitara (2022+)", "5x114.3"),
  c("Maruti Suzuki", "Jimny", "5x139.7"),
  c("Hyundai", "i20", "4x100"),
  c("Hyundai", "Grand i10 / Nios", "4x100"),
  c("Hyundai", "Creta", "5x114.3"),
  c("Hyundai", "Venue", "5x114.3"),
  c("Tata", "Tiago", "4x108"),
  c("Tata", "Tigor", "4x108"),
  c("Tata", "Altroz", "4x108"),
  c("Tata", "Punch", "4x108"),
  c("Tata", "Nexon (2017–2023)", "4x108"),
  c("Tata", "Harrier", "5x108"),
  c("Tata", "Safari (2021+)", "5x108"),
  c("Mahindra", "Thar (2020+)", "5x114.3"),
  c("Mahindra", "Thar Roxx", "5x114.3"),
  c("Mahindra", "XUV700", "5x114.3"),
  c("Mahindra", "XUV300", "5x114.3"),
  c("Mahindra", "XUV 3XO", "5x114.3"),
  c("Mahindra", "Scorpio-N", "5x139.7"),
  c("Mahindra", "XUV500", "5x139.7"),
  c("Mahindra", "Thar (up to 2019)", "5x139.7"),
  c("Toyota", "Innova / Innova Crysta", "5x114.3"),
  c("Toyota", "Urban Cruiser Hyryder", "5x114.3"),
  c("Toyota", "Fortuner", "6x139.7"),
  c("Kia", "Seltos", "5x114.3"),
  c("Kia", "Sonet", "5x114.3"),
  c("Kia", "Carens", "5x114.3"),
  c("Honda", "City", "4x100"),
  c("Honda", "Elevate", "5x114.3"),
  c("Volkswagen", "Virtus", "5x100"),
  c("Volkswagen", "Taigun", "5x100"),
  c("Skoda", "Kushaq", "5x100"),
  c("Skoda", "Slavia", "5x100"),
  c("Renault", "Kiger", "4x100"),
  c("Renault", "Triber", "4x100"),
  c("Nissan", "Magnite", "4x100"),
];

export const CAR_PCD_BRANDS = [...new Set(CAR_PCDS.map((x) => x.brand))];

export function findCarPcd(slug: string | null | undefined) {
  return slug ? CAR_PCDS.find((x) => x.slug === slug) ?? null : null;
}
