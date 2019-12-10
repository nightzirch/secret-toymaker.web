import { getGlobal } from "reactn";

export const isParticipatingInEvent = year => {
  const { participations } = getGlobal();

  if (!participations || participations.length === 0) {
    return false;
  }

  return participations.filter(event => event.year === year).length > 0;
};
