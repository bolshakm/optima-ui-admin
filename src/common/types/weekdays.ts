export interface DayOfWeek {
  selected: boolean;
  timePeriods: string;
}

export interface WeekDays {
  Mon: DayOfWeek;
  Tue: DayOfWeek;
  Wed: DayOfWeek;
  Thu: DayOfWeek;
  Fri: DayOfWeek;
  Sat: DayOfWeek;
  Sun: DayOfWeek;
}