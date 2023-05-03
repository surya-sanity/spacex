export interface Rocket {
  active: boolean;

  boosters: number;

  company: string;

  cost_per_launch: number;

  country: string;

  description: string;

  diameter: {
    meters: number;
    feet: number;
  };

  engines: {
    number: number;
    type: string;
    version: string;
    layout: string;
    isp: {
      sea_level: number;
      vacuum: number;
    };
    engine_loss_max: number;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
    thrust_to_weight: number;
  };

  first_flight: string;

  first_stage: {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
  };

  flickr_images: string[];

  height: {
    meters: number;
    feet: number;
  };

  id: string;

  landing_legs: {
    number: number;
    material: string;
  };

  mass: {
    kg: number;
    lb: number;
  };

  name: string;

  payload_weights: {
    id: string;
    name: string;
    kg: number;
    lb: number;
  }[];

  second_stage: {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
    thrust: {
      kN: number;
      lbf: number;
    };
    payloads: {
      option_1: string;
      composite_fairing: {
        height: {
          meters: number;
          feet: number;
        };
        diameter: {
          meters: number;
          feet: number;
        };
      };
    };
  };

  stages: number;

  success_rate_pct: number;

  type: string;

  wikipedia: string;
}
