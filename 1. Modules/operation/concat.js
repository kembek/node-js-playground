// глобальная переменная
prefix = "Concat";

module.exports = function(...str) {
  return `${prefix}: ${str.join(" ")}`;
};
