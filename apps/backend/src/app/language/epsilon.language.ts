import {Explanation} from '@opres/shared/types';

export const epsilonLanguage = (calculationText: string): Explanation => ({
  hu: `Annak érdekében, hogy megkapjuk az epszilon értékét össze kell szoroznunk az elszállított egységeket azok költségeivel, majd ezeket össze kell adnunk. Tehát:<br><strong>${calculationText}</strong>`,
  en: `In order to get the epsilon we have to multiply every transported unit by its cost (these are inside the green badges) and then add these values together. So:<br><strong>${calculationText}</strong>`,
});
