const INSATISFACTORY_TITLES = ['Improvement Opportunity Ahead!', 'Let\'s Work Towards Progress!', 'Let\'s Enhance Together!'];
const BELOW_AVG_TITLES = ['Progress is Key.', 'Time to Elevate.', 'Aiming for Better Results.', 'Achieving Consistency.'];
const AVG_TITLES = ['On the Right Track.', 'Consistent Performance.', 'Keeping Up the Good Work.', 'Doing Well.'];
const ABOVE_AVG_TITLES = ['Excellent Effort!', 'Great Job!', 'Going Beyond Expectations.', 'Exceeding Standards.', 'Bravo!'];
const VERY_GOOD_TITLES = ['Exceptional Work!', 'Outstanding Effort!', 'Impressive Results!', 'Phenomenal Performance!'];
const EXCELLENT_TITLES = ['Congratulations!! 🎉🎉', 'Absolutely Fantastic!', 'Perfect Score!', 'Top of the Class!'];

const getRandomTitle = (titles: string[]) => {
  const index = Math.floor(Math.random() * titles.length);
  return titles[index];
}

const TITLE_MAP = {
  0: INSATISFACTORY_TITLES,
  4: BELOW_AVG_TITLES,
  6: AVG_TITLES,
  8: ABOVE_AVG_TITLES,
  9: VERY_GOOD_TITLES,
};

export const getTitle = (feedback: number) => {
  for (const [key, value] of Object.entries(TITLE_MAP)) {
    if (feedback < parseInt(key)) {
      return getRandomTitle(value);
    }
  }

  return getRandomTitle(EXCELLENT_TITLES);
};
