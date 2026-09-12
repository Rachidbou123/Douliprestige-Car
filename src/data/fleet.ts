export interface Vehicle {
  id: string;
  name: string;
  category: string;
  image: string;
  transmission: 'Manuelle' | 'Automatique';
  fuel: 'Essence' | 'Diesel' | 'Essence/Diesel';
  seats: number;
  doors: number;
  ac: boolean;
  pricePerDay: number | null; // null if "Nous consulter"
  available: boolean;
  features: string[];
}

export const FLEET: Vehicle[] = [
  {
    id: "renault-clio-5",
    name: "Renault Clio 5",
    category: "Citadine",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200", 
    transmission: "Manuelle",
    fuel: "Diesel",
    seats: 5,
    doors: 5,
    ac: true,
    pricePerDay: 250,
    available: true,
    features: ["Climatisation", "Bluetooth", "Régulateur de vitesse", "Idéale pour la ville"]
  },
  {
    id: "dacia-logan",
    name: "Dacia Logan",
    category: "Berline Économique",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200",
    transmission: "Manuelle",
    fuel: "Diesel",
    seats: 5,
    doors: 4,
    ac: true,
    pricePerDay: 200,
    available: true,
    features: ["Spacieuse", "Grand coffre", "Très économique", "Parfaite pour les familles"]
  },
   {
    id: "dacia-sandero",
    name: "Dacia Sandero",
    category: "Citadine / Économique",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200",
    transmission: "Manuelle",
    fuel: "Essence/Diesel",
    seats: 5,
    doors: 5,
    ac: true,
    pricePerDay: null,
    available: true,
    features: ["Pratique", "Économique", "Climatisation"]
  }
];
