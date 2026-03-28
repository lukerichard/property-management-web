export type Property = {
  id: string;
  name: string;
  address: string;
  units: number;
  occupancyRate: number;
  monthlyRevenue: number;
};

export type MaintenanceTicket = {
  id: string;
  unit: string;
  issue: string;
  priority: "Low" | "Medium" | "High";
  status: "Open" | "In Progress" | "Scheduled" | "Closed";
  updatedAt: string;
};

export type Tenant = {
  id: string;
  name: string;
  unit: string;
  leaseEnd: string;
  balanceDue: number;
  status: "Current" | "Late";
};

export const properties: Property[] = [
  {
    id: "p1",
    name: "Riverside Flats",
    address: "182 River St, Hartford, CT",
    units: 24,
    occupancyRate: 0.92,
    monthlyRevenue: 46800,
  },
  {
    id: "p2",
    name: "Oakwood Homes",
    address: "77 Oakwood Ave, New Haven, CT",
    units: 16,
    occupancyRate: 0.88,
    monthlyRevenue: 28500,
  },
  {
    id: "p3",
    name: "Maple Square",
    address: "10 Maple Sq, Stamford, CT",
    units: 38,
    occupancyRate: 0.95,
    monthlyRevenue: 79300,
  },
];

export const tickets: MaintenanceTicket[] = [
  {
    id: "mt-1042",
    unit: "Riverside 2B",
    issue: "Kitchen sink leak",
    priority: "High",
    status: "In Progress",
    updatedAt: "1h ago",
  },
  {
    id: "mt-1043",
    unit: "Oakwood 6A",
    issue: "HVAC making loud noise",
    priority: "Medium",
    status: "Scheduled",
    updatedAt: "3h ago",
  },
  {
    id: "mt-1044",
    unit: "Maple 14C",
    issue: "Hallway light out",
    priority: "Low",
    status: "Open",
    updatedAt: "5h ago",
  },
  {
    id: "mt-1045",
    unit: "Maple 3A",
    issue: "Broken window latch",
    priority: "Medium",
    status: "Open",
    updatedAt: "Today",
  },
];

export const tenants: Tenant[] = [
  {
    id: "t1",
    name: "Avery Johnson",
    unit: "Riverside 2B",
    leaseEnd: "2026-08-31",
    balanceDue: 0,
    status: "Current",
  },
  {
    id: "t2",
    name: "Maya Patel",
    unit: "Oakwood 6A",
    leaseEnd: "2026-06-30",
    balanceDue: 185,
    status: "Late",
  },
  {
    id: "t3",
    name: "Daniel Kim",
    unit: "Maple 14C",
    leaseEnd: "2027-01-31",
    balanceDue: 0,
    status: "Current",
  },
  {
    id: "t4",
    name: "Sophia Martin",
    unit: "Maple 3A",
    leaseEnd: "2026-09-30",
    balanceDue: 60,
    status: "Late",
  },
];

export const kpis = {
  portfolioUnits: properties.reduce((sum, p) => sum + p.units, 0),
  occupancy:
    properties.reduce((sum, p) => sum + p.occupancyRate, 0) / properties.length,
  monthlyRevenue: properties.reduce((sum, p) => sum + p.monthlyRevenue, 0),
  openTickets: tickets.filter((t) => t.status !== "Closed").length,
};
