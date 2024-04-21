import * as yup from 'yup';

export const createSchema = yup.object().shape({
  name: yup.string().required(),
});


export const updateSchema = yup.object().shape({
  name: yup.string(),
  workingHours: yup.array().of(
    yup.object().shape({
      day: yup.string(),
      time: yup.string(),
    })
  ),
  defLang: yup.string(),
  facebook: yup.string().url(),
  instagram: yup.string().url(),
  tripAdvisor: yup.string().url(),
  googleReview: yup.string().url(),
  bannerUrl: yup.string().url(),
  languageSet: yup.array().of(yup.string()),
});

export const languageSchema = yup.object().shape({
  name: yup.string(),
  defLang: yup.string(),
});


