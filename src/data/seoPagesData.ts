export interface ServiceSeoData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  applianceName: string;
  startingPrice: number;
  avgTimeMin: number;
  warranty: string;
  badge: string;
  image: string;
  altText: string;
  commonFaults: {
    title: string;
    description: string;
    symptoms: string[];
    fixApproach: string;
  }[];
  dubaiClimateFactors: string;
  brandCompatibility: string[];
  stepByStepProcess: {
    step: string;
    title: string;
    description: string;
  }[];
  pricingTable: {
    serviceType: string;
    estimatedRangeAED: string;
    warrantyCoverage: string;
    turnaround: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES_SEO_DATA: Record<string, ServiceSeoData> = {
  'washing-machine-repair-dubai': {
    slug: 'washing-machine-repair-dubai',
    metaTitle: 'Washing Machine Repair Dubai | 30-Min Doorstep Fix',
    metaDescription: 'Expert washing machine & dryer repair in Dubai. 30-60 min arrival, OEM belts, pumps & PCB boards with 90-day warranty. Free inspection on repair. Call now!',
    h1: 'Washing Machine Repair in Dubai – Same-Day Doorstep Service',
    applianceName: 'Washing Machine & Dryer',
    startingPrice: 120,
    avgTimeMin: 45,
    warranty: '90-Day Parts & Labor Warranty',
    badge: 'Same-Day Dispatch',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80',
    altText: 'Certified technician repairing front load washing machine drum in Dubai residential home',
    dubaiClimateFactors: 'Dubai’s desalinated tap water has high mineral content (calcium & magnesium carbonates), accelerating scale buildup inside washing machine heating elements, solenoid water valves, and drainage impellers. In addition, high ambient humidity in laundry balconies causes premature oxidation on electronic PCB motherboards.',
    brandCompatibility: ['Samsung', 'LG', 'Bosch', 'Siemens', 'Whirlpool', 'Ariston', 'Indesit', 'Daewoo', 'Beko', 'Miele', 'Super General', 'Electrolux'],
    commonFaults: [
      {
        title: 'Spin Cycle Failure & Drum Not Rotating',
        description: 'The washer powers on and fills with water, but the drum refuses to spin or produces a violent knocking vibration during the extraction cycle.',
        symptoms: ['Drive belt snapped or slipped', 'Carbon brushes worn out on motor', 'Main electronic drive inverter PCB failure', 'Worn drum bearings causing loud grinding noise'],
        fixApproach: 'Our mobile van technicians inspect motor windings, replace heavy-duty belts, install OEM carbon brushes, or replace sealed waterproof bearings on-site.'
      },
      {
        title: 'Water Not Draining / Standing Dirty Water',
        description: 'Washer stops mid-cycle with water pooling inside the drum. Displays drain error codes (e.g. OE, 5E, E18, F03).',
        symptoms: ['Drain pump impeller jammed by coins, lint, or debris', 'Faulty magnetic drain pump motor', 'Kinked or clogged discharge hose', 'Pressure switch sensor failure'],
        fixApproach: 'Technicians clear the foreign object trap, test drain pump electrical resistance with a multimeter, and replace malfunctioning pumps with genuine OEM components.'
      },
      {
        title: 'Door Boot Gasket Leakage & Lock Mechanism Malfunctions',
        description: 'Water leaking from the front door during wash cycles, or the door latch remaining locked after cycle completion (displaying dE, dL, or E01).',
        symptoms: ['Torn or mold-degraded rubber bellows boot gasket', 'Burnt electromagnetic door lock solenoid (PTC interlock)', 'Misaligned door hinge from heavy laundry loads'],
        fixApproach: 'We carry high-temperature silicone rubber door gaskets and OEM electromagnetic locks for immediate same-day replacement.'
      },
      {
        title: 'Motherboard PCB Circuit Board Failures',
        description: 'Machine will not power on, randomly reboots mid-cycle, trips the home RCD electrical breaker, or displays error codes.',
        symptoms: ['Voltage surge damage from Dubai electrical spikes', 'Blown triac or relay on the power board', 'Moisture ingress causing short circuits'],
        fixApproach: 'Component-level motherboard repair or direct OEM circuit board replacement with post-repair cycle calibration.'
      }
    ],
    stepByStepProcess: [
      {
        step: '01',
        title: 'Instant Booking & WhatsApp Triage',
        description: 'Share your washer brand, model, and error code. Receive immediate preliminary pricing and technician ETA.'
      },
      {
        step: '02',
        title: '30-60 Min Doorstep Arrival',
        description: 'Uniformed, licensed technician arrives in a mobile workshop van stocked with genuine spare belts, pumps, and sensors.'
      },
      {
        step: '03',
        title: 'Precision On-Site Diagnostic & Repair',
        description: 'Comprehensive diagnostic testing. If you approve the repair, the AED 90 inspection fee is completely waived.'
      },
      {
        step: '04',
        title: 'Calibration & 90-Day Warranty Certificate',
        description: 'Full spin and water pressure test. We issue an official written 90-day warranty on replaced parts and workmanship.'
      }
    ],
    pricingTable: [
      { serviceType: 'Diagnostic & Electrical Safety Inspection', estimatedRangeAED: 'AED 90', warrantyCoverage: 'Waived 100% on repair', turnaround: '20-30 Mins' },
      { serviceType: 'Drain Pump Clearing & Filter De-clog', estimatedRangeAED: 'AED 120 – 160', warrantyCoverage: '90-Day Written Warranty', turnaround: '30-45 Mins' },
      { serviceType: 'Drive Belt & Suspension Spring Replacement', estimatedRangeAED: 'AED 140 – 220', warrantyCoverage: '90-Day Written Warranty', turnaround: '40 Mins' },
      { serviceType: 'Drain Pump / Inlet Solenoid Valve Replacement', estimatedRangeAED: 'AED 180 – 280', warrantyCoverage: '90-Day Written Warranty', turnaround: '45 Mins' },
      { serviceType: 'Electronic Motherboard PCB Repair / Calibration', estimatedRangeAED: 'AED 240 – 380', warrantyCoverage: '90-Day Written Warranty', turnaround: '60 Mins' },
      { serviceType: 'Drum Bearing & Waterproof Seal Overhaul', estimatedRangeAED: 'AED 350 – 520', warrantyCoverage: '90-Day Written Warranty', turnaround: '60-90 Mins' }
    ],
    faqs: [
      {
        question: 'How quickly can a washing machine technician arrive in Dubai?',
        answer: 'Our mobile service units are stationed across Dubai residential districts, ensuring doorstep arrival within 30 to 60 minutes. In primary hubs like International City, Silicon Oasis, Mirdif, and Al Warqa, arrival is frequently within 20 to 35 minutes.'
      },
      {
        question: 'Is it worth repairing my washing machine or should I buy a new one?',
        answer: 'In 90% of cases in Dubai, repairs cost between AED 140 and AED 280 (far below the AED 1,500–3,500 cost of a new quality front-load machine). If your washer is under 8 years old and the drum is sound, replacing a pump, belt, or PCB board gives the machine another 4 to 6 years of trouble-free operation.'
      },
      {
        question: 'How does the AED 90 inspection fee work?',
        answer: 'Our diagnostic inspection fee is AED 90. However, if you approve the quote and proceed with the repair, this fee is 100% WAIVED. You only pay for the agreed repair service and required genuine replacement parts.'
      },
      {
        question: 'Do you provide a formal warranty on washing machine repairs?',
        answer: 'Yes! Every repair is backed by a formal written and digital warranty certificate of up to 90 days covering both the genuine OEM replacement components and technician labor.'
      }
    ]
  },

  'refrigerator-repair-dubai': {
    slug: 'refrigerator-repair-dubai',
    metaTitle: 'Refrigerator Repair Dubai | Emergency 24/7 Fridge Fix',
    metaDescription: 'Emergency refrigerator & chiller repair in Dubai. 30-min arrival, Freon gas refill, compressor & inverter board repair with 90-day warranty. Contact us 24/7!',
    h1: 'Refrigerator Repair in Dubai – 24/7 Emergency Doorstep Service',
    applianceName: 'Refrigerator & Chiller',
    startingPrice: 140,
    avgTimeMin: 45,
    warranty: '90-Day Written Warranty',
    badge: '24/7 Emergency Priority',
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
    altText: 'Emergency technician refilling refrigerant gas and diagnosing refrigerator compressor in Dubai home',
    dubaiClimateFactors: 'Summer ambient temperatures in Dubai exceed 45°C with high humidity, forcing domestic refrigerator compressors to run continuously at peak duty cycle. This causes condenser fan motor burnouts, premature capacitor degradation, and freon gas pressure drops.',
    brandCompatibility: ['Samsung', 'LG', 'Bosch', 'Siemens', 'Hitachi', 'Whirlpool', 'Daewoo', 'Super General', 'Nikai', 'Miele', 'Liebherr', 'Frigidaire'],
    commonFaults: [
      {
        title: 'Refrigerator Not Cooling / Freezer Thawing Perishables',
        description: 'The internal fan runs and lights turn on, but the cabinet temperature rises, causing food spoilage and ice cream to melt.',
        symptoms: ['Compressor clicking and failing to start', 'Faulty PTC starter relay or run capacitor', 'Inverter compressor controller board burnout', 'Refrigerant gas leak in copper tubing'],
        fixApproach: 'We test compressor winding resistance, replace faulty starter relays, inspect inverter driver boards, and recharge refrigerant to factory PSI specifications.'
      },
      {
        title: 'Refrigerant Freon Gas Leak & Pressure Drop',
        description: 'Compressor runs continuously without cycling off, but cold air production diminishes over days.',
        symptoms: ['Hissing sound inside cabinet', 'Oily residue near copper joints', 'Evaporator coil frosted only at top corner', 'Loss of cooling efficiency'],
        fixApproach: 'Electronic halogen leak detector pinpoints microscopic leaks. We braze the copper joints, vacuum the system, and recharge eco-friendly R134a or R600a refrigerant.'
      },
      {
        title: 'Frost Buildup on Freezer Coils & Fan Noise',
        description: 'Heavy sheet of ice covers the rear freezer panel, blocking cold air airflow to the fresh food compartment.',
        symptoms: ['Defrost heating element burnout', 'Bi-metal defrost thermostat failure', 'Defrost control board / digital sensor error', 'Fan blade hitting ice accumulation'],
        fixApproach: 'Manual high-temperature thermal defrost, followed by replacement of the defective defrost heater or bi-metal sensor with original OEM components.'
      },
      {
        title: 'Water Leaking on Kitchen Floor',
        description: 'Puddles of water forming under the vegetable crisper drawers or leaking onto the kitchen tiles.',
        symptoms: ['Defrost drain hole frozen or clogged with algae', 'Cracked drain evaporation pan over the compressor', 'Damaged water dispenser inlet solenoid'],
        fixApproach: 'We flush the condensation drain line with antibacterial pressurized steam and reseat the drain collection tray.'
      }
    ],
    stepByStepProcess: [
      {
        step: '01',
        title: 'Urgent WhatsApp Dispatch',
        description: 'Tell us your fridge brand and symptom. We dispatch the nearest mobile cooling technician on high priority.'
      },
      {
        step: '02',
        title: '30-Minute Fast Arrival',
        description: 'Technician arrives with manifold pressure gauges, refrigerant canisters (R134a/R600a), relays, and inverter boards.'
      },
      {
        step: '03',
        title: 'Digital Diagnostics & Leak Detection',
        description: 'Accurate thermal laser measurement and electrical testing. Diagnostic fee is waived upon repair confirmation.'
      },
      {
        step: '04',
        title: 'Cooling Restoration & Warranty',
        description: 'Instant temperature drop verified. Up to 90 days warranty certificate issued on all components.'
      }
    ],
    pricingTable: [
      { serviceType: 'Diagnostic & Digital Temperature Audit', estimatedRangeAED: 'AED 90', warrantyCoverage: 'Waived 100% on repair', turnaround: '20 Mins' },
      { serviceType: 'Defrost Drain Unblocking & Sanitization', estimatedRangeAED: 'AED 120 – 160', warrantyCoverage: '90-Day Written Warranty', turnaround: '30 Mins' },
      { serviceType: 'Compressor Starter Relay & Capacitor Fix', estimatedRangeAED: 'AED 160 – 240', warrantyCoverage: '90-Day Written Warranty', turnaround: '40 Mins' },
      { serviceType: 'Defrost Heater & Thermostat Sensor Replacement', estimatedRangeAED: 'AED 190 – 290', warrantyCoverage: '90-Day Written Warranty', turnaround: '45 Mins' },
      { serviceType: 'Eco Freon R134a / R600a Gas Refill & Leak Fix', estimatedRangeAED: 'AED 220 – 350', warrantyCoverage: '90-Day Written Warranty', turnaround: '45-60 Mins' },
      { serviceType: 'Inverter Compressor Electronic Control Board Fix', estimatedRangeAED: 'AED 280 – 480', warrantyCoverage: '90-Day Written Warranty', turnaround: '60 Mins' }
    ],
    faqs: [
      {
        question: 'Why did my refrigerator stop cooling suddenly in Dubai summer?',
        answer: 'During high Dubai summer temperatures (40°C–48°C), kitchen ambient heat increases compressor load. Common culprits include clogged condenser coils, a blown starter relay/capacitor, a faulty defrost heater blocking airflow, or a slow freon refrigerant leak.'
      },
      {
        question: 'Do you provide 24/7 emergency fridge repair in Dubai?',
        answer: 'Yes! Refrigerators are life-critical appliances in the UAE to prevent food spoilage and medicine deterioration. We provide priority emergency dispatch 7 days a week across all Dubai residential communities.'
      },
      {
        question: 'How long does a freon gas refill take in a refrigerator?',
        answer: 'A standard gas refill takes approximately 45 to 60 minutes. Our technicians always pressure-test the copper refrigeration circuit first to locate and weld any leaks before vacuuming and charging authentic R134a or R600a gas.'
      },
      {
        question: 'What happens if the problem returns within 90 days?',
        answer: 'We provide an official 90-day warranty certificate. If the same issue recurs within the warranty window, our technician returns and resolves it with zero additional labor or part charges.'
      }
    ]
  },

  'dishwasher-repair-dubai': {
    slug: 'dishwasher-repair-dubai',
    metaTitle: 'Dishwasher Repair Dubai | 30-Min On-Site Fix & Descaling',
    metaDescription: 'Professional dishwasher repair & descaling in Dubai. Fast drainage fix, spray arms, heater elements & pump replacements with 90-day warranty. Call or WhatsApp!',
    h1: 'Dishwasher Repair in Dubai – Expert Diagnostics & Fast Fixes',
    applianceName: 'Dishwasher',
    startingPrice: 120,
    avgTimeMin: 45,
    warranty: '90-Day Written Warranty',
    badge: 'Hygiene & Descaling',
    image: 'https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?auto=format&fit=crop&w=800&q=80',
    altText: 'Modern stainless steel dishwasher with open racks being serviced by technician in Dubai',
    dubaiClimateFactors: 'Dubai tap water has elevated total dissolved solids (TDS) and mineral hardness. Hard water deposits rapidly clog internal spray arm micro-nozzles, foul flow meter sensors, and cause limescale buildup on immersion heating elements, reducing cleaning performance and causing error codes.',
    brandCompatibility: ['Bosch', 'Siemens', 'Samsung', 'LG', 'Miele', 'Whirlpool', 'Ariston', 'Beko', 'Electrolux', 'AEG'],
    commonFaults: [
      {
        title: 'Drainage Error Codes (E15, E24, OE, F11) & Standing Water',
        description: 'Dishwasher halts mid-cycle with dirty water remaining at the bottom of the stainless tub.',
        symptoms: ['Food debris or broken glass jamming pump impeller', 'Defective drain pump motor coil', 'Aquastop float switch activated in lower base tray', 'Kinked kitchen waste pipe connection'],
        fixApproach: 'We remove the filtration assembly, clear impeller obstruction, test drain pump operation, and reset the anti-flood Aquastop sensor.'
      },
      {
        title: 'Water Not Heating / Dishes Coming Out Wet & Greasy',
        description: 'Wash cycle runs but water remains cold. Dishes have grease residue and cycle timer hangs.',
        symptoms: ['Flow-through heating element burnout', 'NTC temperature sensor faulty', 'Main control board heater relay contact burned', 'Hard water mineral calcification'],
        fixApproach: 'Replace the flow-through heater assembly, test thermistor resistance, and calibrate the control module.'
      },
      {
        title: 'Water Leaks from Door or Underside Base',
        description: 'Water drips onto kitchen cabinets or trips the sub-floor flood detection sensor.',
        symptoms: ['Degraded lower door silicone wiper gasket', 'Cracked plastic spray arm spraying water at door joints', 'Loose inlet solenoid water connection'],
        fixApproach: 'Install factory-molded perimeter door seals and replace split rotating spray arms.'
      },
      {
        title: 'Dishes Have White Film / Spray Arm Not Spinning',
        description: 'Dishes come out chalky, cloudy, or with unwashed detergent in the dispenser pocket.',
        symptoms: ['Nozzle holes blocked with calcium scale', 'Circulation wash pump capacitor weak', 'Detergent dispenser actuator solenoid jammed'],
        fixApproach: 'Chemical ultrasonic descaling of spray nozzles, circulation pump servicing, and dispenser solenoid testing.'
      }
    ],
    stepByStepProcess: [
      {
        step: '01',
        title: 'Book Diagnosis via WhatsApp',
        description: 'Send a photo of the error code or dishwasher brand for an instant estimate.'
      },
      {
        step: '02',
        title: 'Clean On-Site Visit (30-60 Min)',
        description: 'Technician arrives with protective floor mats and complete diagnostic instrumentation.'
      },
      {
        step: '03',
        title: 'OEM Parts Fix & Descaling',
        description: 'Fixed on-site using authentic Bosch, Siemens, Samsung, or LG factory parts. Inspection fee waived.'
      },
      {
        step: '04',
        title: 'High-Temperature Cycle Test',
        description: 'We run a pressurized rinse cycle to verify zero leaks and provide a 90-day warranty certificate.'
      }
    ],
    pricingTable: [
      { serviceType: 'Diagnostic Inspection & Leak Check', estimatedRangeAED: 'AED 90', warrantyCoverage: 'Waived 100% on repair', turnaround: '20 Mins' },
      { serviceType: 'Drain Pump Unblocking & Sump Clearing', estimatedRangeAED: 'AED 120 – 160', warrantyCoverage: '90-Day Written Warranty', turnaround: '30 Mins' },
      { serviceType: 'Door Gasket & Perimeter Seal Replacement', estimatedRangeAED: 'AED 140 – 220', warrantyCoverage: '90-Day Written Warranty', turnaround: '40 Mins' },
      { serviceType: 'Drain Pump / Aquastop Valve Replacement', estimatedRangeAED: 'AED 180 – 280', warrantyCoverage: '90-Day Written Warranty', turnaround: '45 Mins' },
      { serviceType: 'Flow-Through Heating Element & Sensor Fix', estimatedRangeAED: 'AED 240 – 360', warrantyCoverage: '90-Day Written Warranty', turnaround: '60 Mins' },
      { serviceType: 'Circulation Wash Motor & Capacitor Overhaul', estimatedRangeAED: 'AED 290 – 450', warrantyCoverage: '90-Day Written Warranty', turnaround: '60 Mins' }
    ],
    faqs: [
      {
        question: 'Why does my Bosch or Siemens dishwasher display Error E15 in Dubai?',
        answer: 'Error E15 means the safety Aquastop anti-flood system is activated because water leaked into the lower metal base tray. This is usually caused by a degraded sump gasket, loose internal hose, or cracked spray arm. Our technicians drain the tray, locate the leak, and replace the seal on the spot.'
      },
      {
        question: 'Why are my glasses cloudy and covered in white powder after washing?',
        answer: 'Dubai water has high mineral hardness. If your dishwasher salt reservoir is empty or the water softener resin bed is fouled, calcium deposits form on glassware. We test water hardness and recalibrate the internal ion-exchange softening unit.'
      },
      {
        question: 'Can you fix integrated built-in dishwashers without damaging cabinets?',
        answer: 'Yes! Our technicians specialize in luxury built-in and semi-integrated dishwashers. We carefully slide the unit out without scratching kitchen parquet or quartz countertops, complete the repair, and reinstall it flush with cabinetry.'
      }
    ]
  },

  'cooking-range-repair-dubai': {
    slug: 'cooking-range-repair-dubai',
    metaTitle: 'Cooking Range Repair Dubai | Gas Stove & Oven Service',
    metaDescription: 'Certified gas cooking range, stove & oven repair in Dubai. Spark igniters, safety thermocouples, burner calibration & 90-day warranty. Fast doorstep arrival!',
    h1: 'Cooking Range & Gas Oven Repair in Dubai – Certified Kitchen Safety',
    applianceName: 'Cooking Range, Stove & Oven',
    startingPrice: 130,
    avgTimeMin: 45,
    warranty: '90-Day Written Warranty',
    badge: 'Gas Safety Certified',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    altText: 'Certified kitchen safety technician repairing gas cooking range burners and oven thermostat in Dubai',
    dubaiClimateFactors: 'Kitchens in Dubai apartments face intense heat and grease accumulation. Grease vapors combine with humidity, causing carbon fouling on spark electrode igniters and corrosion on safety thermocouples, leading to gas cutoff issues.',
    brandCompatibility: ['Ariston', 'Bosch', 'Siemens', 'Elba', 'Terim', 'Super General', 'Bompani', 'Smeg', 'Whirlpool', 'Gorenje', 'La Germania'],
    commonFaults: [
      {
        title: 'Burner Will Not Stay Lit (Cuts Out After Releasing Knob)',
        description: 'Burner ignites when holding the knob down, but the flame immediately dies as soon as you let go.',
        symptoms: ['Faulty safety thermocouple sensor', 'Weak electromagnetic gas valve solenoid', 'Misaligned burner crown cap', 'Carbon soot on sensor probe'],
        fixApproach: 'We clean and calibrate the thermocouple, test millivolt output, or replace defective thermocouples to ensure continuous safe gas flow.'
      },
      {
        title: 'Continuous Spark Igniter Clicking',
        description: 'The ignition module clicks continuously even when all knobs are turned off, or fails to spark entirely.',
        symptoms: ['Ignition switch harness shorted by moisture/spillover', 'Cracked ceramic spark electrode', 'Defective high-voltage spark generator box'],
        fixApproach: 'Isolate the shorted microswitch harness, replace cracked ceramic spark plugs, and install genuine ignition modules.'
      },
      {
        title: 'Oven Not Heating / Uneven Baking Temperature',
        description: 'Oven stays lukewarm, food takes hours to bake, or the bottom element fails to glow red.',
        symptoms: ['Burned top or bottom electric heating element', 'Thermostat sensor out of calibration', 'Browning fan motor seized', 'Gas oven safety valve failure'],
        fixApproach: 'Test element resistance, replace burned spirals with heavy-duty OEM heating elements, and verify oven temperature with digital probe.'
      },
      {
        title: 'Gas Smell & Valve Leakage',
        description: 'Noticeable LPG or centralized gas odor near the appliance.',
        symptoms: ['Perished rubber hose connection', 'Leaking burner valve cock', 'Loose copper flare manifold fitting'],
        fixApproach: 'Immediate safety shutoff, electronic gas sniffer leak detection, manifold re-sealing to UAE Civil Defense safety codes.'
      }
    ],
    stepByStepProcess: [
      {
        step: '01',
        title: 'Safety Triage & Instant Dispatch',
        description: 'Notify us of burner or oven faults. Urgent 30-45 min response across Dubai.'
      },
      {
        step: '02',
        title: 'Gas Sniffer & Electrical Leak Audit',
        description: 'Certified technicians inspect with gas leak sniffers and multi-meters to ensure zero hazards.'
      },
      {
        step: '03',
        title: 'Genuine OEM Part Replacement',
        description: 'Original thermocouples, igniters, and heating elements fitted on the spot. Inspection fee waived.'
      },
      {
        step: '04',
        title: 'Flame Calibration & Warranty',
        description: 'Flames tuned to crisp blue combustion. 90-day warranty certificate issued.'
      }
    ],
    pricingTable: [
      { serviceType: 'Safety Inspection & Gas Leak Audit', estimatedRangeAED: 'AED 90', warrantyCoverage: 'Waived 100% on repair', turnaround: '20 Mins' },
      { serviceType: 'Burner Deep Cleaning & Flame Jet Re-alignment', estimatedRangeAED: 'AED 120 – 160', warrantyCoverage: '90-Day Written Warranty', turnaround: '30 Mins' },
      { serviceType: 'Safety Thermocouple Replacement', estimatedRangeAED: 'AED 140 – 220', warrantyCoverage: '90-Day Written Warranty', turnaround: '35 Mins' },
      { serviceType: 'Spark Ignition Module & Switch Harness Fix', estimatedRangeAED: 'AED 160 – 250', warrantyCoverage: '90-Day Written Warranty', turnaround: '40 Mins' },
      { serviceType: 'Oven Heating Element (Top/Bottom) Replacement', estimatedRangeAED: 'AED 220 – 350', warrantyCoverage: '90-Day Written Warranty', turnaround: '45 Mins' },
      { serviceType: 'Thermostat & Oven Selector Switch Overhaul', estimatedRangeAED: 'AED 240 – 380', warrantyCoverage: '90-Day Written Warranty', turnaround: '60 Mins' }
    ],
    faqs: [
      {
        question: 'Why does my cooking range burner turn off as soon as I let go of the knob?',
        answer: 'Modern gas stoves in Dubai feature a safety thermocouple that shuts off gas if no heat is detected. If the thermocouple is coated with carbon grease or has failed, it signals the safety valve to cut the gas. Our technicians clean, test, or replace the thermocouple in under 35 minutes.'
      },
      {
        question: 'Is it dangerous if my gas stove igniter keeps clicking?',
        answer: 'Continuous clicking usually happens when water or cooking spillover enters the knob switches, causing an electrical short. While not an immediate gas hazard, it can burn out the spark generator. We isolate and dry or replace the switch harness.'
      },
      {
        question: 'Do you repair electric ceramic and induction cooktops as well?',
        answer: 'Yes! We repair both gas cooking ranges and electric ceramic/induction hobs, including touch control boards, relay modules, and radiant heating coils.'
      }
    ]
  },

  'split-ac-repair-dubai': {
    slug: 'split-ac-repair-dubai',
    metaTitle: 'Split AC Repair Dubai | Deep Cleaning & Gas Refilling',
    metaDescription: 'Reliable split AC repair & pressure jet cleaning in Dubai. 30-45 min arrival, R410A refrigerant top-up, fan motor fixes & 60-day warranty. Book now!',
    h1: 'Split AC Repair & Deep Jet Cleaning in Dubai – Beat the Summer Heat',
    applianceName: 'Split AC & Chiller Unit',
    startingPrice: 110,
    avgTimeMin: 45,
    warranty: '60-Day Service Warranty',
    badge: 'Summer Essential',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    altText: 'HVAC technician pressure jet cleaning indoor split air conditioner evaporator coil in Dubai',
    dubaiClimateFactors: 'Dubai experiences extreme desert dust and fine sand particles that coat indoor evaporator fins and outdoor condenser coils. Clogged coils cause high head pressure, compressor thermal overload cutouts, musty odors, and up to 40% higher DEWA electricity bills.',
    brandCompatibility: ['O General', 'Mitsubishi', 'LG', 'Daikin', 'Gree', 'Carrier', 'Super General', 'Samsung', 'York'],
    commonFaults: [
      {
        title: 'AC Blowing Warm or Room-Temperature Air',
        description: 'Unit runs but does not drop the room temperature.',
        symptoms: ['Low R410A or R22 refrigerant pressure', 'Dirty, choked outdoor condenser coil', 'Blown compressor dual run capacitor', 'Frozen indoor evaporator coil'],
        fixApproach: 'Pressure test refrigerant circuit, recharge freon to OEM PSI specifications, replace weak capacitors, and pressure-wash condenser.'
      },
      {
        title: 'Water Dripping from Indoor Unit onto Wall',
        description: 'Condensation overflows the indoor drain tray, damaging wall paint and flooring.',
        symptoms: ['Drain line choked with gelatinous dust/mold buildup', 'Cracked drain tray', 'Improper indoor unit slope'],
        fixApproach: 'High-pressure nitrogen or vacuum flush of drain line, antibacterial chemical treatment, and slope adjustment.'
      },
      {
        title: 'Musty Mildew Odor & Weak Airflow',
        description: 'Airflow is restricted and room smells humid or dusty.',
        symptoms: ['Heavy dust carpet on evaporator coil', 'Blower wheel fins choked with lint', 'Dirty air filters'],
        fixApproach: 'Complete pressure jet wash using waterproof indoor wall funnel bags and eco-friendly coil cleaner.'
      }
    ],
    stepByStepProcess: [
      {
        step: '01',
        title: 'Rapid Booking & ETA',
        description: 'Fast 30-45 min arrival for cooling emergencies across Dubai.'
      },
      {
        step: '02',
        title: 'Deep Jet Wash & Sanitization',
        description: 'Indoor coil, blower wheel, and outdoor unit cleaned using pressure jet equipment.'
      },
      {
        step: '03',
        title: 'Refrigerant & Electrical Tuning',
        description: 'Capacitors tested, gas pressure optimized, and electrical wiring secured.'
      },
      {
        step: '04',
        title: 'Instant Temperature Drop Verified',
        description: 'Supply air temperature verified with digital laser thermometer. Warranty issued.'
      }
    ],
    pricingTable: [
      { serviceType: 'AC Diagnostic Inspection & Gas Check', estimatedRangeAED: 'AED 90', warrantyCoverage: 'Waived 100% on repair', turnaround: '20 Mins' },
      { serviceType: 'Deep Chemical Jet Cleaning (Indoor + Outdoor)', estimatedRangeAED: 'AED 110 – 160', warrantyCoverage: '60-Day Service Warranty', turnaround: '45 Mins' },
      { serviceType: 'Drain Line Pressure Unclog & Sanitization', estimatedRangeAED: 'AED 120 – 150', warrantyCoverage: '60-Day Service Warranty', turnaround: '30 Mins' },
      { serviceType: 'Dual Run Capacitor Replacement', estimatedRangeAED: 'AED 140 – 220', warrantyCoverage: '60-Day Service Warranty', turnaround: '30 Mins' },
      { serviceType: 'R410A / R22 Refrigerant Gas Top-Up & Charge', estimatedRangeAED: 'AED 160 – 260', warrantyCoverage: '60-Day Service Warranty', turnaround: '40 Mins' },
      { serviceType: 'Blower Fan Motor & PCB Control Board Repair', estimatedRangeAED: 'AED 220 – 350', warrantyCoverage: '60-Day Service Warranty', turnaround: '60 Mins' }
    ],
    faqs: [
      {
        question: 'How often should split AC units be serviced in Dubai?',
        answer: 'Due to desert dust and continuous summer operation, split AC filters should be cleaned every month, and deep chemical pressure jet cleaning should be performed every 4 to 6 months to prevent compressor strain and excessive DEWA power bills.'
      },
      {
        question: 'Why is water leaking from my indoor AC unit?',
        answer: 'In Dubai’s high humidity, the AC removes gallons of moisture daily. Dust accumulates in the drain pan and forms algae sludge that blocks the drain pipe. A quick vacuum flush and chemical sanitization clears the clog immediately.'
      }
    ]
  }
};

export interface AreaSeoData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  etaMin: number;
  activeTechs: number;
  popularAppliances: string[];
  zoneHighlights: string;
  housingTypes: string;
  landmarks: string[];
}

