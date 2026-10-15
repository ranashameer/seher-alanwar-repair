import { ApplianceType, SymptomOption } from '../types';

export const APPLIANCES: ApplianceType[] = [
  {
    id: 'washing-machine',
    name: 'Washing Machine',
    category: 'Laundry',
    icon: 'washing-machine',
    basePriceAED: 120,
    estRepairTimeMin: 45,
    description: 'Front-load, top-load, and washer-dryer combo repair with genuine pumps, belts, and control boards.',
    commonIssues: [
      'Not Spinning or Draining',
      'Water Leak from Door / Bottom',
      'Loud Vibrations / Bearing Noise',
      'Error Codes / PCB Board Failure',
      'Door Lock Jammed / Won’t Open'
    ]
  },
  {
    id: 'refrigerator',
    name: 'Refrigerator & Chiller',
    category: 'Refrigeration',
    icon: 'refrigerator',
    basePriceAED: 140,
    estRepairTimeMin: 60,
    description: 'Compressor fixes, gas charging, defrost thermostat, inverter PCB diagnostics, and door seal repair.',
    commonIssues: [
      'Not Cooling / Warm Fridge',
      'Freezer Over-Freezing / Ice Build-up',
      'Continuous Clicking Compressor Sound',
      'Freon Gas Leak / Needs Refill',
      'Water Leaking Inside Crisper'
    ]
  },
  {
    id: 'cooking-range',
    name: 'Cooking Range & Oven',
    category: 'Cooking',
    icon: 'flame',
    basePriceAED: 130,
    estRepairTimeMin: 45,
    description: 'Gas & electric stove repair, ignition spark troubleshooting, burner calibration, and baking thermostat replacement.',
    commonIssues: [
      'Burner Won’t Ignite / Spark Failure',
      'Gas Smell / Valve Leak Detection',
      'Oven Not Heating / Uneven Baking',
      'Glass Top Crack / Heating Element',
      'Thermostat Temperature Calibration'
    ]
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher',
    category: 'Dishwashers',
    icon: 'utensils',
    basePriceAED: 120,
    estRepairTimeMin: 50,
    description: 'Circulation pump repair, drain filter clearance, spray arm replacement, heating coil, and sensor fixes.',
    commonIssues: [
      'Water Not Draining / Standing Water',
      'Dishes Coming Out Dirty / Greasy',
      'Tablet / Detergent Won’t Dispense',
      'Continuous Beeping / E-Error Code',
      'Water Leakage onto Kitchen Floor'
    ]
  },
  {
    id: 'split-ac',
    name: 'Split AC & Chiller',
    category: 'AC',
    icon: 'wind',
    basePriceAED: 110,
    estRepairTimeMin: 40,
    description: 'Deep pressure jet cleaning, R410A/R22 refrigerant top-up, capacitor replacement, water drainage leak fix.',
    commonIssues: [
      'Blowing Warm Air / Gas Leak',
      'Water Dripping / Choked Drain Line',
      'Foul Smell / Clogged Filter',
      'AC Tripping Circuit Breaker',
      'Compressor Fan Not Spinning'
    ]
  },
  {
    id: 'microwave',
    name: 'Microwave & Oven',
    category: 'Small Appliances',
    icon: 'sparkles',
    basePriceAED: 90,
    estRepairTimeMin: 35,
    description: 'Magnetron replacement, turntable motor, fuse replacement, door microswitch, and digital panel repair.',
    commonIssues: [
      'Not Heating Food At All',
      'Sparking Inside Cavity',
      'Turntable Plate Not Rotating',
      'Touchpad Buttons Unresponsive',
      'Shuts Off After 3-5 Seconds'
    ]
  }
];

export const SYMPTOM_OPTIONS: Record<string, SymptomOption[]> = {
  'washing-machine': [
    { id: 'wm-spin', label: 'Not Spinning / Agitating', severity: 'medium', estCostRange: 'AED 120 - 220' },
    { id: 'wm-drain', label: 'Water Leak or Drainage Error', severity: 'high', estCostRange: 'AED 110 - 190' },
    { id: 'wm-noise', label: 'Loud Grinding / Bearing Noise', severity: 'medium', estCostRange: 'AED 140 - 280' },
    { id: 'wm-power', label: 'No Power / PCB Board Error', severity: 'high', estCostRange: 'AED 150 - 320' },
    { id: 'wm-door', label: 'Door Locked / Latch Broken', severity: 'low', estCostRange: 'AED 90 - 150' },
  ],
  'refrigerator': [
    { id: 'fr-cool', label: 'Not Cooling / Warm Fridge', severity: 'emergency', estCostRange: 'AED 140 - 290' },
    { id: 'fr-gas', label: 'Gas Leak / Needs Freon Refill', severity: 'high', estCostRange: 'AED 160 - 340' },
    { id: 'fr-ice', label: 'Heavy Ice Build-up / Defrost Issue', severity: 'medium', estCostRange: 'AED 120 - 210' },
    { id: 'fr-comp', label: 'Compressor Clicking / Not Starting', severity: 'emergency', estCostRange: 'AED 180 - 420' },
    { id: 'fr-water', label: 'Water Leaking on Kitchen Floor', severity: 'medium', estCostRange: 'AED 110 - 190' },
  ],
  'cooking-range': [
    { id: 'cr-ignite', label: 'Burner Won’t Ignite / No Spark', severity: 'medium', estCostRange: 'AED 110 - 180' },
    { id: 'cr-gas', label: 'Gas Leak Smell (Urgent Safety)', severity: 'emergency', estCostRange: 'AED 130 - 250' },
    { id: 'cr-oven', label: 'Oven Bottom / Grill Not Heating', severity: 'medium', estCostRange: 'AED 140 - 260' },
    { id: 'cr-glass', label: 'Broken Induction / Ceramic Surface', severity: 'high', estCostRange: 'AED 160 - 350' },
  ],
  'dishwasher': [
    { id: 'dw-drain', label: 'Standing Water / Drainage Pump', severity: 'high', estCostRange: 'AED 120 - 210' },
    { id: 'dw-clean', label: 'Dishes Not Washing Clean', severity: 'low', estCostRange: 'AED 90 - 160' },
    { id: 'dw-leak', label: 'Water Leakage Under Machine', severity: 'high', estCostRange: 'AED 130 - 230' },
    { id: 'dw-error', label: 'Beeping Error Code (E1, E4, etc.)', severity: 'medium', estCostRange: 'AED 110 - 200' },
  ],
  'split-ac': [
    { id: 'ac-warm', label: 'AC Blowing Warm Air', severity: 'emergency', estCostRange: 'AED 120 - 250' },
    { id: 'ac-leak', label: 'Water Dripping from Indoor Unit', severity: 'high', estCostRange: 'AED 110 - 190' },
    { id: 'ac-gas', label: 'Refrigerant / Gas Top-up', severity: 'medium', estCostRange: 'AED 140 - 280' },
    { id: 'ac-trip', label: 'Tripping Power Breaker', severity: 'emergency', estCostRange: 'AED 150 - 300' },
  ],
  'microwave': [
    { id: 'mw-heat', label: 'Running But Not Heating', severity: 'medium', estCostRange: 'AED 90 - 180' },
    { id: 'mw-spark', label: 'Sparking / Arcing Inside', severity: 'high', estCostRange: 'AED 90 - 170' },
    { id: 'mw-plate', label: 'Turntable Plate Not Turning', severity: 'low', estCostRange: 'AED 80 - 140' },
  ]
};
