type PosisbbleDate = Date | string | number;

function convertToDate(date: PosisbbleDate) {
  return date instanceof Date ? date : new Date(date);
}

interface Unit {
  unit: Intl.RelativeTimeFormatUnit;
  value: EpochTimeStamp;
}

const TIME_UNITS: Unit[] = [
  { unit: "year", value: 365 * 24 * 60 * 60 * 1000 },
  { unit: "month", value: (365 / 12) * 24 * 60 * 60 * 1000 },
  { unit: "week", value: 7 * 24 * 60 * 60 * 1000 },
  { unit: "day", value: 24 * 60 * 60 * 1000 },
  { unit: "hour", value: 60 * 60 * 1000 },
  { unit: "minute", value: 60 * 1000 },
  { unit: "second", value: 1000 },
];

const relativeTimeOptions: Intl.RelativeTimeFormatOptions = {
  localeMatcher: "best fit",
  numeric: "always",
  style: "long",
};

function getTimeSince(date: PosisbbleDate) {
  const rtf = new Intl.RelativeTimeFormat("en", relativeTimeOptions);
  const elapsed = convertToDate(date).valueOf() - Date.now().valueOf();

  for (const { unit, value } of TIME_UNITS) {
    if (unit === "second" || Math.abs(elapsed) >= value) {
      return rtf.format(Math.floor(elapsed / value), unit);
    }
  }
}

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

function formatDate(date: PosisbbleDate, options = dateTimeFormatOptions) {
  const outOfRange = Number.isNaN(convertToDate(date).getTime());
  const notTimestamp = String(convertToDate(date).valueOf()).length < 12;

  if (outOfRange || notTimestamp) {
    throw new Error(
      `Invalid date was passed in to formatDate function: "${date}"`,
    );
  }

  return new Intl.DateTimeFormat("pl", options).format(convertToDate(date));
}

export { formatDate, getTimeSince };
