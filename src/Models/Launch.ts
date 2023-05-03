export interface Launch {
  auto_update: boolean;

  capsules: string[];

  cores: {
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean;
    landing_success: boolean;
    landing_type: string;
    landpad: string;
  }[];

  crew: string[];

  date_local: string;

  date_precision: string;

  date_unix: number;

  date_utc: string;

  details: string;

  failures: {
    time: number;
    altitude: number;
    reason: string;
  }[];

  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ships: string[];
  };

  flight_number: number;

  id: string;

  launchpad: string;

  links: {
    patch: {
      small: string;
      large: string;
    };
    reddit: {
      campaign: string;
      launch: string;
      media: string;
      recovery: string;
    };
    flickr: {
      small: string[];
      original: string[];
    };
    presskit: string;
    webcast: string;
    youtube_id: string;
    article: string;
    wikipedia: string;
  };

  name: string;

  net: boolean;

  payloads: string[];

  rocket: string;

  ships: string[];

  static_fire_date_unix: number;

  static_fire_date_utc: string;

  success: boolean;

  tdb: boolean;

  upcoming: boolean;

  window: number;
}