export const AREAS_SEO_DATA: Record<string, AreaSeoData> = {
  'international-city': {
    slug: 'international-city',
    name: 'International City',
    metaTitle: 'Appliance Repair International City Dubai | 15-Min Arrival',
    metaDescription: 'Local appliance repair hub in International City, Dubai. Shop 10, Building X4. 15-25 min arrival for washing machines, fridges & cookers with 90-day warranty!',
    h1: 'Home Appliance Repair in International City, Dubai – Our Workshop Hub',
    etaMin: 20,
    activeTechs: 4,
    popularAppliances: ['Washing Machines', 'Refrigerators & Freezers', 'Cooking Ranges', 'Dishwashers'],
    zoneHighlights: 'Our central Dubai workshop and spare parts depot is based at Shop 10, Building X4, International City. We provide the fastest 15 to 25-minute doorstep dispatch across all residential clusters and commercial buildings.',
    housingTypes: 'Studio, 1-bed & 2-bed apartments across all residential residential blocks.',
    landmarks: ['Dragon Mart 1 & 2', 'Warsan Lake', 'Central District Commercial Avenue']
  },
  'dubai-silicon-oasis': {
    slug: 'dubai-silicon-oasis',
    name: 'Dubai Silicon Oasis (DSO)',
    metaTitle: 'Appliance Repair Dubai Silicon Oasis (DSO) | 25-Min Fix',
    metaDescription: 'Fast household appliance repair in Dubai Silicon Oasis. Same-day repair for washing machines, fridges, ovens & dishwashers. 90-day warranty. Call +971 55 630 2344!',
    h1: 'Appliance Repair in Dubai Silicon Oasis (DSO) – 25–35 Min Arrival',
    etaMin: 25,
    activeTechs: 3,
    popularAppliances: ['Front-load Washers', 'French-door Refrigerators', 'Built-in Dishwashers', 'Ceramic Hobs'],
    zoneHighlights: 'Stationed right next to Dubai Silicon Oasis with direct access via Dubai-Al Ain Road and Sheikh Mohammed Bin Zayed Road (E311). Reliable same-day doorstep service.',
    housingTypes: 'High-tech residential towers (Silicon Gates, Axis, Palace Towers) and family villa compounds (Cedre & Semmer Villas).',
    landmarks: ['Silicon Central Mall', 'DSO HQ', 'Rochester Institute of Technology (RIT)']
  },
  'mirdif': {
    slug: 'mirdif',
    name: 'Mirdif',
    metaTitle: 'Appliance Repair Mirdif Dubai | Washing Machine & Fridge Fix',
    metaDescription: 'Certified appliance repair in Mirdif & Uptown Mirdif. 30-40 min arrival for ovens, washing machines & refrigerators with 90-day warranty. Free inspection on repair!',
    h1: 'Appliance Repair in Mirdif & Uptown Mirdif – Same-Day Service',
    etaMin: 30,
    activeTechs: 2,
    popularAppliances: ['Large Capacity Washers', 'Gas Cooking Ranges', 'Dishwashers', 'American Fridge Freezers'],
    zoneHighlights: 'Dedicated mobile van units servicing standalone private villas, compound residences, and Uptown Mirdif apartments.',
    housingTypes: 'Private luxury villas, compound communities (Ghoroob, Shorooq), and Uptown Mirdif low-rise complexes.',
    landmarks: ['City Centre Mirdif', 'Mushrif Park', 'Uptown Mirdif Mall']
  },
  'al-warqa': {
    slug: 'al-warqa',
    name: 'Al Warqa',
    metaTitle: 'Appliance Repair Al Warqa Dubai | 25-35 Min Doorstep Service',
    metaDescription: 'Trusted home appliance repair across Al Warqa 1, 2, 3 & 4. Washing machines, refrigerators, cookers & AC repairs. 90-day formal warranty. Call or WhatsApp!',
    h1: 'Home Appliance Repair in Al Warqa (1, 2, 3 & 4) – Rapid Dispatch',
    etaMin: 25,
    activeTechs: 2,
    popularAppliances: ['Cooking Ranges & Ovens', 'Washing Machines', 'Chillers & Fridges', 'Split ACs'],
    zoneHighlights: 'Immediate proximity to our International City workshop. Rapid 25 to 35-minute arrival across all four Al Warqa sectors.',
    housingTypes: 'Spacious independent family villas and modern residential apartment buildings.',
    landmarks: ['Al Warqa Mall', 'Warqa City Mall', 'Safari Park']
  },
  'business-bay': {
    slug: 'business-bay',
    name: 'Business Bay',
    metaTitle: 'Appliance Repair Business Bay Dubai | Fast Doorstep Fix',
    metaDescription: 'Emergency appliance repair in Business Bay, Dubai. Washing machines, dishwashers, fridges & cookers repaired in 35-45 mins. 90-day warranty. Call +971 55 630 2344!',
    h1: 'Appliance Repair in Business Bay, Dubai – Fast Doorstep Service',
    etaMin: 35,
    activeTechs: 3,
    popularAppliances: ['Built-in Dishwashers', 'Inverter Refrigerators', 'Washer-Dryer Combos', 'Ceramic Hobs'],
    zoneHighlights: 'Our technicians are equipped to handle building security gate passes and high-rise service elevators efficiently across the canal district.',
    housingTypes: 'High-rise luxury residential towers (Executive Towers, Bayz, Damac Towers).',
    landmarks: ['Dubai Water Canal', 'Bay Avenue Mall', 'The Opus by Zaha Hadid']
  },
  'downtown-dubai': {
    slug: 'downtown-dubai',
    name: 'Downtown Dubai',
    metaTitle: 'Appliance Repair Downtown Dubai | Luxury Kitchen Appliance Fix',
    metaDescription: 'Specialized home appliance repair in Downtown Dubai. Miele, Bosch, Siemens & Samsung luxury appliance servicing with 90-day warranty. Rapid on-site visits.',
    h1: 'Luxury Appliance Repair in Downtown Dubai – 35–45 Min Arrival',
    etaMin: 35,
    activeTechs: 2,
    popularAppliances: ['Miele & Bosch Dishwashers', 'Sub-Zero & Siemens Fridges', 'Induction Cooktops', 'Washer-Dryers'],
    zoneHighlights: 'Experienced in servicing high-end European and luxury appliances with white-glove cleanliness standards.',
    housingTypes: 'Ultra-luxury residential skyscrapers and Old Town heritage apartments.',
    landmarks: ['Burj Khalifa', 'The Dubai Mall', 'Dubai Opera']
  },
  'dubai-marina': {
    slug: 'dubai-marina',
    name: 'Dubai Marina & JBR',
    metaTitle: 'Appliance Repair Dubai Marina & JBR | Same-Day Service',
    metaDescription: 'Fast doorstep appliance repair in Dubai Marina and JBR. Washing machines, refrigerators, cookers & dishwashers. 90-day warranty. Free inspection on repair!',
    h1: 'Appliance Repair in Dubai Marina & JBR – Same-Day Doorstep Service',
    etaMin: 40,
    activeTechs: 3,
    popularAppliances: ['Washer-Dryers', 'Double-Door Refrigerators', 'Dishwashers', 'Cooking Ranges'],
    zoneHighlights: 'Stationed mobile service team ensuring swift response times despite Marina traffic.',
    housingTypes: 'High-density residential towers and waterfront penthouses.',
    landmarks: ['Marina Mall', 'The Walk JBR', 'Marina Promenade']
  },
  'jvc': {
    slug: 'jvc',
    name: 'Jumeirah Village Circle (JVC)',
    metaTitle: 'Appliance Repair JVC Dubai | Fast Washing Machine & Fridge Fix',
    metaDescription: 'Emergency appliance repair in Jumeirah Village Circle (JVC). 35-45 min arrival for washers, refrigerators, ovens & dishwashers. 90-day warranty on all repairs.',
    h1: 'Appliance Repair in JVC (Jumeirah Village Circle) – 35–45 Min Arrival',
    etaMin: 35,
    activeTechs: 3,
    popularAppliances: ['Washing Machines', 'Refrigerators', 'Gas Cookers & Ovens', 'Dishwashers'],
    zoneHighlights: 'High-density residential fleet coverage servicing all JVC districts from District 10 to District 18.',
    housingTypes: 'Townhouses, low-to-mid rise modern residential apartment communities.',
    landmarks: ['Circle Mall', 'Halfa Park', 'Five Jumeirah Village']
  }
};
