const stats = require("../urls/stats.json")
const lessons = require("../urls/lessons.json")
const levels = require("../urls/levels.json")
const share = require("../urls/share.json")
const signin = require("../urls/signin.json")

const getSigninUrl = (lang) => {
  if (lang === "en") return `/${signin[lang].signin}/`

  return `/${lang}/${signin[lang].signin}/`
}

exports.getSigninUrl = getSigninUrl;

exports.getSigninLinkValidationUrl = (lang) => {
  return `${getSigninUrl(lang)}${signin[lang].validation}/`
}

exports.navigateToStats = (lang) => {
  if (lang === "en") return `/${stats[lang]}/`

  return `/${lang}/${stats[lang]}/`
}

exports.getShareUrl = (lang) => {
  if (lang === "en") return `/${share[lang]}/`

  return `/${lang}/${share[lang]}/`
}

exports.navigateToLessons = (lang) => {
  return lang === "en"
    ? `/${lessons[lang].index}/`
    : `/${lang}/${lessons[lang].index}/`
}

exports.getLessonUrl = ({ lang, level, url }) => {
  return lang === "en"
    ? `/${lessons[lang].index}/${levels[lang][level]}/${url}/`
    : `/${lang}/${lessons[lang].index}/${levels[lang][level]}/${url}/`
}

exports.getCourseUrl = ({ lang, level }) => {
  return lang === "en"
    ? `/${lessons[lang].index}/${levels[lang][level]}/`
    : `/${lang}/${lessons[lang].index}/${levels[lang][level]}/`
}

exports.getCoursesUrl = ({ lang }) => {
  return lang === "en"
    ? `/${lessons[lang].index}/`
    : `/${lang}/${lessons[lang].index}/`
}

exports.navigateToHome = (lang) => {
  return lang === "en" ? "/" : `/${lang}/`
}