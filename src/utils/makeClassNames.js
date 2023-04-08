/**
 * @param {*} request an object where prop names are possiblle classes ant related values are boolean represented should result contain this calss ot not
 * @returns {string} string that contains all required classes
 */
const makeClassNames = (request) =>
  Object.entries(request)
    .map(([className, shouldInclude]) => Boolean(shouldInclude) && className)
    .filter(Boolean)
    .join(' ');

export default makeClassNames;
