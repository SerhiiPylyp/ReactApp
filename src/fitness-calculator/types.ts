export interface ResultI {
  bmi: number;
  health: HealthEnum;
  healthy_bmi_range: string;
}

export enum HealthEnum {
  normal = 'Normal',
  tooThinness = 'Severe Thinness',
  thinness = 'Moderate Thinness',
  overweight = 'Overweight',
  obese1 = 'Obese Class I',
  obese2 = 'Obese Class II',
  obese3 = 'Obese Class III',
}
